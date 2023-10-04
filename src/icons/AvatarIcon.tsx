import React, { type CSSProperties } from 'react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import photo from './avatar/avatar.png'

interface Props {
  size: number
  style?: CSSProperties
}

const TelegramIcon: React.FC<Props> = (props) => {
  const { size, style } = props
  return <img src={photo} alt="avatar" style={{ height: `${size}px`, width: `${size}px`, ...style }} />
}

export default TelegramIcon
