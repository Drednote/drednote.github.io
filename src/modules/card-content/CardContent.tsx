import React, { useContext } from 'react'
import About from '@modules/card-content/about/About'
import { menuKeys } from '@modules/navigation/menu/const'
import Home from '@modules/card-content/home/Home'
import { Col, Row, Space } from 'antd'
import CardContentFooter from '@modules/card-content/footer/CardContentFooter'
import WorkExperience from '@modules/card-content/work-experience/WorkExperience'
import context from '@const/context'

const CardContent: React.FC = () => {
  const { colors } = useContext(context.ColorScheme)
  const { isMobile } = useContext(context.Adaptive)

  const padding = isMobile ? 24 : 48

  return (
    <Row style={{ width: '100%' }}>
      <Home key={menuKeys.home} id={menuKeys.home} />
      <Col
        className="dr-row"
        style={{
          backgroundColor: colors.backgroundDark(),
          paddingTop: padding,
          paddingLeft: padding,
          paddingRight: padding,
          paddingBottom: padding,
        }}
      >
        <Space
          direction="vertical"
          className="dr-row-center"
          classNames={{ item: 'dr-row-center' }}
        >
          <About key={menuKeys.about} id={menuKeys.about} />
          <WorkExperience key={menuKeys.work} id={menuKeys.work} />
        </Space>
      </Col>
      <CardContentFooter />
    </Row>
  )
}

export default CardContent
