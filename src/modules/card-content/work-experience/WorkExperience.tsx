import React from 'react'
import { Col, Row, Typography } from 'antd'
import { useTranslation } from 'react-i18next'
import experiences from '@public/experience/experience.json'
import ExperienceContent, {
  Experience,
} from '@modules/card-content/work-experience/ExperienceContent'
import { useAdaptive } from '@components/adaptive/Adaptive'

const WorkExperience: React.FC<{ id?: string }> = ({ id }) => {
  const { i18n } = useTranslation()
  const { options } = useAdaptive()

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
        {experiences.map((experience, index) => {
          const work = require(
            `@public/experience/${i18n.language}/${experience.rel}.json`,
          ) as Experience
          const text = import(`@public/experience/${i18n.language}/${experience.rel}.md`)

          return <ExperienceContent key={index} data={work} text={text} />
        })}
      </Row>
    </Col>
  )
}

export default WorkExperience
