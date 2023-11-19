import React, { useEffect, useState } from 'react'
import { Col, Row, Typography } from 'antd'
import HomeFooter from '@modules/card-content/home/HomeFooter'

const Home: React.FC<{ id?: string }> = ({ id }) => {
  // const { t, i18n } = useTranslation()
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const domRect = document.body.getBoundingClientRect()
      setOpacity(
        (domRect.height + domRect.y - domRect.height / 4) / domRect.height,
      )
    })
  }, [])

  return (
    <Col
      id={id}
      style={{
        // marginTop: -100,
        height: '100%',
      }}
      className="abs-center"
    >
      <Row className="abs-center" style={{ marginTop: -100 }}>
        <Typography.Title
          level={1}
          style={{
            animationName: 'fadeIn',
            animationDuration: '2000ms',
            animationTimingFunction: 'ease',
            animationDelay: '0s',
            animationIterationCount: 1,
            animationDirection: 'normal',
            animationFillMode: 'none',
          }}
        >
          Hi there, my name is Ivan
        </Typography.Title>
        {/* <Typography.Title>{t('body-name')}</Typography.Title> */}
        {/* <MarkdownAdapter>{text[t('body-about-me')]}</MarkdownAdapter> */}
      </Row>
      <HomeFooter opacity={opacity} />
    </Col>
  )
}

export default Home
