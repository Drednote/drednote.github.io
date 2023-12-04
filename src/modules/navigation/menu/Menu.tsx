import React, { useContext } from 'react'
import { Anchor, Row } from 'antd'
import { menu } from './const'
import './menu.scss'
import { AnchorDirection } from 'antd/es/anchor/Anchor'
import { useNavigate } from 'react-router-dom'
import context from '@const/context'

interface Props {
  direction: AnchorDirection
}

const Menu: React.FC<Props> = ({ direction }) => {
  const { i18n, t } = useContext(context.Translation)
  const navigate = useNavigate()

  return (
    <Row>
      <Anchor items={menu[i18n.language]} className="anchor-ink" direction={direction} />
      {/*<Button*/}
      {/*  type="text"*/}
      {/*  target="_blank"*/}
      {/*  onClick={() => navigate('resume')}*/}
      {/*  style={{*/}
      {/*    fontSize: 20,*/}
      {/*    paddingTop: 3,*/}
      {/*    backgroundColor: 'transparent',*/}
      {/*  }}*/}
      {/*>*/}
      {/*  {t('navigation_resume')}*/}
      {/*</Button>*/}
    </Row>
  )
}

export default Menu
