import LinkToAnotherLang from '@modules/navigation/footer/LinkToAnotherLang'
import ColorSchemeSwitcher from '@modules/navigation/footer/ColorSchemeSwitcher'
import { Space } from 'antd'
import React from 'react'

const NavExtra: React.FC<{ spaceSize: number }> = ({ spaceSize }) => {
  return (
    <Space size={spaceSize}>
      <LinkToAnotherLang />
      <ColorSchemeSwitcher />
    </Space>
  )
}

export default NavExtra
