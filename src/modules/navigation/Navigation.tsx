import React, { ReactNode, useCallback, useContext, useEffect, useState } from 'react'
import { Button, Col, Row, Typography } from 'antd'
import { Desktop, Mobile } from '@components/adaptive/Adaptive'
import { menuKeys } from '@modules/navigation/menu/const'
import MobileNavigation from '@modules/navigation/mobile/MobileNavigation'
import DesktopNavigation from '@modules/navigation/desktop/DesktopNavigation'
import LogoIcon from '@icons/LogoIcon'
import './navigation.scss'
import context from '@const/context'

interface Props {
  height?: number
}

const left = 24

const NavigationContainer: React.FC<{
  children: ReactNode
  height: number | string
}> = ({ children, height }) => {
  const { colors } = useContext(context.ColorScheme)
  const { isMobile } = useContext(context.Adaptive)
  const { t } = useContext(context.Translation)

  const handleClick = useCallback(() => {
    const element = document.getElementById(`${menuKeys.home}`)
    element?.scrollIntoView({ behavior: 'smooth' })
    history.pushState({}, '', `#${menuKeys.home}`)
  }, [])

  return (
    <Row className="dr-center dr-area dr-row dr-col" style={{ justifyContent: 'space-between' }}>
      <Col style={{ paddingLeft: 0 }} className="dr-center dr-col">
        <Button
          type="link"
          className="dr-center"
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

const Navigation: React.FC<Props> = () => {
  const [opacity, setOpacity] = useState(0)
  const { colors } = useContext(context.ColorScheme)
  const { options } = useContext(context.Adaptive)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const domRect = document.body.getBoundingClientRect()
      const rate = domRect.y !== 0 ? domRect.y / (window.innerHeight * 2) : 0
      const value = Math.min(0.5, rate * -1)
      setOpacity((prevState) => (prevState !== value ? value : prevState))
    })
  }, [])

  return (
    <nav>
      <Row
        style={{
          height: options.navigationHeight,
          backgroundColor: colors.backgroundDark(opacity),
          borderColor: colors.navBorder(Math.min(opacity, 0.1)),
          boxShadow: `0px 1px 3px ${colors.navBorder(Math.min(opacity, 0.3))}`,
        }}
        className="dr-center navigation-row"
      >
        <NavigationContainer height={options.navigationHeight}>
          <Desktop>
            <DesktopNavigation indentation={left} />
          </Desktop>
          <Mobile>
            <MobileNavigation indentation={left} height={options.navigationHeight} />
          </Mobile>
        </NavigationContainer>
      </Row>
    </nav>
  )
}

export default Navigation
