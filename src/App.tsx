import './App.css'
import React from 'react'
import { ConfigProvider } from 'antd'
import useColorScheme from '@components/color-scheme/useColorScheme'
import { RouterProvider } from 'react-router-dom'
import { router } from '@components/router/Router'

const App: React.FC = () => {
  const { colors } = useColorScheme()

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
        <RouterProvider router={router} />
      </div>
    </ConfigProvider>
  )
}

export default App
