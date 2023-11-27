import './App.css'
import React, { useEffect } from 'react'
import { ConfigProvider } from 'antd'
import Navigation from '@modules/navigation/Navigation'
import { type Lang } from '@const/lang'
import { useTranslation } from 'react-i18next'
import CardContent from '@modules/card-content/CardContent'
import useColorScheme from '@components/color-scheme/useColorScheme'
import { useAdaptive } from '@components/adaptive/Adaptive'

interface Props {
  lang: Lang
}

const App: React.FC<Props> = ({ lang }) => {
  const { i18n } = useTranslation()
  const { colors } = useColorScheme()
  const { options } = useAdaptive()

  useEffect(() => {
    if (i18n.language !== lang.toString()) {
      void i18n.changeLanguage(lang)
    }
    document.getElementById('html')?.setAttribute('lang', i18n.language)
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
        <Navigation height={options.navigationHeight} />
        <CardContent />
      </div>
    </ConfigProvider>
  )
}

export default App
