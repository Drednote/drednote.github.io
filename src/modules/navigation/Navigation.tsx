import React, { type CSSProperties } from 'react'
import { Avatar, Col, Row, Space } from 'antd'
import AvatarIcon from '@icons/AvatarIcon'
import Menu from '@modules/navigation/menu/Menu'
import SocialNetwork from '@modules/navigation/footer/SocialNetwork'
import LinkToAnotherLang from '@modules/navigation/footer/LinkToAnotherLang'

const Navigation: React.FC<CSSProperties> = (props) => {
  return (
    <>
      <Col style={{ position: 'fixed', top: '30vh', ...props }}>
        <Row className="dre-center">
          <Avatar icon={<AvatarIcon size={128} />} size={128} />
        </Row>
        <Row className="dre-center" style={{ paddingTop: '24px' }}>
          <Menu />
        </Row>
      </Col>
      <Col style={{ position: 'fixed', bottom: '1vh', ...props }}>
        <Space direction="vertical" style={{ width: '100%' }} size={12}>
          <Row className="dre-center">
            <SocialNetwork />
          </Row>
          <Row className="dre-center">
            <LinkToAnotherLang />
          </Row>
        </Space>
      </Col>
    </>
  )
}

export default Navigation
