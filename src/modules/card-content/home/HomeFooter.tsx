import { Col, Row, Typography } from 'antd'
import { ArrowDownOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import './home.scss'
import useColorScheme from '@components/color-scheme/useColorScheme'

interface Props {
  opacity?: number
}

const HomeFooter: React.FC<Props> = () => {
  const { colors } = useColorScheme()
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const domRect = document.body.getBoundingClientRect()
      const diff = window.innerHeight / 3.5
      const value = Math.max((domRect.y + diff) / diff, 0)
      setOpacity((prev) => (prev !== value ? value : prev))
    })
  }, [])

  return (
    <Row
      className="dr-center"
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
        <Row className="dr-center">
          <div
            style={{
              position: 'relative',
              animation: 'moveArrow 2.5s backwards infinite',
            }}
          >
            <ArrowDownOutlined
              style={{
                color: colors.text(opacity),
              }}
            />
          </div>
        </Row>
      </Col>
    </Row>
  )
}

export default HomeFooter
