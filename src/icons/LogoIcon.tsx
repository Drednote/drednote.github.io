import React, { type CSSProperties } from 'react'
import logo from '@icons/logo/logo.svg'
import Icon from '@ant-design/icons'

interface Props {
  style?: CSSProperties
}

const LogoIcon: React.FC<Props> = ({ style = { height: '48px', width: '48px' } }) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <Icon component={logo} alt="logo" style={style} />
}

export default LogoIcon
