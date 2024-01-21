import React from 'react'
import Icon from '@ant-design/icons'
import LinkSvg from './link.svg'
import { type CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon'

const TelegramIconFill: React.FC<Partial<CustomIconComponentProps>> = (props) => {
  return <Icon component={LinkSvg} {...props} />
}

export default TelegramIconFill
