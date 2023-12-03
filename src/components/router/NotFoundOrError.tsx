import { Col, Row, Typography } from 'antd'
import React from 'react'
import { useRouteError } from 'react-router-dom'
import useColorScheme from '@components/color-scheme/useColorScheme'

const NotFoundOrError = () => {
  const error = useRouteError()
  const { colors } = useColorScheme()

  const text = error ? 'Something went wrong' : 'Page was not found'

  return (
    <Row
      className="app-logo-container"
      align="middle"
      style={{ backgroundColor: colors.backgroundDark(), width: '100%' }}
    >
      <Col span={24}>
        <Row justify="center" align="middle">
          <Col>
            <Typography.Title>{text}</Typography.Title>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default NotFoundOrError
