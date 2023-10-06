import React from 'react'
import { Anchor } from 'antd'
import { menu } from './const'
import './menu.scss'
import { useTranslation } from 'react-i18next'

const Menu: React.FC = () => {
  const { i18n } = useTranslation()
  return <Anchor items={menu[i18n.language]} className="anchor-ink" />
}

export default Menu
