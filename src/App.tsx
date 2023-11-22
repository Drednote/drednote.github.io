import './App.css'
import React, { useEffect } from 'react'
import { ConfigProvider } from 'antd'
import Navigation from '@modules/navigation/Navigation'
import { type Lang } from '@const/lang'
import { useTranslation } from 'react-i18next'
import CardContent from '@modules/card-content/CardContent'
import useColorScheme from '@components/color-scheme/useColorScheme'
import { Options } from '@const/global-variables'

interface Props {
  lang: Lang
}

const App: React.FC<Props> = ({ lang }) => {
  const { i18n } = useTranslation()
  const { colors } = useColorScheme()

  useEffect(() => {
    if (i18n.language !== lang.toString()) void i18n.changeLanguage(lang)
  }, [lang])

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: colors.primary(),
          colorText: colors.text(),
          fontFamily: "'Jost', sans-serif;",
          fontSize: 18,
          colorBgLayout: 'inherit',
          colorBgContainer: 'inherit',
        },
        components: {
          Anchor: {
            fontSize: 20,
          },
          Layout: {
            headerBg: 'inherit',
          },
        },
      }}
    >
      <div className="App">
        <Navigation height={Options.navigationHeight} />
        <CardContent />
      </div>
    </ConfigProvider>
  )
}

export default App
