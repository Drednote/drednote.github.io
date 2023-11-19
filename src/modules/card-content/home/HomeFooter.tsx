import { Col, Row, Typography } from 'antd'
import { ArrowDownOutlined } from '@ant-design/icons'
import { mainColors } from '@const/colors'
import React from 'react'

interface Props {
  opacity: number
}

const HomeFooter: React.FC<Props> = ({ opacity }) => {
  return (
    <>
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
    </>
  )
}

export default HomeFooter
