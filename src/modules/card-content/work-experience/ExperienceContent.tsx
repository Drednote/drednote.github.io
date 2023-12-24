import React, { useContext } from 'react'
import { Col, Row, Space, Typography } from 'antd'
import WrapText from '@components/wrap-text/WrapText'
import './experience.scss'
import MarkdownAdapter, { MarkdownData } from '@components/markdown/MarkdownAdapter'
import { Desktop, Mobile } from '@components/adaptive/Adaptive'
import { LinkOutlined } from '@ant-design/icons'
import context from '@const/context'
import moment from 'moment'
import { DATE_FORMAT } from '@const/time'

export interface Experience {
  title: string
  company: string
  startDate: string
  endDate?: string
  skills: string[]
  href: string
}

const DateRenderer: React.FC<
  Pick<Experience, 'startDate' | 'endDate'> & { locale: string; present: string }
> = ({ startDate, endDate, locale, present }) => {
  const { colors } = useContext(context.ColorScheme)

  const getDateString = (date: string | undefined) => {
    if (!date) {
      return present
    }
    const dateS = moment(date, DATE_FORMAT).toDate()
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
  }
> = ({ title, skills, company, text, href }) => {
  const { options } = useContext(context.Adaptive)

  return (
    <Space
      direction="vertical"
      className="dr-row"
      style={{
        marginTop: 0,
      }}
    >
      <Typography.Title level={options.titleLevels.l4} className="link-button">
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
            className="skills"
            small
            style={{
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
  const { t, i18n } = useContext(context.Translation)

  const dateRenderer = (
    <DateRenderer locale={i18n.language} present={t('experience_present')} {...data} />
  )
  const bodyRenderer = <BodyRenderer text={text} {...data} />

  return (
    <Row
      className="dr-row experience-layout"
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
