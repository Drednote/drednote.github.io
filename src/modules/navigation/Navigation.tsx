import React, { type CSSProperties } from 'react'
import { Avatar, Col, Row } from 'antd'
import AvatarIcon from '@icons/AvatarIcon'
import Menu from '@modules/navigation/menu/Menu'
import NavigationFooter from '@modules/navigation/footer/NavigationFooter'

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
      <Col style={{ position: 'fixed', bottom: '5vh', ...props }}>
        <Row className="dre-center">
          <NavigationFooter />
        </Row>
      </Col>
    </>
  )
}

export default Navigation
