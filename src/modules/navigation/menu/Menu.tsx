import React from 'react'
import { Anchor, Button, Row } from 'antd'
import { menu } from './const'
import './menu.scss'
import { useTranslation } from 'react-i18next'
import { AnchorDirection } from 'antd/es/anchor/Anchor'

interface Props {
  direction: AnchorDirection
}

const Menu: React.FC<Props> = ({ direction }) => {
  const { i18n, t } = useTranslation()
  return (
    <Row>
      <Anchor items={menu[i18n.language]} className="anchor-ink" direction={direction} />
      <Button
        type="text"
        href="https://hh.ru/resume/ba9fbaadff05d0cecb0039ed1f55464135414b?from=share_ios"
        target="_blank"
        style={{
          fontSize: 20,
          paddingTop: 3,
          backgroundColor: 'transparent',
        }}
      >
        {t('navigation_resume')}
      </Button>
    </Row>
  )
}

export default Menu
