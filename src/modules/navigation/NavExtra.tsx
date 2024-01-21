import LinkToAnotherLang from '@modules/navigation/navExtra/LinkToAnotherLang'
import ColorSchemeSwitcher from '@modules/navigation/navExtra/ColorSchemeSwitcher'
import { Button, Space } from 'antd'
import React, { useContext, useState } from 'react'
import { Desktop } from '@components/adaptive/Adaptive'
import ContactModal from '@modules/navigation/ContactModal'
import './navigation.scss'
import context from '@const/context'
import { GithubIconButton } from '@components/icon-button/IconButton'

const NavExtra: React.FC<{ spaceSize: number }> = ({ spaceSize }) => {
  const [open, setOpen] = useState(false)
  const { t } = useContext(context.Translation)

  const handleOpenModal = () => {
    setOpen(!open)
  }

  return (
    <>
      <Space size={spaceSize}>
        <GithubIconButton fontSize={24} />
        <LinkToAnotherLang />
        <ColorSchemeSwitcher />
        <Desktop>
          <Button className="navigation-extra-button" onClick={handleOpenModal}>
            {t('navigation_contact')}
          </Button>
        </Desktop>
      </Space>
      <ContactModal open={open} onCancel={handleOpenModal} />
    </>
  )
}

export default NavExtra
