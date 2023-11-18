import React, { useEffect, useState } from 'react'
import { Col, Row, Typography } from 'antd'
import { ArrowDownOutlined } from '@ant-design/icons'
import { mainColors } from '@const/colors'

// const text: Record<string, string> = {
//   aboutMeRu,
//   aboutMeEn,
// }

const AboutMe: React.FC<{ id?: string }> = ({ id }) => {
  // const { t, i18n } = useTranslation()
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
      <Row
        className="abs-center"
        style={{
          position: 'absolute',
          bottom: '2vh',
        }}
      >
        <Col>
          <Row>
            <Typography.Text
              style={{
                animation: 'moveText 2.5s backwards infinite',
                position: 'relative',
                opacity,
              }}
            >
              Scroll
            </Typography.Text>
          </Row>
          <Row className="abs-center">
            <div
              style={{
                position: 'relative',
                animation: 'moveArrow 2.5s backwards infinite',
              }}
            >
              <ArrowDownOutlined
                style={{
                  color: mainColors.primaryText(opacity),
                }}
              />
            </div>
          </Row>
        </Col>
      </Row>
    </Col>
  )
}

export default AboutMe
