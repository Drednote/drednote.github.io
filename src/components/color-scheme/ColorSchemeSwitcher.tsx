import React from 'react'
import { Switch } from 'antd'
import useColorScheme from '@components/color-scheme/useColorScheme'

const ColorSchemeSwitcher: React.FC = () => {
  const { isDark, setIsDark } = useColorScheme()

  return <Switch checked={isDark} onClick={() => setIsDark(!isDark)}></Switch>
}

export default ColorSchemeSwitcher
