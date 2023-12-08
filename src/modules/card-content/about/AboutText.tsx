import React, { useContext, useEffect, useState } from 'react'
import MarkdownAdapter, { MarkdownData } from '@components/markdown/MarkdownAdapter'
import { Col, Row, Typography } from 'antd'
import context from '@const/context'

const AboutText: React.FC = () => {
  const { t, i18n } = useContext(context.Translation)
  const { options, isMobile } = useContext(context.Adaptive)
  const [text, setText] = useState<MarkdownData>()

  useEffect(() => {
    async function loadText() {
      const loadedText = (await import(`@public/text/${i18n.language}/about-me.md`)) as MarkdownData
      setText(loadedText)
    }
    void loadText()
  }, [i18n.language])

  return (
    <Col style={{}}>
      <Row className="dr-row-center">
        <Typography.Title level={options.titleLevels.l2}>{t('about_text-title')}</Typography.Title>
      </Row>
      <Row style={{ fontSize: !isMobile ? 20 : 18 }}>
        <MarkdownAdapter itemClassName="compact-text" className="md-main-text">
          {text}
        </MarkdownAdapter>
      </Row>
    </Col>
  )
}

export default AboutText
