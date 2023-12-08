import { Col, Row, Typography } from 'antd'
import React, { useContext } from 'react'
import { useRouteError } from 'react-router-dom'
import context from '@const/context'

const NotFoundOrError = () => {
  const error = useRouteError()
  const { colors } = useContext(context.ColorScheme)

  const text = error ? 'Something went wrong' : 'Page was not found'

  return (
    <Row
      className="app-logo-container"
      align="middle"
      style={{ backgroundColor: colors.primarySecond(), width: '100%' }}
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
