import React from 'react'
import { Switch } from 'antd'
import useColorScheme from '@components/color-scheme/useColorScheme'
import '@components/color-scheme/switcher.scss'

const ColorSchemeSwitcher: React.FC = () => {
  const { isDark, setIsDark } = useColorScheme()

  return (
    <Switch
      checked={isDark}
      onClick={() => setIsDark(!isDark)}
      checkedChildren="🌙"
      unCheckedChildren="🔆"
      className="color-switcher"
    />
  )
}

export default ColorSchemeSwitcher
