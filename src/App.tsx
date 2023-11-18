import './App.css'
import React, { useEffect } from 'react'
import { ConfigProvider } from 'antd'
import Navigation from '@modules/navigation/Navigation'
import { mainColors } from '@const/colors'
import { type Lang } from '@const/lang'
import { useTranslation } from 'react-i18next'
import CardContent from '@modules/card-content/CardContent'

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
      <div className="App">
        <Navigation height={height} />
        <CardContent />
      </div>
    </ConfigProvider>
  )
}

export default App
