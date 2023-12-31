import React from 'react'
import { Col } from 'antd'
import Menu from '@modules/navigation/menu/Menu'
import NavExtra from '@modules/navigation/NavExtra'

interface Props {
  indentation: number | string
}

const DesktopNavigation: React.FC<Props> = () => {
  return (
    <>
      <Col>
        <Menu direction="horizontal" />
      </Col>
      <Col
        style={{
          justifyContent: 'end',
        }}
        className="dr-center dr-col"
      >
        <NavExtra spaceSize={16} />
      </Col>
    </>
  )
}

export default DesktopNavigation
