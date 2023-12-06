import React, { CSSProperties } from 'react'
import { Button, Space } from 'antd'
import { GithubFilled, LinkedinFilled } from '@ant-design/icons'
import { type ButtonProps } from 'antd/es/button/button'
import TelegramIconFill from '@icons/TelegramIconFill'
import HHIcon from '@icons/HHIcon'

interface SocialProps extends CSSProperties {
  fontSize: number
}

interface Props extends ButtonProps, Pick<SocialProps, 'fontSize'> {}

const FooterButton: React.FC<Props> = (props) => {
  const { shape = 'circle', fontSize, ...otherProps } = props

  return (
    <Button
      style={{
        backgroundColor: 'transparent',
        border: 0,
        fontSize: fontSize,
      }}
      size="middle"
      shape={shape}
      styles={{ icon: { margin: '-5px 0 0 -1px' } }}
      target="_blank"
      rel="noreferrer"
      {...otherProps}
    />
  )
}

const SocialNetwork: React.FC<SocialProps> = ({ fontSize, color = 'inherit' }) => {
  return (
    <Space size={8} direction="horizontal">
      <FooterButton
        icon={<TelegramIconFill style={{ fontSize: fontSize + 3, color }} />}
        href="https://t.me/mr_drednote"
        fontSize={fontSize}
      />
      <FooterButton
        icon={<GithubFilled style={{ fontSize: fontSize, color }} />}
        fontSize={fontSize}
        href="https://github.com/Drednote"
      />
      <FooterButton
        icon={<LinkedinFilled style={{ fontSize: fontSize, color }} />}
        shape="default"
        fontSize={fontSize}
        href="https://www.linkedin.com/in/drednote/"
      />
      <FooterButton
        icon={<HHIcon style={{ fontSize: fontSize, color }} />}
        fontSize={fontSize}
        href="https://hh.ru/resume/ba9fbaadff05d0cecb0039ed1f55464135414b?from=share_ios"
      />
    </Space>
  )
}

export default SocialNetwork
