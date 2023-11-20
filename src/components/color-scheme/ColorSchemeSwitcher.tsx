import React from 'react'
import { Switch } from 'antd'
import useColorScheme from '@components/color-scheme/useColorScheme'
import './switcher.scss'

const ColorSchemeSwitcher: React.FC = () => {
  const { isDark, setIsDark } = useColorScheme()

  return (
    <Switch
      checked={isDark}
      onClick={() => setIsDark(!isDark)}
      checkedChildren="🌙"
      unCheckedChildren="🔆"
      className="color-switcher"
    ></Switch>
  )
}

export default ColorSchemeSwitcher
