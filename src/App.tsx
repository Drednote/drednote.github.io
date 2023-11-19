import './App.css'
import React, { useEffect } from 'react'
import { ConfigProvider } from 'antd'
import Navigation from '@modules/navigation/Navigation'
import { type Lang } from '@const/lang'
import { useTranslation } from 'react-i18next'
import CardContent from '@modules/card-content/CardContent'
import useColorScheme from '@components/color-scheme/useColorScheme'

interface Props {
  lang: Lang
}

const height = '64px'

const App: React.FC<Props> = ({ lang }) => {
  const { i18n } = useTranslation()
  const { colors } = useColorScheme()

  useEffect(() => {
    void i18n.changeLanguage(lang)
  }, [lang])

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: colors.primary(),
          colorText: colors.text(),
          fontFamily: "'Jost', sans-serif;",
          fontSize: 18,
        },
        components: {
          Anchor: {
            fontSize: 20,
          },
        },
      }}
    >
      <div
        className="App"
        style={
          {
            // backgroundColor: isDark ? 'black' : 'white',
          }
        }
      >
        <Navigation height={height} />
        <CardContent />
      </div>
    </ConfigProvider>
  )
}

export default App
