import React, { CSSProperties } from 'react'
import { Button, Space } from 'antd'
import { GithubFilled, LinkedinFilled } from '@ant-design/icons'
import { type ButtonProps } from 'antd/es/button/button'
import TelegramIconFill from '@icons/TelegramIconFill'

interface SocialProps extends CSSProperties {
  fontSize: number
}

interface Props extends ButtonProps, Pick<SocialProps, 'fontSize'> {
  custom?: boolean
}

const marginMap = {
  ant: '-5px 0 0 -1px',
  custom: '-9px 0 0 -5px',
}

const FooterButton: React.FC<Props> = (props) => {
  const { custom = false, shape = 'circle', fontSize, ...otherProps } = props
  const margin = custom ? marginMap.custom : marginMap.ant

  return (
    <Button
      style={{
        backgroundColor: 'transparent',
        border: 0,
        fontSize: fontSize,
      }}
      size="middle"
      shape={shape}
      styles={{ icon: { margin } }}
      target="_blank"
      {...otherProps}
    />
  )
}

const SocialNetwork: React.FC<SocialProps> = ({ fontSize, color = 'inherit' }) => {
  return (
    <Space size={8} direction="horizontal">
      <FooterButton
        icon={<TelegramIconFill style={{ fontSize: fontSize + 4, color }} />}
        href="https://t.me/mr_drednote"
        custom
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
    </Space>
  )
}

export default SocialNetwork
