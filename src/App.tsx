import './App.css'
import React from 'react'
import { ConfigProvider } from 'antd'
import useColorScheme from '@components/color-scheme/useColorScheme'
import { RouterProvider } from 'react-router-dom'
import { router } from '@components/router/Router'
import Context from '@const/context'
import { useAdaptive } from '@components/adaptive/Adaptive'
import { useTranslation } from 'react-i18next'

const App: React.FC = () => {
  const colorScheme = useColorScheme()
  const options = useAdaptive()
  const translation = useTranslation()
  const { colors } = colorScheme

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
      <Context.ColorScheme.Provider value={colorScheme}>
        <Context.Adaptive.Provider value={options}>
          <Context.Translation.Provider value={translation}>
            <div className="App" id="app">
              <RouterProvider router={router} />
            </div>
          </Context.Translation.Provider>
        </Context.Adaptive.Provider>
      </Context.ColorScheme.Provider>
    </ConfigProvider>
  )
}

export default App
