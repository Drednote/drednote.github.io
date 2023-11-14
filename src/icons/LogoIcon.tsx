import React, { type CSSProperties } from 'react'
import logo from '@icons/logo/logo.svg'

interface Props {
  style?: CSSProperties
}

const LogoIcon: React.FC<Props> = ({ style = { height: '48px', width: '48px' } }) => {
  return <img src={logo} alt="logo" style={style} />
}

export default LogoIcon
