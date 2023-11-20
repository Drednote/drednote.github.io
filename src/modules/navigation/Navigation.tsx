import React, { ReactNode, useCallback, useEffect, useState } from 'react'
import { Button, Col, Row, Typography } from 'antd'
import { Desktop, Mobile } from '@components/responsive'
import { useTranslation } from 'react-i18next'
import { menuKeys } from '@modules/navigation/menu/const'
import MobileNavigation from '@modules/navigation/mobile/MobileNavigation'
import DesktopNavigation from '@modules/navigation/desktop/DesktopNavigation'
import useColorScheme from '@components/color-scheme/useColorScheme'
import LogoIcon from '@icons/LogoIcon'

interface Props {
  height: number | string
}

const left = 24

const NavigationContainer: React.FC<{
  children: ReactNode
  height: number | string
}> = ({ children, height }) => {
  const { t } = useTranslation()
  const { colors } = useColorScheme()

  const handleClick = useCallback(() => {
    const element = document.getElementById(`${menuKeys.home}`)
    element?.scrollIntoView({ behavior: 'smooth' })
    history.pushState({}, '', `#${menuKeys.home}`)
  }, [])

  return (
    <Row
      className="abs-center drednote-area drednote-row"
      style={{ justifyContent: 'space-between' }}
    >
      <Col style={{ paddingLeft: 0 }} className="abs-center drednote-col">
        <Button
          type="link"
          className="abs-center"
          style={{
            backgroundColor: 'transparent',
            height: '100%',
            padding: '2px 0',
            color: colors.text(),
          }}
          onClick={handleClick}
        >
          <LogoIcon style={{ fontSize: height }} />
          <Typography.Title level={4} className="dre-center" style={{ margin: 0 }}>
            {t('navigation-title')}
          </Typography.Title>
        </Button>
      </Col>
      {children}
    </Row>
  )
}

const Navigation: React.FC<Props> = ({ height }) => {
  const [opacity, setOpacity] = useState(0)
  const { colors } = useColorScheme()

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
          backgroundColor: colors.backgroundDark(opacity),
          backdropFilter: 'blur(32px)',
          borderColor: colors.navBorder(Math.min(opacity, 0.1)),
          borderBottomWidth: '1px',
          borderTopWidth: '0',
          borderLeftWidth: '0',
          borderRightWidth: '0',
          borderStyle: 'solid',
        }}
        className="abs-center"
      >
        <NavigationContainer height={height}>
          <Desktop>
            <DesktopNavigation indentation={left} />
          </Desktop>
          <Mobile>
            <MobileNavigation indentation={left} height={height} />
          </Mobile>
        </NavigationContainer>
      </Row>
    </nav>
  )
}

export default Navigation
