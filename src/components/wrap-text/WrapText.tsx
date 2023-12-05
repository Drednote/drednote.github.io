import React, { CSSProperties } from 'react'
import { Typography } from 'antd'

interface Props {
  text: string
  style?: CSSProperties
  small?: boolean
  className?: string
}

const WrapText: React.FC<Props> = (props) => {
  const { text, style, small, className } = props

  return (
    <Typography.Text
      strong
      className={`drednote-center dr-wrap-text dr-col-center ${className}`}
      style={{ ...style, padding: small ? 8 : 16 }}
    >
      {text}
    </Typography.Text>
  )
}

export default WrapText
