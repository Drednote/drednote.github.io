import './App.css'
import React, { useEffect } from 'react'
import { ConfigProvider, Row } from 'antd'
import Navigation from '@modules/navigation/Navigation'
import { mainColors } from '@const/colors'
import { type Lang } from '@const/lang'
import { useTranslation } from 'react-i18next'
import Body from '@modules/body/Body'

interface Props {
  lang: Lang
}

const width = '224px'
const height = '48px'

const App: React.FC<Props> = ({ lang }) => {
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
          fontFamily: "'Jost', sans-serif;",
          fontSize: 18,
        },
        components: {
          Anchor: {
            fontSize: 24,
          },
        },
      }}
    >
      <Row className="App">
        <Navigation mobileHeight={height} desktopWidth={width} />
        <Body mobileHeight={height} desktopWidth={width} />
      </Row>
    </ConfigProvider>
  )
}

export default App
