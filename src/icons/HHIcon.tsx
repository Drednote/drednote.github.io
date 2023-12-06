import React, { type CSSProperties } from 'react'
import icon from '@icons/hh/min-hh-white.svg'
import Icon from '@ant-design/icons'

interface Props {
  style?: CSSProperties
  className?: string
}

const HHIcon: React.FC<Props> = ({ style = { height: '48px', width: '48px' }, className }) => {
  return <Icon component={icon} alt="logo" style={style} className={className} />
}

export default HHIcon
