import React, { useContext, useState } from 'react'
import { Alert, Button, Col, Row, Space, Typography } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import context from '@const/context'
import { Lang } from '@const/lang'
import { downloadResumePdf } from '@modules/resume/resumePdf'

const Resume: React.FC = () => {
  const { i18n, t } = useContext(context.Translation)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const lang = i18n.language === Lang.ru.toString() ? Lang.ru : Lang.en

  const handleDownload = async () => {
    setLoading(true)
    setError(null)

    try {
      await downloadResumePdf(lang)
    } catch {
      setError(t('resume_download-error'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <Row className="dr-center" style={{ minHeight: '100vh', padding: 24 }}>
      <Col style={{ width: '100%', maxWidth: 520 }}>
        <Space direction="vertical" size={16} style={{ width: '100%' }}>
          <Typography.Title level={2} style={{ margin: 0 }}>
            {t('navigation_resume')}
          </Typography.Title>
          <Typography.Text>{t('resume_download-description')}</Typography.Text>
          <Button
            icon={<DownloadOutlined />}
            loading={loading}
            type="primary"
            onClick={handleDownload}
          >
            {t('resume_download-button')}
          </Button>
          {error && <Alert type="error" message={error} showIcon />}
        </Space>
      </Col>
    </Row>
  )
}

export default Resume
