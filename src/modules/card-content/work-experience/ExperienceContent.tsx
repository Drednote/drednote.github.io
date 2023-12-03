import React from 'react'
import { Col, Row, Space, Typography } from 'antd'
import WrapText from '@components/wrap-text/WrapText'
import { useTranslation } from 'react-i18next'
import './experience.scss'
import useColorScheme from '@components/color-scheme/useColorScheme'
import MarkdownAdapter, { MarkdownData } from '@components/markdown/MarkdownAdapter'
import { AppColors } from '@components/color-scheme/helpers'
import { Desktop, Mobile, useAdaptive } from '@components/adaptive/Adaptive'
import { LinkOutlined } from '@ant-design/icons'

export interface Experience {
  title: string
  company: string
  startDate: string
  endDate?: string
  skills: string[]
  href: string
}

const DateRenderer: React.FC<
  Pick<Experience, 'startDate' | 'endDate'> & { locale: string; present: string; colors: AppColors }
> = ({ startDate, endDate, locale, present, colors }) => {
  const getDateString = (date: string | undefined) => {
    if (!date) {
      return present
    }
    const dateS = new Date(date)
    const month = dateS.toLocaleString(locale, { month: 'short' })
    const year = dateS.toLocaleString(locale, { year: 'numeric' })
    return `${month} ${year}`
  }

  return (
    <Typography.Text
      style={{
        color: colors.textSecondary(),
      }}
    >{`${getDateString(startDate)} - ${getDateString(endDate)}`}</Typography.Text>
  )
}

const BodyRenderer: React.FC<
  Pick<Experience, 'skills' | 'company' | 'title' | 'href'> & {
    text: MarkdownData
    colors: AppColors
  }
> = ({ title, skills, company, colors, text, href }) => {
  const { options } = useAdaptive()

  return (
    <Space
      direction="vertical"
      className="dr-row"
      style={{
        marginTop: 0,
      }}
    >
      <Typography.Title
        level={options.titleLevels.l4}
        className="link-button"
        style={{
          marginTop: 0,
          borderBottom: `2px ${colors.experienceBorder()} solid`,
          paddingBottom: 4,
          marginBottom: 0,
        }}
      >
        {title} ·{' '}
        <a
          style={{ color: 'inherit', display: 'inline-flex', alignItems: 'start' }}
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          {company}
          <LinkOutlined
            style={{
              fontSize: 10,
            }}
          />
        </a>
      </Typography.Title>
      <Row>
        <MarkdownAdapter itemClassName="compact-text">{text}</MarkdownAdapter>
      </Row>
      <Row>
        {skills.map((skill) => (
          <WrapText
            text={skill}
            key={skill}
            small
            style={{
              backgroundColor: colors.aboutSkillsText(0.3),
              color: 'rgb(93,233,212)',
              fontSize: '.9rem',
              marginRight: 8,
              marginBottom: 8,
            }}
          />
        ))}
      </Row>
    </Space>
  )
}

const ExperienceContent: React.FC<{ data: Experience; text: MarkdownData }> = ({ data, text }) => {
  const { i18n, t } = useTranslation()
  const { colors } = useColorScheme()

  const dateRenderer = (
    <DateRenderer
      locale={i18n.language}
      present={t('experience_present')}
      colors={colors}
      {...data}
    />
  )
  const bodyRenderer = <BodyRenderer text={text} colors={colors} {...data} />

  return (
    <Row
      className="dr-row experience-button"
      style={{
        marginBottom: 24,
        borderRadius: 'inherit',
        padding: 8,
        paddingTop: 24,
      }}
    >
      <Desktop>
        <Col xl={5} lg={6} className="dr-row-center">
          {dateRenderer}
        </Col>
        <Col xl={19} lg={18} style={{ paddingLeft: 16 }}>
          {bodyRenderer}
        </Col>
      </Desktop>
      <Mobile>
        {dateRenderer}
        {bodyRenderer}
      </Mobile>
    </Row>
  )
}

export default ExperienceContent
