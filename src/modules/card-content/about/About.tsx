import React, { useContext, useEffect, useState } from 'react'
import { Col, Row, Space, Typography } from 'antd'
import './about.scss'
import { menuKeys } from '@modules/navigation/menu/const'
import { Desktop, MobileOrTablet } from '@components/adaptive/Adaptive'
import AboutText from '@modules/card-content/about/AboutText'
import Skills from '@modules/card-content/about/Skills'
import Background from '@modules/card-content/about/background/Background'
import context from '@const/context'

interface Props {
  activeFade: boolean
}

const AboutContent: React.FC<Props> = ({ activeFade }) => {
  const { t } = useContext(context.Translation)
  const { options } = useContext(context.Adaptive)
  const classNames = activeFade
    ? 'drednote-area fade-bottom-content'
    : 'drednote-area fade-bottom-content__disable'

  return (
    <Col className={classNames}>
      <Row className="dr-center">
        <Typography.Title level={options.titleLevels.l1} style={{ zIndex: 10 }}>
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
            <AboutText />
            <Skills />
          </Space>
        </Row>
      </Desktop>
      <MobileOrTablet>
        <Row className="dr-row-center">
          <Space size={48} direction="vertical">
            <AboutText />
            <Skills />
          </Space>
        </Row>
      </MobileOrTablet>
    </Col>
  )
}

const About: React.FC<{ id?: string }> = ({ id }) => {
  const { options } = useContext(context.Adaptive)
  const [activeFade, setActiveFade] = useState(false)

  const listener = () => {
    const element = document.getElementById(`${menuKeys.about}`)
    if (element) {
      const domRect = element.getBoundingClientRect()
      const height = window.innerHeight
      const diff = height - domRect.y > height / 3
      if (!activeFade && diff) {
        setActiveFade(diff)
        window.removeEventListener('scroll', listener)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listener)
  }, [])

  return (
    <Row
      id={id}
      style={{
        display: 'flex',
        justifyContent: 'center',
        maxWidth: options.maxWidth,
        paddingTop: options.navigationHeight,
      }}
    >
      <Background fontSize={1000} className="background-image" />
      <AboutContent activeFade={activeFade} />
    </Row>
  )
}

export default About
