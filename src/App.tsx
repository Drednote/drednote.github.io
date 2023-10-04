import './App.css'
import React from 'react'
import { Col, ConfigProvider, Row } from 'antd'
import { menu } from './modules/navigation/menu/const'
import Navigation from './modules/navigation/Navigation'
import { mainColors } from './const/colors'

const App: React.FC = () => {
  const width = '224px'

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: mainColors.primary,
          colorText: mainColors.primaryText,
        },
        components: {
          Anchor: {
            fontSize: 20,
          },
        },
      }}
    >
      <Row className="App">
        <Col style={{ backgroundColor: mainColors.secondary, width }}>
          <Navigation width={width} />
        </Col>
        <Col>
          {menu.map((t) => {
            return <div id={t.key} key={t.key} style={{ height: '1600px' }}></div>
          })}
        </Col>
      </Row>
    </ConfigProvider>
  )
}

export default App
