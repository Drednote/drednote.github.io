import './App.css'
import React, { useEffect } from 'react'
import { Col, ConfigProvider, Row } from 'antd'
import { menu } from '@modules/navigation/menu/const'
import Navigation from '@modules/navigation/Navigation'
import { mainColors } from '@const/colors'
import { type Lang } from '@const/lang'
import { useTranslation } from 'react-i18next'

interface Props {
  lang: Lang
}

const App: React.FC<Props> = ({ lang }) => {
  const width = '224px'

  const { i18n } = useTranslation()
  useEffect(() => {
    void i18n.changeLanguage(lang)
  }, [lang])

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
          {menu.en.map((t) => {
            return <div id={t.key} key={t.key} style={{ height: '1600px' }}></div>
          })}
        </Col>
      </Row>
    </ConfigProvider>
  )
}

export default App
