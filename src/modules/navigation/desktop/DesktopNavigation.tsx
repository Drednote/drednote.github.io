import React from 'react'
import { Col } from 'antd'
import Menu from '@modules/navigation/menu/Menu'
import NavExtra from '@modules/navigation/NavExtra'

interface Props {
  indentation: number | string
}

const DesktopNavigation: React.FC<Props> = ({ indentation }) => {
  return (
    <>
      <Col>
        <Menu direction="horizontal" />
      </Col>
      <Col
        style={{
          paddingRight: indentation,
          justifyContent: 'end',
        }}
        className="drednote-center drednote-col"
      >
        <NavExtra spaceSize={36} />
      </Col>
    </>
  )
}

export default DesktopNavigation
