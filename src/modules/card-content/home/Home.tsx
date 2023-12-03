import React from 'react'
import { Col, Row, Typography } from 'antd'
import HomeFooter from '@modules/card-content/home/HomeFooter'
import { useTranslation } from 'react-i18next'
import './home.scss'
import { useAdaptive } from '@components/adaptive/Adaptive'
import useColorScheme from '@components/color-scheme/useColorScheme'

const Home: React.FC<{ id?: string }> = ({ id }) => {
  const { t } = useTranslation()
  const { options } = useAdaptive()
  const { colors } = useColorScheme()

  return (
    <Col
      id={id}
      style={{
        paddingTop: options.navigationHeight,
        background: `linear-gradient(${colors.backgroundLight()}, ${colors.backgroundDark()})`,
        height: '100vh',
      }}
      className="dr-center dr-row dr-col"
    >
      <Row className="dr-center" style={{ marginTop: -48 }}>
        <Col>
          <Row className="dr-center">
            <Typography.Title
              level={options.titleLevels.l1}
              className="fade-in-text"
              style={{ textAlign: 'center' }}
            >
              {t('home_greeting-title')}
            </Typography.Title>
          </Row>
          <Row className="dr-center">
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
      <HomeFooter />
    </Col>
  )
}

export default Home
