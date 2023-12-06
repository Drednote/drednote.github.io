import React, { useContext } from 'react'
import { Col, Row, Typography } from 'antd'
import WrapText from '@components/wrap-text/WrapText'
import context from '@const/context'

const skills = [
  'Java',
  'Spring Boot',
  'PostgreSQL',
  'MongoDB',
  'Gradle',
  'RabbitMQ',
  'Apache Kafka',
  'Gitlab CI',
  'Hibernate ORM',
  'Linux',
  'TypeScript',
  'React + Redux',
  'Docker',
  'Kubernetes',
]

const Skills: React.FC = () => {
  const { t } = useContext(context.Translation)
  const { options } = useContext(context.Adaptive)

  return (
    <Col className="dr-col">
      <Row className="dr-row-center">
        <Typography.Title level={options.titleLevels.l2}>
          {t('about_skills-title')}
        </Typography.Title>
      </Row>
      <Row
        className="dr-row-center"
        style={{
          marginTop: 24,
        }}
      >
        {skills.map((text) => (
          <WrapText key={text} text={text} className="skills-element" />
        ))}
      </Row>
    </Col>
  )
}

export default Skills
