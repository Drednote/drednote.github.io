import React, { type CSSProperties } from 'react'
import photo from '@icons/avatar/avatar.png'

interface Props {
  size: number
  style?: CSSProperties
}

const TelegramIcon: React.FC<Props> = (props) => {
  const { size, style } = props
  return <img src={photo} alt="avatar" style={{ height: `${size}px`, width: `${size}px`, ...style }} />
}

export default TelegramIcon
