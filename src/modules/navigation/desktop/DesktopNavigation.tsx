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
    <>
      <Col>
        <Menu />
      </Col>
      <Col
        style={{
          paddingRight: indentation,
          justifyContent: 'end',
        }}
        className="abs-center drednote-col"
      >
        <Space size={36}>
          {/*<SocialNetwork />*/}
          <LinkToAnotherLang />
          <ColorSchemeSwitcher />
        </Space>
      </Col>
    </>
  )
}

export default DesktopNavigation
