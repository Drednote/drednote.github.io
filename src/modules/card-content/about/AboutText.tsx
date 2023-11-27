import React from 'react'
import MarkdownAdapter from '@components/markdown/MarkdownAdapter'
import { Col, Row, Typography } from 'antd'
import { useTranslation } from 'react-i18next'
import { useAdaptive } from '@components/adaptive/Adaptive'

const AboutText: React.FC = () => {
  const { t, i18n } = useTranslation()
  const { options, isMobile } = useAdaptive()
  const content = import(`@public/text/${i18n.language}/about-me.md`)

  return (
    <Col style={{}}>
      <Row className="drednote-row-center">
        <Typography.Title level={options.titleLevels.l2}>{t('about_text-title')}</Typography.Title>
      </Row>
      <Row style={{ fontSize: !isMobile ? 20 : 18 }}>
        <MarkdownAdapter className="about-text">{content}</MarkdownAdapter>
      </Row>
    </Col>
  )
}

export default AboutText
