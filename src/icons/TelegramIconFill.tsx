import React from 'react'
import Icon from '@ant-design/icons'
import TelegramSvg from './telegram/telegram-fill.svg'
import { type CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon'

const TelegramIconFill: React.FC<Partial<CustomIconComponentProps>> = (props) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return <Icon component={TelegramSvg} {...props} />
}

export default TelegramIconFill
