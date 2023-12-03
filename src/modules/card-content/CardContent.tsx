import React from 'react'
import About from '@modules/card-content/about/About'
import { menuKeys } from '@modules/navigation/menu/const'
import Home from '@modules/card-content/home/Home'
import { Col, Row, Space } from 'antd'
import CardContentFooter from '@modules/card-content/footer/CardContentFooter'
import WorkExperience from '@modules/card-content/work-experience/WorkExperience'
import useColorScheme from '@components/color-scheme/useColorScheme'
import { useAdaptive } from '@components/adaptive/Adaptive'

const CardContent: React.FC = () => {
  const { colors } = useColorScheme()
  const { isMobile } = useAdaptive()

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
