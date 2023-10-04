import React from 'react'
import { Button, Space } from 'antd'
import { GithubFilled, LinkedinFilled } from '@ant-design/icons'
import { type ButtonProps } from 'antd/es/button/button'
import TelegramIconFill from '@icons/TelegramIconFill'

interface Props extends ButtonProps {
  custom?: boolean
}

const marginMap = {
  ant: '-5px 0 0 -1px',
  custom: '-9px 0 0 -5px',
}
const size = 32

const FooterButton: React.FC<Props> = (props) => {
  const { custom = false, shape = 'circle' } = props
  const margin = custom ? marginMap.custom : marginMap.ant

  return (
    <Button
      style={{
        backgroundColor: 'transparent',
        border: 0,
      }}
      size="middle"
      shape={shape}
      styles={{ icon: { margin } }}
      {...props}
    />
  )
}

const NavigationFooter: React.FC = () => {
  return (
    <Space>
      <FooterButton icon={<TelegramIconFill style={{ fontSize: size + 4 }} />} href="https://t.me/mr_drednote" custom />
      <FooterButton icon={<GithubFilled style={{ fontSize: size }} />} href="https://github.com/Drednote" />
      <FooterButton icon={<LinkedinFilled style={{ fontSize: size }} />} shape="default" />
    </Space>
  )
}

export default NavigationFooter
