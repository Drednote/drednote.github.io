import React from 'react'
import { Col, Row, Typography } from 'antd'
import useColorScheme from '@components/color-scheme/useColorScheme'
import { useTranslation } from 'react-i18next'

interface SkillProps {
  text: string
  rate?: number
  height?: number
}

const Skill: React.FC<SkillProps> = ({ text, height = 45 }) => {
  const { colors, isDark } = useColorScheme()
  const rate = 1.15 - (text.length * 4) / 100

  return (
    <div
      className="drednote-center"
      style={{
        width: `${text.length * rate}em`,
        height: `${height}px`,
        backgroundColor: colors.aboutSkillsBg(isDark ? 0.95 : 0.85),
        borderRadius: `50% / ${height / 2}px`,
        marginRight: 8,
        marginBottom: 8,
        zIndex: 10,
      }}
    >
      <Typography.Text
        strong
        style={{
          color: colors.aboutSkillsText(),
        }}
      >
        {text}
      </Typography.Text>
    </div>
  )
}

const Skills: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Col className="drednote-col">
      <Row className="drednote-row-center">
        <Typography.Title level={2}>{t('about_skills-title')}</Typography.Title>
      </Row>
      <Row
        className="drednote-row-center"
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
