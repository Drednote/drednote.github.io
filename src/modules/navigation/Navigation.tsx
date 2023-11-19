import React, { ReactNode, useEffect, useState } from 'react'
import { Avatar, Button, Col, Row, Space, Typography } from 'antd'
import AvatarIcon from '@icons/AvatarIcon'
import { Desktop, Mobile } from '@components/responsive'
import { mainColors } from '@const/colors'
import { useTranslation } from 'react-i18next'
import { menuKeys } from '@modules/navigation/menu/const'
import MobileNavigation from '@modules/navigation/mobile/MobileNavigation'
import DesktopNavigation from '@modules/navigation/desktop/DesktopNavigation'

interface Props {
  height: number | string
}

const NavigationContainer: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { t } = useTranslation()

  return (
    <>
      <Col
        style={{ position: 'fixed', left: '48px', height: 'inherit' }}
        className="abs-center"
      >
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
            <Typography.Title
              level={3}
              className="dre-center"
              style={{ margin: 0 }}
            >
              {t('body-name')}
            </Typography.Title>
          </Space>
        </Button>
      </Col>
      {children}
    </>
  )
}

const Navigation: React.FC<Props> = ({ height }) => {
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const domRect = document.body.getBoundingClientRect()
      const rate = domRect.y !== 0 ? domRect.y / domRect.height : 0
      setOpacity(Math.min(0.5, rate * -1))
    })
  }, [])

  return (
    <nav>
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
        <NavigationContainer>
          <Desktop>
            <DesktopNavigation />
          </Desktop>
          <Mobile>
            <MobileNavigation height={height} />
          </Mobile>
        </NavigationContainer>
      </Row>
    </nav>
  )
}

export default Navigation
