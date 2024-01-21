import React from 'react'
import { Space } from 'antd'
import { LinkedinFilled, MailFilled } from '@ant-design/icons'
import TelegramIconFill from '@icons/telegram/TelegramIconFill'
import HHIcon from '@icons/hh/HHIcon'
import './footer.scss'
import IconButton, { GithubIconButton, IconButtonProps } from '@components/icon-button/IconButton'

const SocialNetwork: React.FC<IconButtonProps> = (props) => {
  const { fontSize, color = 'inherit', ...otherProps } = props

  return (
    <Space size={8} direction="horizontal">
      <IconButton
        {...otherProps}
        icon={<TelegramIconFill style={{ fontSize: fontSize + 3, color }} />}
        href="https://t.me/mr_drednote"
        fontSize={fontSize}
      />
      <GithubIconButton {...otherProps} fontSize={fontSize} />
      <IconButton
        {...otherProps}
        icon={<MailFilled style={{ fontSize: fontSize, color }} />}
        shape="default"
        href="mailto:galushko.ivan8@gmail.com"
        fontSize={fontSize}
      />
      <IconButton
        {...otherProps}
        icon={<LinkedinFilled style={{ fontSize: fontSize, color }} />}
        shape="default"
        fontSize={fontSize}
        href="https://www.linkedin.com/in/drednote/"
      />
      <IconButton
        {...otherProps}
        icon={<HHIcon style={{ fontSize: fontSize, color }} />}
        fontSize={fontSize}
        href="https://hh.ru/resume/ba9fbaadff05d0cecb0039ed1f55464135414b?from=share_ios"
      />
    </Space>
  )
}

export default SocialNetwork
