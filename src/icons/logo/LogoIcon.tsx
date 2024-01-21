import React, { type CSSProperties } from 'react'
import logo from '@icons/logo/logo.svg'
import Icon from '@ant-design/icons'

interface Props {
  style?: CSSProperties
  className?: string
}

const LogoIcon: React.FC<Props> = ({ style = { height: '48px', width: '48px' }, className }) => {
  return <Icon component={logo} alt="logo" style={style} className={className} />
}

export default LogoIcon
