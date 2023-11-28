import React, { ReactNode, useCallback, useEffect, useState } from 'react'
import { Button, Col, Row, Typography } from 'antd'
import { Desktop, Mobile, useAdaptive } from '@components/adaptive/Adaptive'
import { useTranslation } from 'react-i18next'
import { menuKeys } from '@modules/navigation/menu/const'
import MobileNavigation from '@modules/navigation/mobile/MobileNavigation'
import DesktopNavigation from '@modules/navigation/desktop/DesktopNavigation'
import useColorScheme from '@components/color-scheme/useColorScheme'
import LogoIcon from '@icons/LogoIcon'
import './navigation.scss'

interface Props {
  height: number
}

const left = 24

const NavigationContainer: React.FC<{
  children: ReactNode
  height: number | string
}> = ({ children, height }) => {
  const { t } = useTranslation()
  const { colors } = useColorScheme()
  const { isMobile } = useAdaptive()

  const handleClick = useCallback(() => {
    const element = document.getElementById(`${menuKeys.home}`)
    element?.scrollIntoView({ behavior: 'smooth' })
    history.pushState({}, '', `#${menuKeys.home}`)
  }, [document])

  return (
    <Row
      className="drednote-center drednote-area drednote-row drednote-col"
      style={{ justifyContent: 'space-between' }}
    >
      <Col style={{ paddingLeft: 0 }} className="drednote-center drednote-col">
        <Button
          type="link"
          className="drednote-center"
          style={{
            backgroundColor: 'transparent',
            height: '100%',
            padding: '2px 0',
            color: colors.text(),
          }}
          onClick={handleClick}
        >
          <LogoIcon style={{ fontSize: height }} />
          <Typography.Title level={isMobile ? 4 : 3} className="dre-center" style={{ margin: 0 }}>
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
      const rate = domRect.y !== 0 ? domRect.y / (window.innerHeight * 2) : 0
      const value = Math.min(0.5, rate * -1)
      if (opacity !== value) setOpacity(value)
    })
  }, [])

  const backgroundColor = colors.backgroundDark(opacity)

  return (
    <nav>
      <Row
        style={{
          height,
          backgroundColor,
          borderColor: colors.navBorder(Math.min(opacity, 0.1)),
          boxShadow: `0px 1px 3px ${colors.navBorder(Math.min(opacity, 0.3))}`,
        }}
        className="drednote-center navigation-row"
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
