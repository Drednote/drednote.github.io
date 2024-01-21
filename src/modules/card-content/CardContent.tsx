import React from 'react'
import About from '@modules/card-content/about/About'
import { menuKeys } from '@modules/navigation/menu/const'
import Home from '@modules/card-content/home/Home'
import { Col, Row, Space } from 'antd'
import CardContentFooter from '@modules/card-content/footer/CardContentFooter'
import WorkExperience from '@modules/card-content/work-experience/WorkExperience'
import './card-content.scss'
import Projects from '@modules/card-content/projects/Projects'

const CardContent: React.FC = () => {
  return (
    <Row style={{ width: '100%' }}>
      <Home key={menuKeys.home} id={menuKeys.home} />
      <Col className="dr-row card-content-col">
        <Space
          direction="vertical"
          className="dr-row-center"
          classNames={{ item: 'dr-row-center' }}
        >
          <About key={menuKeys.about} id={menuKeys.about} />
          <WorkExperience key={menuKeys.work} id={menuKeys.work} />
          <Projects key={menuKeys.projects} id={menuKeys.projects} />
        </Space>
      </Col>
      <CardContentFooter />
    </Row>
  )
}

export default CardContent
