import React from 'react'
import { Col, Space } from 'antd'
import Menu from '@modules/navigation/menu/Menu'
import LinkToAnotherLang from '@modules/navigation/footer/LinkToAnotherLang'

const DesktopNavigation: React.FC = () => {
  return (
    <Col
      style={{ position: 'fixed', right: '48px', height: 'inherit' }}
      className="abs-center"
    >
      <Space>
        <Menu />
        {/*<SocialNetwork />*/}
        <LinkToAnotherLang />
      </Space>
    </Col>
  )
}

export default DesktopNavigation
