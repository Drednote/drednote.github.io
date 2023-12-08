import React from 'react'
import icon from '@icons/chat/chat-icon.svg'
import Icon from '@ant-design/icons'
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon'

const ChatIcon: React.FC<Partial<CustomIconComponentProps>> = (props) => {
  return <Icon component={icon} alt="chat" {...props} />
}

export default ChatIcon
