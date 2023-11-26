import { Col, Row, Typography } from 'antd'
import { ArrowDownOutlined } from '@ant-design/icons'
import React from 'react'
import './home.scss'
import useColorScheme from '@components/color-scheme/useColorScheme'

interface Props {
  opacity: number
}

const HomeFooter: React.FC<Props> = ({ opacity }) => {
  const { colors } = useColorScheme()
  return (
    <>
      <Row
        className="drednote-center"
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
          <Row className="drednote-center">
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
    </>
  )
}

export default HomeFooter
