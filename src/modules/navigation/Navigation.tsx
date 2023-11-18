import React, { useEffect, useState } from 'react'
import { Avatar, Button, Col, Drawer, Row, Space, Typography } from 'antd'
import AvatarIcon from '@icons/AvatarIcon'
import Menu from '@modules/navigation/menu/Menu'
import SocialNetwork from '@modules/navigation/footer/SocialNetwork'
import LinkToAnotherLang from '@modules/navigation/footer/LinkToAnotherLang'
import { Desktop, Mobile } from '@components/responsive'
import { mainColors } from '@const/colors'
import { CloseOutlined, MenuOutlined } from '@ant-design/icons'
import './navigation.scss'
import { useTranslation } from 'react-i18next'
import { menuKeys } from '@modules/navigation/menu/const'
import { Link, useNavigate } from 'react-router-dom'

interface Props {
  height: number | string
}

const NavigationContent: React.FC = () => (
  <>
    <Col style={{ position: 'fixed', top: '30vh', width: 'inherit' }}>
      <Row className="abs-center">
        <Avatar icon={<AvatarIcon size={128} />} size={128} />
      </Row>
      <Row className="abs-center" style={{ paddingTop: '24px' }}>
        <Menu />
      </Row>
    </Col>
    <Col style={{ position: 'fixed', bottom: '1vh', width: 'inherit' }}>
      <Space direction="vertical" style={{ width: '100%' }} size={12}>
        <Row className="abs-center">
          <SocialNetwork />
        </Row>
        <Row className="abs-center">
          <LinkToAnotherLang />
        </Row>
      </Space>
    </Col>
  </>
)

const DesktopNavigationContent: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <Col style={{ position: 'fixed', left: '48px', height: 'inherit' }} className="abs-center">
        <Button
          type="link"
          className="abs-center"
          style={{
            backgroundColor: 'transparent',
            height: '100%',
          }}
          href={`#${menuKeys.home}`}
        >
          <Space direction="horizontal" size="middle">
            <Avatar icon={<AvatarIcon size={48} />} size={48} />
            <Typography.Title level={3} className="dre-center" style={{ margin: 0 }}>
              {t('body-name')}
            </Typography.Title>
          </Space>
        </Button>
      </Col>
      <Col style={{ position: 'fixed', right: '48px', height: 'inherit' }} className="abs-center">
        <Space>
          <Menu />
          {/*<SocialNetwork />*/}
          <LinkToAnotherLang />
        </Space>
      </Col>
    </>
  )
}

const DesktopNavigation: React.FC<Pick<Props, 'height'>> = ({ height }) => {
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const domRect = document.body.getBoundingClientRect()
      const rate = domRect.y !== 0 ? domRect.y / domRect.height : 0
      setOpacity(Math.min(0.5, rate * -1))
    })
  }, [])

  return (
    <Row
      style={{
        height,
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: 100,
        backgroundColor: mainColors.droppedNav(opacity),
        backdropFilter: 'blur(32px)',
        borderColor: `rgba(255, 255, 255, ${Math.min(opacity, 0.1)})`,
        borderBottomWidth: '1px',
        borderTopWidth: '0',
        borderLeftWidth: '0',
        borderRightWidth: '0',
        borderStyle: 'solid',
      }}
    >
      <DesktopNavigationContent />
    </Row>
  )
}

const MobileNavigation: React.FC<Props> = ({ height }) => {
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
        height,
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
        contentWrapperStyle={{ width: height }}
        style={{ backgroundColor: mainColors.secondary, width: height }}
        bodyStyle={{ display: 'flex', justifyContent: 'center' }}
      >
        <NavigationContent />
      </Drawer>
    </Row>
  )
}

const Navigation: React.FC<Props> = (props) => {
  return (
    <nav>
      <Desktop>
        <DesktopNavigation {...props} />
      </Desktop>
      <Mobile>
        <MobileNavigation {...props} />
      </Mobile>
    </nav>
  )
}

export default Navigation
