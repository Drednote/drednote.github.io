import moment from 'moment'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import { TFunction } from 'i18next'
import { Content, StyleDictionary, TDocumentDefinitions } from 'pdfmake/interfaces'
import { DATE_FORMAT } from '@const/time'
import experiences from '@public/experience/experience.json'
import projects from '@public/projects/projects.json'
import { Experience } from '@modules/card-content/work-experience/ExperienceContent'
import { Project } from '@modules/card-content/projects/ProjectContent'

type MarkdownModule = { default: string }
type ResumeMeta = {
  fileName: string
  name: string
  headline: string
  phone: string
  preferredContact: string
  contacts: string[]
  location: string
  availability: string
  position: string
  positionDetails: string
  education: {
    year: string
    title: string
    description: string
  }[]
  languages: string
}

type ResumeData = {
  about: string
  contact: string
  resume: ResumeMeta
  experiences: { json: Experience; md: string }[]
  projects: { json: Project; md: string }[]
}

type PdfFonts = {
  pdfMake: {
    vfs: Record<string, string>
  }
}

type MarkdownBlock = {
  type: 'title' | 'paragraph' | 'bullet'
  text: string
}

type RichText = string | { text: string; bold?: boolean; style?: string; color?: string }[]

const styles: StyleDictionary = {
  name: {
    bold: true,
    fontSize: 22,
    margin: [0, 0, 0, 6],
  },
  subtitle: {
    fontSize: 8.9,
    color: '#333333',
    margin: [0, 0, 0, 3],
  },
  contactLine: {
    fontSize: 8.4,
    color: '#333333',
    margin: [0, 0, 0, 3],
  },
  sectionTitle: {
    bold: true,
    fontSize: 13,
    margin: [0, 12, 0, 7],
  },
  roleTitle: {
    bold: true,
    fontSize: 10.4,
    margin: [0, 0, 0, 2],
  },
  company: {
    fontSize: 9.6,
    margin: [0, 0, 0, 2],
  },
  link: {
    color: '#4779bd',
    fontSize: 8.6,
    margin: [0, 0, 0, 5],
  },
  date: {
    color: '#666666',
    fontSize: 8.2,
  },
  paragraph: {
    fontSize: 8.9,
    lineHeight: 1.18,
    margin: [0, 0, 0, 4],
  },
  small: {
    fontSize: 8.5,
    lineHeight: 1.18,
  },
  code: {
    color: '#333333',
    background: '#eeeeee',
  },
  blockTitle: {
    bold: true,
    fontSize: 9.2,
    margin: [0, 3, 0, 3],
  },
}

const loadResumeData = async (lang: string): Promise<ResumeData> => {
  const aboutModule = (await import(`@public/text/${lang}/about-me.md`)) as MarkdownModule
  const contactModule = (await import(`@public/text/${lang}/contact.md`)) as MarkdownModule
  const resumeModule = (await import(`@public/text/${lang}/resume.json`)) as {
    default: ResumeMeta
  }

  const experienceData = await Promise.all(
    (experiences as { rel: string }[]).map(async (experience) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const json = (await import(`@public/experience/${lang}/${experience.rel}.json`))
        .default as Experience
      const md = (
        (await import(`@public/experience/${lang}/${experience.rel}.md`)) as MarkdownModule
      ).default
      return { json, md }
    }),
  )

  const projectData = await Promise.all(
    (projects as { rel: string }[]).map(async (project) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const json = (await import(`@public/projects/${lang}/${project.rel}.json`)).default as Project
      const md = ((await import(`@public/projects/${lang}/${project.rel}.md`)) as MarkdownModule)
        .default
      return { json, md }
    }),
  )

  return {
    about: aboutModule.default,
    contact: contactModule.default,
    resume: resumeModule.default,
    experiences: experienceData,
    projects: projectData,
  }
}

