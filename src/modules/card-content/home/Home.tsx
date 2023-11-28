import React, { useEffect, useState } from 'react'
import { Col, Row, Typography } from 'antd'
import HomeFooter from '@modules/card-content/home/HomeFooter'
import { useTranslation } from 'react-i18next'
import './home.scss'
import { useAdaptive } from '@components/adaptive/Adaptive'
import useColorScheme from '@components/color-scheme/useColorScheme'

const Home: React.FC<{ id?: string }> = ({ id }) => {
  const { t } = useTranslation()
  const [opacity, setOpacity] = useState(1)
  const { options } = useAdaptive()
  const { colors } = useColorScheme()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const domRect = document.body.getBoundingClientRect()
      const diff = window.innerHeight / 3.5
      const value = Math.max((domRect.y + diff) / diff, 0)
      setOpacity((prev) => (prev !== value ? value : prev))
    })
  }, [])

  return (
    <Col
      id={id}
      style={{
        paddingTop: options.navigationHeight,
        background: `linear-gradient(${colors.backgroundLight()}, ${colors.backgroundDark()})`,
        height: '100vh',
      }}
      className="drednote-center drednote-row drednote-col"
    >
      <Row className="drednote-center" style={{ marginTop: -48 }}>
        <Col>
          <Row className="drednote-center">
            <Typography.Title
              level={options.titleLevels.l1}
              className="fade-in-text"
              style={{ textAlign: 'center' }}
            >
              {t('home_greeting-title')}
            </Typography.Title>
          </Row>
          <Row className="drednote-center">
            <Typography.Title
              level={options.titleLevels.l2}
              className="fade-in-text"
              style={{ textAlign: 'center' }}
            >
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
