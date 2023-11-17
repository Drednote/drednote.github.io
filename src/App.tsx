import './App.css'
import React, { useEffect } from 'react'
import { ConfigProvider, Row } from 'antd'
import Navigation from '@modules/navigation/Navigation'
import { mainColors } from '@const/colors'
import { type Lang } from '@const/lang'
import { useTranslation } from 'react-i18next'
import Body from '@modules/body/Body'
import image from './animation/13182208_5166950.jpeg'

interface Props {
  lang: Lang
}

const height = '64px'

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
          colorText: mainColors.primaryText(),
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
      <Row className="App" style={{}}>
        <Navigation height={height} />
        <Body height={height} />
      </Row>
    </ConfigProvider>
  )
}

export default App
