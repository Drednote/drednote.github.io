import React, { useEffect, useState } from 'react'
import { Col, Row, Typography } from 'antd'
import HomeFooter from '@modules/card-content/home/HomeFooter'
import { useTranslation } from 'react-i18next'
import './home.scss'

const Home: React.FC<{ id?: string }> = ({ id }) => {
  const { t } = useTranslation()
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const domRect = document.body.getBoundingClientRect()
      setOpacity((domRect.height + domRect.y - domRect.height / 4) / domRect.height)
    })
  }, [])

  return (
    <Col
      id={id}
      style={{
        height: '100%',
      }}
      className="abs-center"
    >
      <Row className="abs-center" style={{ marginTop: -48 }}>
        <Col>
          <Row className="abs-center">
            <Typography.Title level={1} className="fade-in-text">
              {t('home_greeting-title')}
            </Typography.Title>
          </Row>
          <Row className="abs-center">
            <Typography.Title level={3} className="fade-in-text">
              {t('home_greeting-text')}
            </Typography.Title>
          </Row>
        </Col>
      </Row>
      <HomeFooter opacity={opacity} />
    </Col>
  )
}

export default Home
