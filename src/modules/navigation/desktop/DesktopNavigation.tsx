import React from 'react'
import { Col, Space } from 'antd'
import Menu from '@modules/navigation/menu/Menu'
import LinkToAnotherLang from '@modules/navigation/footer/LinkToAnotherLang'
import ColorSchemeSwitcher from '@components/color-scheme/ColorSchemeSwitcher'

interface Props {
  indentation: number | string
}

const DesktopNavigation: React.FC<Props> = ({ indentation }) => {
  return (
    <Col
      style={{ position: 'fixed', right: indentation, height: 'inherit' }}
      className="abs-center"
    >
      <Space>
        <Menu />
        {/*<SocialNetwork />*/}
        <LinkToAnotherLang />
        <ColorSchemeSwitcher />
      </Space>
    </Col>
  )
}

export default DesktopNavigation
