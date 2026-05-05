import moment from 'moment'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import { Content, StyleDictionary, TDocumentDefinitions } from 'pdfmake/interfaces'
import { DATE_FORMAT } from '@const/time'
import { Lang } from '@const/lang'
import experiences from '@public/experience/experience.json'
import projects from '@public/projects/projects.json'
import { Experience } from '@modules/card-content/work-experience/ExperienceContent'
import { Project } from '@modules/card-content/projects/ProjectContent'

type MarkdownModule = { default: string }
type ResumeData = {
  about: string
  contact: string
  experiences: { json: Experience; md: string }[]
  projects: { json: Project; md: string }[]
}

type PdfFonts = {
  pdfMake: {
    vfs: Record<string, string>
  }
}

const FILE_NAME = 'Галушко Иван.pdf'

const SKILLS = [
  'Java',
  'Spring Boot',
  'Spring Framework',
  'MongoDB',
  'Gradle',
  'RabbitMQ',
  'Linux',
  'Apache Kafka',
  'PostgreSQL',
  'Hibernate ORM',
  'Gitlab CI',
  'TypeScript',
  'React + Redux',
  'Docker',
  'Kubernetes',
]

const styles: StyleDictionary = {
  name: {
    bold: true,
    fontSize: 22,
    margin: [0, 0, 0, 6],
  },
  subtitle: {
    fontSize: 9.2,
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
  blockTitle: {
    bold: true,
    fontSize: 9.2,
    margin: [0, 3, 0, 3],
  },
}

const loadResumeData = async (lang: Lang): Promise<ResumeData> => {
  const aboutModule = (await import(`@public/text/${lang}/about-me.md`)) as MarkdownModule
  const contactModule = (await import(`@public/text/${lang}/contact.md`)) as MarkdownModule

  const experienceData = await Promise.all(
    (experiences as { rel: string }[]).map(async (experience) => {
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
      const json = (await import(`@public/projects/${lang}/${project.rel}.json`))
        .default as Project
      const md = ((await import(`@public/projects/${lang}/${project.rel}.md`)) as MarkdownModule)
        .default
      return { json, md }
    }),
  )

  return {
    about: aboutModule.default,
    contact: contactModule.default,
    experiences: experienceData,
    projects: projectData,
  }
}

const stripMarkdown = (text: string) =>
  text
    .replace(/\[(.*?)\]\((.*?)\)/g, '$1: $2')
    .replace(/[`*_>#]/g, '')
    .replace(/\r/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim()

const markdownToLines = (text: string) =>
  stripMarkdown(text)
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)

const formatDateRange = (startDate: string, endDate: string | undefined, lang: Lang) => {
  const start = moment(startDate, DATE_FORMAT).locale(lang)
  const end = endDate ? moment(endDate, DATE_FORMAT).locale(lang) : null
  const present = lang === Lang.ru ? 'настоящее время' : 'Present'
  return `${start.format('MMMM YYYY')} - ${end ? end.format('MMMM YYYY') : present}`
}

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
  const lines = markdownToLines(text)
  const limitedLines = typeof maxParagraphs === 'number' ? lines.slice(0, maxParagraphs) : lines

  limitedLines.forEach((line) => {
    if (line.endsWith(':')) {
      content.push({ text: line, style: 'blockTitle' })
      return
    }

    if (line.startsWith('- ')) {
      content.push({
        ul: [{ text: line.replace(/^-\s*/, ''), style: 'small' }],
        margin: [0, 0, 0, 1],
      })
      return
    }

    content.push({ text: line, style: 'paragraph' })
  })

  return content
}

const experienceBlock = (item: { json: Experience; md: string }, lang: Lang): Content => ({
  columns: [
    {
      width: 112,
      text: formatDateRange(item.json.startDate, item.json.endDate, lang),
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
          text: `${lang === Lang.ru ? 'Стек технологий' : 'Tech stack'}: ${item.json.skills.join(
            ', ',
          )}`,
          style: 'small',
          margin: [0, 3, 0, 10],
        },
      ],
    },
  ],
  columnGap: 10,
  margin: [0, 0, 0, 4],
})

const projectBlock = (item: { json: Project; md: string }, lang: Lang): Content => ({
  stack: [
    { text: item.json.title, style: 'roleTitle' },
    { text: item.json.href, style: 'link' },
    ...markdownContent(item.md, 3),
    {
      text: `${lang === Lang.ru ? 'Стек технологий' : 'Tech stack'}: ${item.json.skills.join(
        ', ',
      )}`,
      style: 'small',
      margin: [0, 2, 0, 8],
    },
  ],
})

const buildDocumentDefinition = (data: ResumeData, lang: Lang): TDocumentDefinitions => {
  const isRu = lang === Lang.ru
  const content: Content[] = [
    { text: isRu ? 'Галушко Иван' : 'Ivan Galushko', style: 'name' },
    {
      text: isRu
        ? 'Мужчина, 28 лет, родился 10 сентября 1997'
        : 'Male, 28 years old, born September 10, 1997',
      style: 'subtitle',
    },
    {
      text: isRu
        ? '+7 (925) 384-61-39 - предпочитаемый способ связи: telegram'
        : '+7 (925) 384-61-39 - preferred contact method: telegram',
      style: 'subtitle',
    },
    {
      text: 'telegram: @mr_drednote • galushko.ivan8@gmail.com • https://drednote.github.io',
      style: 'subtitle',
    },
    {
      text: isRu
        ? 'Проживает: Москва. Готов работать удаленно, не готов к командировкам.'
        : 'Location: Moscow. Ready to work remotely, not ready for business trips.',
      style: 'subtitle',
      margin: [0, 0, 0, 8],
    },
    ...section(isRu ? 'Желаемая должность и зарплата' : 'Target position'),
    { text: 'Java Developer', bold: true, fontSize: 12, margin: [0, 0, 0, 4] },
    {
      text: isRu
        ? 'Специализации: программист, разработчик. Тип занятости: полная занятость. Формат работы: удаленно.'
        : 'Specialization: software developer. Employment: full-time. Work format: remote.',
      style: 'paragraph',
    },
    ...section(isRu ? 'Опыт работы' : 'Work experience'),
    ...data.experiences.map((item) => experienceBlock(item, lang)),
    ...section(isRu ? 'Образование' : 'Education'),
    {
      columns: [
        { width: 112, text: '2019', style: 'date' },
        {
          width: '*',
          stack: [
            {
              text: isRu
                ? 'Московский государственный технический университет им. Н.Э. Баумана, Москва'
                : 'Bauman Moscow State Technical University, Moscow',
              style: 'roleTitle',
            },
            {
              text: isRu
                ? 'Факультет специального машиностроения, Робототехника и мехатроника. Неоконченное высшее.'
                : 'Robotics and Mechatronics. Incomplete higher education.',
              style: 'paragraph',
            },
          ],
        },
      ],
      columnGap: 10,
    },
    ...section(isRu ? 'Навыки' : 'Skills'),
    {
      text: isRu
        ? 'Знание языков: Русский - родной; Английский - B2 - средне-продвинутый.'
        : 'Languages: Russian - native; English - B2 - upper-intermediate.',
      style: 'paragraph',
    },
    {
      text: SKILLS.join('      '),
      style: 'small',
      margin: [0, 0, 0, 5],
    },
    ...section(isRu ? 'Обо мне' : 'About'),
    ...markdownContent(data.about, 4),
    ...section(isRu ? 'Проекты' : 'Projects'),
    ...data.projects.map((item) => projectBlock(item, lang)),
    ...section(isRu ? 'Контакты' : 'Contacts'),
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

export const downloadResumePdf = async (lang: Lang) => {
  pdfMake.vfs = (pdfFonts as PdfFonts).pdfMake.vfs
  const data = await loadResumeData(lang)
  const documentDefinition = buildDocumentDefinition(data, lang)

  await new Promise<void>((resolve) => {
    pdfMake.createPdf(documentDefinition).download(FILE_NAME, resolve)
  })
}
