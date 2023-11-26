import React, { useEffect, useState } from 'react'
import useColorScheme from '@components/color-scheme/useColorScheme'
import { Col, Row, Space, Typography } from 'antd'
import { Options } from '@const/global-variables'
import './about.scss'
import { menuKeys } from '@modules/navigation/menu/const'
import { Desktop, Mobile, useAdaptive } from '@components/adaptive/Adaptive'
import AboutText from '@modules/card-content/about/AboutText'
import Skills from '@modules/card-content/about/Skills'
import Background from '@modules/card-content/about/background/Background'
import { useTranslation } from 'react-i18next'

interface Props {
  activeFade: boolean
}

const AboutContent: React.FC<Props> = ({ activeFade }) => {
  const { t } = useTranslation()
  const classNames = activeFade
    ? 'drednote-area fade-bottom-content'
    : 'drednote-area fade-bottom-content__disable'

  return (
    <Col className={classNames}>
      <Row className="drednote-center">
        <Typography.Title level={1} style={{ zIndex: 10 }}>
          {t('about_title')}
        </Typography.Title>
      </Row>
      <Desktop>
        <Row>
          <Space
            size={48}
            direction="horizontal"
            classNames={{ item: 'content-desktop' }}
            style={{
              alignItems: 'flex-start',
            }}
          >
            <Col>
              <AboutText />
            </Col>
            <Skills />
          </Space>
        </Row>
      </Desktop>
      <Mobile>
        <Row className="drednote-row-center">
          <Space size={48} direction="vertical">
            <AboutText />
            <Skills />
          </Space>
        </Row>
      </Mobile>
    </Col>
  )
}

const About: React.FC<{ id?: string }> = ({ id }) => {
  const { colors } = useColorScheme()
  const [activeFade, setActiveFade] = useState(false)
  const { isMobile, isDesktop } = useAdaptive()

  const listener = () => {
    const element = document.getElementById(`${menuKeys.about}`)
    if (element) {
      const domRect = element.getBoundingClientRect()
      const diff = domRect?.height - domRect.y > domRect.height / 3
      if (!activeFade && diff) {
        setActiveFade(diff)
        window.removeEventListener('scroll', listener)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listener)
  }, [])

  const padding = isMobile ? 24 : 48

  const xTranslate = isDesktop ? '-270px' : '0'
  const yTranslate = !isDesktop ? '450px' : '360px'

  return (
    <Col
      id={id}
      className="drednote-row"
      style={{
        minHeight: '100vh',
        backgroundColor: colors.backgroundDark(),
        paddingTop: Options.navigationHeight + padding,
        paddingLeft: padding,
        paddingRight: padding,
        paddingBottom: padding,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Background
        fontSize={800}
        style={{
          fontSize: 800,
          position: 'absolute',
          color: colors.aboutBackground(0.8),
          height: 0,
          translate: `${xTranslate} ${yTranslate}`,
          width: isDesktop ? undefined : '100%',
        }}
      />
      <AboutContent activeFade={activeFade} />
    </Col>
  )
}

export default About
