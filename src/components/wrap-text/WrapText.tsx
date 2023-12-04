import React, { CSSProperties } from 'react'
import { Typography } from 'antd'

interface Props {
  text: string
  style?: CSSProperties
  small?: boolean
}

const WrapText: React.FC<Props> = (props) => {
  const { text, style, small } = props

  return (
    <Typography.Text
      strong
      className="drednote-center dr-wrap-text dr-col-center"
      style={{ ...style, padding: small ? 8 : 16 }}
    >
      {text}
    </Typography.Text>
  )
}

export default WrapText