const inlineMarkdown = (text: string): RichText => {
  const parts: Exclude<RichText, string> = []
  const pattern = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ text: text.slice(lastIndex, match.index) })
    }

    const token = match[0]
    if (token.startsWith('**')) {
      parts.push({ text: token.slice(2, -2), bold: true })
    } else if (token.startsWith('`')) {
      parts.push({ text: token.slice(1, -1), style: 'code' })
    } else {
      const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(token)
      parts.push({ text: link ? `${link[1]}: ${link[2]}` : token, color: '#4779bd' })
    }

    lastIndex = match.index + token.length
  }

  if (lastIndex < text.length) {
    parts.push({ text: text.slice(lastIndex) })
  }

  return parts.length === 1 &&
    !('bold' in parts[0]) &&
    !('style' in parts[0]) &&
    !('color' in parts[0])
    ? parts[0].text
    : parts
}

const markdownBlocks = (text: string): MarkdownBlock[] => {
  const blocks: MarkdownBlock[] = []
  const paragraph: string[] = []
  let lastBullet: MarkdownBlock | undefined

  const flushParagraph = () => {
    if (!paragraph.length) {
      return
    }

    blocks.push({ type: 'paragraph', text: paragraph.join(' ') })
    paragraph.length = 0
  }

  text
    .replace(/\r/g, '')
    .split('\n')
    .forEach((rawLine) => {
      const line = rawLine.trim()

      if (!line) {
        flushParagraph()
        lastBullet = undefined
        return
      }

      const title = /^#{1,6}\s+(.+)$/.exec(line)
      if (title) {
        flushParagraph()
        blocks.push({ type: 'title', text: title[1] })
        lastBullet = undefined
        return
      }

      const bullet = /^-\s+(.+)$/.exec(line)
      if (bullet) {
        flushParagraph()
        lastBullet = { type: 'bullet', text: bullet[1] }
        blocks.push(lastBullet)
        return
      }

      if (/^\s/.test(rawLine) && lastBullet) {
        lastBullet.text = `${lastBullet.text} ${line}`
        return
      }

      lastBullet = undefined
      paragraph.push(line)
    })

  flushParagraph()
  return blocks
}

const formatDateRange = (
  startDate: string,
  endDate: string | undefined,
  lang: string,
  present: string,
) => {
  const start = moment(startDate, DATE_FORMAT).locale(lang)
  const end = endDate ? moment(endDate, DATE_FORMAT).locale(lang) : null
  return `${start.format('MMMM YYYY')} - ${end ? end.format('MMMM YYYY') : present}`
}

const getExperienceSkills = (items: ResumeData['experiences']) =>
  Array.from(new Set(items.flatMap((item) => item.json.skills)))

const section = (title: string): Content[] => [
  {
    canvas: [
      {
        type: 'line',
        x1: 0,
        y1: 0,
        x2: 503,
        y2: 0,
        lineWidth: 0.7,
        lineColor: '#d8d8d8',
      },
    ],
    margin: [0, 9, 0, 0],
  },
  { text: title, style: 'sectionTitle' },
]

const markdownContent = (text: string, maxParagraphs?: number): Content[] => {
  const content: Content[] = []
  const blocks = markdownBlocks(text)
  const limitedBlocks = typeof maxParagraphs === 'number' ? blocks.slice(0, maxParagraphs) : blocks

  limitedBlocks.forEach((block) => {
    if (block.type === 'title') {
      content.push({ text: inlineMarkdown(block.text), style: 'blockTitle' })
      return
    }

    if (block.type === 'bullet') {
      content.push({
        ul: [{ text: inlineMarkdown(block.text), style: 'small' }],
        margin: [0, 0, 0, 2],
      })
      return
    }

    content.push({ text: inlineMarkdown(block.text), style: 'paragraph' })
  })

  return content
}

const divider = (margin: [number, number, number, number] = [0, 4, 0, 8]): Content => ({
  canvas: [
    {
      type: 'line',
      x1: 0,
      y1: 0,
      x2: 503,
      y2: 0,
      lineWidth: 0.45,
      lineColor: '#e6e6e6',
    },
  ],
  margin,
})

const separated = (items: Content[], margin?: [number, number, number, number]) =>
  items.flatMap((item, index) => (index === items.length - 1 ? [item] : [item, divider(margin)]))

