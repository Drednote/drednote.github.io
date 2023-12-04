import React, { useContext } from 'react'
import { Switch } from 'antd'
import '@components/color-scheme/switcher.scss'
import context from '@const/context'

const ColorSchemeSwitcher: React.FC = () => {
  const { isDark, setIsDark } = useContext(context.ColorScheme)

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
