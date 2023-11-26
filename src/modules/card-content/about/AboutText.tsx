import React from 'react'
import MarkdownAdapter from '@components/markdown/MarkdownAdapter'
import { Col, Row, Typography } from 'antd'
import { useTranslation } from 'react-i18next'

const AboutText: React.FC = () => {
  const { t, i18n } = useTranslation()
  const content = import(`@public/text/${i18n.language}/about-me.md`)

  return (
    <Col style={{}}>
      <Row className="drednote-row-center">
        <Typography.Title level={2}>{t('about_text-title')}</Typography.Title>
      </Row>
      <Row>
        <MarkdownAdapter>{content}</MarkdownAdapter>
      </Row>
    </Col>
  )
}

export default AboutText
