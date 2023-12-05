import React, { useContext, useEffect, useState } from 'react'
import { Col, Row, Space, Typography } from 'antd'
import experiences from '@public/experience/experience.json'
import ExperienceContent, {
  Experience,
} from '@modules/card-content/work-experience/ExperienceContent'
import { MarkdownData } from '@components/markdown/MarkdownAdapter'
import context from '@const/context'
import moment from 'moment'

const WorkExperience: React.FC<{ id?: string }> = ({ id }) => {
  const { options } = useContext(context.Adaptive)
  const { i18n, t } = useContext(context.Translation)
  const { colors } = useContext(context.ColorScheme)
  const [content, setContent] = useState<Record<string, { json: Experience; md: MarkdownData }>>({})
  const [earliestDate, setEarliestDate] = useState<Date>(new Date())

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
            const date = new Date(work.startDate)
            return prevState === undefined || prevState.getTime() - date.getTime() > 0
              ? date
              : prevState
          })
          return { [experience.rel]: { json: work, md: text } }
        }),
      )
      const reduce = data.reduce((prev, cur) => {
        return { ...prev, ...cur }
      })
      setContent(reduce)
    }
    void loadData()
  }, [i18n.language])

  const years = moment(earliestDate, 'YYYY-MM-DD').fromNow(true)
  const date = new Date(new Date().getFullYear(), earliestDate.getMonth(), earliestDate.getDate())
  const months = moment(date, 'YYYY-MM-DD').fromNow(true)

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
