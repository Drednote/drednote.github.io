import React, { useState } from 'react'
import { Avatar, Button, Col, Drawer, Row, Space } from 'antd'
import AvatarIcon from '@icons/AvatarIcon'
import Menu from '@modules/navigation/menu/Menu'
import SocialNetwork from '@modules/navigation/footer/SocialNetwork'
import LinkToAnotherLang from '@modules/navigation/footer/LinkToAnotherLang'
import { Desktop, Mobile } from '@components/responsive'
import { mainColors } from '@const/colors'
import { CloseOutlined, MenuOutlined } from '@ant-design/icons'
import './navigation.scss'
import { useTranslation } from 'react-i18next'

interface Props {
  mobileHeight: number | string
  desktopWidth: number | string
}

const NavigationContent: React.FC = () => (
  <>
    <Col style={{ position: 'fixed', top: '30vh', width: 'inherit' }}>
      <Row className="dre-center">
        <Avatar icon={<AvatarIcon size={128} />} size={128} />
      </Row>
      <Row className="dre-center" style={{ paddingTop: '24px' }}>
        <Menu />
      </Row>
    </Col>
    <Col style={{ position: 'fixed', bottom: '1vh', width: 'inherit' }}>
      <Space direction="vertical" style={{ width: '100%' }} size={12}>
        <Row className="dre-center">
          <SocialNetwork />
        </Row>
        <Row className="dre-center">
          <LinkToAnotherLang />
        </Row>
      </Space>
    </Col>
  </>
)

const DesktopNavigation: React.FC<Pick<Props, 'desktopWidth'>> = ({ desktopWidth }) => {
  return (
    <Col
      style={{
        backgroundColor: mainColors.secondary,
        width: desktopWidth,
        minHeight: window.screen.height,
        position: 'fixed',
        zIndex: 100,
      }}
    >
      <NavigationContent />
    </Col>
  )
}

const MobileNavigation: React.FC<Props> = ({ mobileHeight, desktopWidth }) => {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()
  const showDrawer = (): void => {
    setOpen(true)
  }

  const onClose = (): void => {
    setOpen(false)
  }

  return (
    <Row
      style={{
        zIndex: 100,
        width: '100%',
        top: 0,
        position: 'fixed',
        backgroundColor: mainColors.secondary,
        height: mobileHeight,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Button
        icon={<MenuOutlined style={{ fontSize: 24 }} />}
        style={{ backgroundColor: 'transparent', border: 0 }}
        size="large"
        onClick={showDrawer}
      />
      <Drawer
        title={t('navigation-drawer-title')}
        placement="left"
        onClose={onClose}
        open={open}
        key="left"
        closeIcon={<CloseOutlined className="drawer-close-icon" />}
        contentWrapperStyle={{ width: desktopWidth }}
        style={{ backgroundColor: mainColors.secondary, width: desktopWidth }}
        bodyStyle={{ display: 'flex', justifyContent: 'center' }}
      >
        <NavigationContent />
      </Drawer>
    </Row>
  )
}

const Navigation: React.FC<Props> = (props) => {
  return (
    <>
      <Desktop>
        <DesktopNavigation {...props} />
      </Desktop>
      <Mobile>
        <MobileNavigation {...props} />
      </Mobile>
    </>
  )
}

export default Navigation
