import React from 'react'
import useColorScheme from '@components/color-scheme/useColorScheme'
import { Col } from 'antd'

const About: React.FC<{ id?: string }> = ({ id }) => {
  const { colors } = useColorScheme()

  return (
    <Col
      id={id}
      style={{
        height: '100vh',
        backgroundColor: colors.backgroundDark(),
      }}
    ></Col>
  )
}

export default About
