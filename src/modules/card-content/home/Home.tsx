import React, { useContext } from 'react'
import { Col, Row, Typography } from 'antd'
import HomeFooter from '@modules/card-content/home/HomeFooter'
import './home.scss'
import context from '@const/context'

const Home: React.FC<{ id?: string }> = ({ id }) => {
  const { colors } = useContext(context.ColorScheme)
  const { t } = useContext(context.Translation)
  const { options } = useContext(context.Adaptive)

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
