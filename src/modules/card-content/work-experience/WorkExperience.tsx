import React, { useContext, useEffect, useState } from 'react'
import { Col, Row, Typography } from 'antd'
import experiences from '@public/experience/experience.json'
import ExperienceContent, {
  Experience,
} from '@modules/card-content/work-experience/ExperienceContent'
import { MarkdownData } from '@components/markdown/MarkdownAdapter'
import context from '@const/context'

const WorkExperience: React.FC<{ id?: string }> = ({ id }) => {
  const { options } = useContext(context.Adaptive)
  const { i18n } = useContext(context.Translation)
  const [content, setContent] = useState<Record<string, { json: Experience; md: MarkdownData }>>({})

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

  return (
    <Col
      style={{
        maxWidth: options.maxWidth,
        paddingTop: options.navigationHeight,
      }}
      id={id}
    >
      <Typography.Title className="dr-row-center" level={options.titleLevels.l1}>
        Опыт
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
