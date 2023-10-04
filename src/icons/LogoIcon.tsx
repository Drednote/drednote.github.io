import React, { type CSSProperties } from 'react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import logo from './logo/logo.svg'

interface Props {
  style?: CSSProperties
}

const LogoIcon: React.FC<Props> = ({ style = { height: '48px', width: '48px' } }) => {
  return <img src={logo} alt="logo" style={style} />
}

export default LogoIcon
