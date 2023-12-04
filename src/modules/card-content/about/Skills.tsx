import React, { useContext } from 'react'
import { Col, Row, Typography } from 'antd'
import WrapText from '@components/wrap-text/WrapText'
import context from '@const/context'

interface SkillProps {
  text: string
  rate?: number
  height?: number
}

const Skill: React.FC<SkillProps> = ({ text, height = 48 }) => {
  const { colors, isDark } = useContext(context.ColorScheme)

  return (
    <WrapText
      text={text}
      style={{
        color: colors.aboutSkillsText(),
        height: `${height}px`,
        backgroundColor: colors.aboutSkillsBg(isDark ? 0.95 : 0.85),
        marginRight: 12,
        marginBottom: 12,
        zIndex: 10,
      }}
    />
  )
}

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
        <Skill text="Java" />
        <Skill text="Spring Boot" />
        <Skill text="PostgreSQL" />
        <Skill text="MongoDB" />
        <Skill text="Gradle" />
        <Skill text="RabbitMQ" />
        <Skill text="Apache Kafka" />
        <Skill text="Hibernate ORM" />
        <Skill text="Gitlab CI" />
        <Skill text="Linux" />
        <Skill text="TypeScript" />
        <Skill text="React + Redux" />
        <Skill text="Docker" />
        <Skill text="Kubernetes" />
      </Row>
    </Col>
  )
}

export default Skills
