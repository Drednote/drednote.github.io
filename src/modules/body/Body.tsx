import React from 'react'
import { Col } from 'antd'
import { Desktop, Mobile } from '@components/responsive'
import AboutMe from '@modules/body/about/AboutMe'

interface Props {
  mobileHeight: number | string
  desktopWidth: number | string
}

const ContentContainer: React.FC = () => {
  return (
    <div style={{ padding: 48 }}>
      <AboutMe />
    </div>
  )
}

const DesktopBody: React.FC<Props> = ({ desktopWidth }) => {
  return (
    <Col style={{ paddingLeft: desktopWidth }}>
      <ContentContainer />
    </Col>
  )
}

const MobileBody: React.FC<Props> = ({ mobileHeight }) => {
  return (
    <Col style={{ paddingTop: mobileHeight }}>
      <ContentContainer />
    </Col>
  )
}

const Body: React.FC<Props> = (props) => {
  return (
    <>
      <Desktop>
        <DesktopBody {...props} />
      </Desktop>
      <Mobile>
        <MobileBody {...props} />
      </Mobile>
    </>
  )
}

export default Body
