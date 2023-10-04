import React from 'react'
import { Anchor } from 'antd'
import { menu } from './const'
import './menu.scss'

const Menu: React.FC = () => {
  return <Anchor items={menu} className="anchor-ink" />
}

export default Menu
