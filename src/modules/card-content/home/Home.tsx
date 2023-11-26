import React, { useEffect, useState } from 'react'
import { Col, Row, Typography } from 'antd'
import HomeFooter from '@modules/card-content/home/HomeFooter'
import { useTranslation } from 'react-i18next'
import './home.scss'
import { Options } from '@const/global-variables'
import { useAdaptive } from '@components/adaptive/Adaptive'
import useColorScheme from '@components/color-scheme/useColorScheme'

const Home: React.FC<{ id?: string }> = ({ id }) => {
  const { t } = useTranslation()
  const [opacity, setOpacity] = useState(1)
  const { isDesktop, isTablet } = useAdaptive()
  const { colors } = useColorScheme()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const domRect = document.body.getBoundingClientRect()
      const diff = domRect.height / 2.5
      const value = Math.max((domRect.y + diff) / diff, 0)
      if (opacity !== value) setOpacity(value)
    })
  }, [])

  const titleLevel = isDesktop ? 1 : isTablet ? 2 : 4
  const textLevel = isDesktop ? 3 : isTablet ? 4 : 5

  return (
    <Col
      id={id}
      style={{
        paddingTop: Options.navigationHeight,
        background: `linear-gradient(${colors.backgroundLight()}, ${colors.backgroundDark()})`,
        height: '100vh',
      }}
      className="drednote-center drednote-row drednote-col"
    >
      <Row className="drednote-center" style={{ marginTop: -48 }}>
        <Col>
          <Row className="drednote-center">
            <Typography.Title level={titleLevel} className="fade-in-text">
              {t('home_greeting-title')}
            </Typography.Title>
          </Row>
          <Row className="drednote-center">
            <Typography.Title level={textLevel} className="fade-in-text">
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
