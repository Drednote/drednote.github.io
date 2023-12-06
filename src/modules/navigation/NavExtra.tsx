import LinkToAnotherLang from '@modules/navigation/footer/LinkToAnotherLang'
import ColorSchemeSwitcher from '@modules/navigation/footer/ColorSchemeSwitcher'
import { Button, Space } from 'antd'
import React from 'react'
import { Desktop } from '@components/adaptive/Adaptive'

const NavExtra: React.FC<{ spaceSize: number }> = ({ spaceSize }) => {
  return (
    <Space size={spaceSize}>
      <LinkToAnotherLang />
      <ColorSchemeSwitcher />
      <Desktop>
        <Button>Contact</Button>
      </Desktop>
    </Space>
  )
}

export default NavExtra