const experienceBlock = (
  item: { json: Experience; md: string },
  lang: string,
  t: TFunction,
): Content => ({
  columns: [
    {
      width: 112,
      text: formatDateRange(item.json.startDate, item.json.endDate, lang, t('experience_present')),
      style: 'date',
    },
    {
      width: '*',
      stack: [
        { text: item.json.title, style: 'roleTitle' },
        { text: item.json.company, style: 'company' },
        { text: item.json.href, style: 'link' },
        ...markdownContent(item.md),
        {
          text: `${t('resume_stack-prefix')}: ${item.json.skills.join(', ')}`,
          style: 'small',
          margin: [0, 3, 0, 10],
        },
      ],
    },
  ],
  columnGap: 10,
  margin: [0, 0, 0, 4],
})

const projectBlock = (item: { json: Project; md: string }, t: TFunction): Content => ({
  stack: [
    { text: item.json.title, style: 'roleTitle' },
    { text: item.json.href, style: 'link' },
    ...markdownContent(item.md, 3),
    {
      text: `${t('resume_stack-prefix')}: ${item.json.skills.join(', ')}`,
      style: 'small',
      margin: [0, 2, 0, 8],
    },
  ],
})

const educationBlock = (education: ResumeMeta['education'][number]): Content => ({
  columns: [
    { width: 112, text: education.year, style: 'date' },
    {
      width: '*',
      stack: [
        {
          text: education.title,
          style: 'roleTitle',
        },
        {
          text: education.description,
          style: 'paragraph',
        },
      ],
    },
  ],
  columnGap: 10,
  margin: [0, 0, 0, 4],
})

const buildDocumentDefinition = (
  data: ResumeData,
  lang: string,
  t: TFunction,
): TDocumentDefinitions => {
  const { resume } = data
  const content: Content[] = [
    {
      columns: [
        {
          width: '*',
          stack: [
            { text: resume.name, style: 'name' },
            { text: resume.headline, style: 'subtitle' },
            { text: `${resume.location}. ${resume.availability}`, style: 'subtitle' },
          ],
        },
        {
          width: 188,
          stack: [
            {
              text: `${resume.phone}`,
              bold: true,
              style: 'contactLine',
              alignment: 'right',
            },
            {
              text: `${t('resume_preferred-contact')}: ${resume.preferredContact}`,
              style: 'contactLine',
              alignment: 'right',
            },
            ...resume.contacts.map((contact) => ({
              text: contact,
              style: 'contactLine',
              alignment: 'right' as const,
            })),
          ],
        },
      ],
      columnGap: 18,
      margin: [0, 0, 0, 7],
    },
    divider([0, 0, 0, 8]),
    ...section(t('resume_position-title')),
    { text: resume.position, bold: true, fontSize: 12, margin: [0, 0, 0, 4] },
    { text: resume.positionDetails, style: 'paragraph' },
    ...section(t('resume_work-title')),
    ...separated(
      data.experiences.map((item) => experienceBlock(item, lang, t)),
      [122, 2, 0, 8],
    ),
    ...section(t('resume_education-title')),
    ...separated(resume.education.map(educationBlock), [122, 2, 0, 8]),
    ...section(t('resume_skills-title')),
    { text: resume.languages, style: 'paragraph' },
    {
      text: getExperienceSkills(data.experiences).join('      '),
      style: 'small',
      margin: [0, 0, 0, 5],
    },
    ...section(t('resume_about-title')),
    ...markdownContent(data.about, 4),
    ...section(t('projects_title')),
    ...separated(
      data.projects.map((item) => projectBlock(item, t)),
      [0, 2, 0, 8],
    ),
    ...section(t('resume_contacts-title')),
    ...markdownContent(data.contact),
  ]

  return {
    pageSize: 'A4',
    pageMargins: [46, 38, 46, 38],
    defaultStyle: {
      font: 'Roboto',
      fontSize: 9,
      color: '#222222',
    },
    styles,
    content,
  }
}

export const downloadResumePdf = async (lang: string, t: TFunction) => {
  pdfMake.vfs = (pdfFonts as PdfFonts).pdfMake.vfs
  const data = await loadResumeData(lang)
  const documentDefinition = buildDocumentDefinition(data, lang, t)

  await new Promise<void>((resolve) => {
    pdfMake.createPdf(documentDefinition).download(data.resume.fileName, resolve)
  })
}
