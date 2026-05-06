import React, { useContext, useEffect, useState } from 'react'
import { Col, Row, Space, Typography } from 'antd'
import experiences from '@public/experience/experience.json'
import ExperienceContent, {
  Experience,
} from '@modules/card-content/work-experience/ExperienceContent'
import { MarkdownData } from '@components/markdown/MarkdownAdapter'
import context from '@const/context'
import moment, { Moment } from 'moment'
import { DATE_FORMAT } from '@const/time'

const formatDurationUnit = (
  value: number,
  locale: string,
  singularKey: 'M' | 'y',
  pluralKey: 'MM' | 'yy',
) =>
  moment.localeData(locale).relativeTime(value, true, value === 1 ? singularKey : pluralKey, false)

const getExperienceDuration = (startDate: Moment, locale: string) => {
  const now = moment()
  const yearsCount = now.diff(startDate, 'years')
  const monthsCount = now.diff(startDate.clone().add(yearsCount, 'years'), 'months')

  const years = yearsCount > 0 ? formatDurationUnit(yearsCount, locale, 'y', 'yy') : ''
  const months = monthsCount > 0 ? formatDurationUnit(monthsCount, locale, 'M', 'MM') : ''

  return { years, months }
}

const WorkExperience: React.FC<{ id?: string }> = ({ id }) => {
  const { options } = useContext(context.Adaptive)
  const { i18n, t } = useContext(context.Translation)
  const { colors } = useContext(context.ColorScheme)
  const [content, setContent] = useState<Record<string, { json: Experience; md: MarkdownData }>>({})
  const [earliestDate, setEarliestDate] = useState<Moment>(moment())

  useEffect(() => {
    async function loadData() {
      const data = await Promise.all(
        experiences.map(async (experience) => {
          const work = require(
            `@public/experience/${i18n.language}/${experience.rel}.json`,
          ) as Experience
          const text = (await import(
            `@public/experience/${i18n.language}/${experience.rel}.md`
          )) as MarkdownData
          setEarliestDate((prevState) => {
            const date = moment(work.startDate, DATE_FORMAT)
            return prevState === undefined || prevState.isAfter(date) ? date : prevState
          })
          return { [experience.rel]: { json: work, md: text } }
        }),
      )
      const reduce = data.reduce((prev, cur) => {
        return { ...prev, ...cur }
      })
      setContent(reduce)
    }
    setEarliestDate(moment())
    void loadData()
  }, [i18n.language])

  const { years, months } = getExperienceDuration(earliestDate, i18n.language)

  return (
    <Col
      style={{
        maxWidth: options.maxWidth,
        paddingTop: options.navigationHeight,
      }}
      id={id}
    >
      <Typography.Title className="dr-row-center" level={options.titleLevels.l1}>
        <Space
          direction="vertical"
          size={0}
          style={{
            alignItems: 'center',
          }}
        >
          {t('experience_title')}
          <Typography.Text
            className="dr-row-center"
            style={{
              color: colors.textSecondary(0.5),
            }}
          >{`${t('experience_text')} ${years} ${months}`}</Typography.Text>
        </Space>
      </Typography.Title>
      <Row className="dr-row dr-row-center" style={{}}>
        {Object.entries(content).map((entry) => {
          const key = entry[0]
          const data = entry[1]
          return <ExperienceContent key={key} data={data.json} text={data.md} />
        })}
      </Row>
    </Col>
  )
}

export default WorkExperience
