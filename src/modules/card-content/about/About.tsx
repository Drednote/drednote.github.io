import React, { useEffect, useState } from 'react'
import useColorScheme from '@components/color-scheme/useColorScheme'
import { Col, Layout, Space, Typography } from 'antd'
import MarkdownAdapter from '@components/markdown/MarkdownAdapter'
import aboutMeEn from '@public/text/en/about-me.md'
import aboutMeRu from '@public/text/ru/about-me.md'
import { Options } from '@const/global-variables'
import './about.scss'
import { menuKeys } from '@modules/navigation/menu/const'
import { Desktop, Mobile } from '@components/adaptive/Adaptive'
import { Content, Header } from 'antd/es/layout/layout'

interface Props {
  activeFade: boolean
}

const AboutContainer: React.FC<Props> = ({ activeFade }) => {
  const classNames = activeFade
    ? 'drednote-area fade-bottom-content'
    : 'drednote-area fade-bottom-content__disable'

  return (
    <Layout className={classNames}>
      <Header className="abs-center">
        <Typography.Title level={2}>About me</Typography.Title>
      </Header>
      <Desktop>
        <Content>
          <Space size={48} direction="horizontal" classNames={{ item: 'content-desktop' }}>
            <MarkdownAdapter>{aboutMeEn}</MarkdownAdapter>
            <MarkdownAdapter>{aboutMeRu}</MarkdownAdapter>
          </Space>
        </Content>
      </Desktop>
      <Mobile>
        <Content>
          <Space size={48} direction="vertical">
            <MarkdownAdapter>{aboutMeEn}</MarkdownAdapter>
            <MarkdownAdapter>{aboutMeRu}</MarkdownAdapter>
          </Space>
        </Content>
      </Mobile>
    </Layout>
  )
}

const About: React.FC<{ id?: string }> = ({ id }) => {
  const { colors } = useColorScheme()
  const [activeFade, setActiveFade] = useState(false)

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

  return (
    <Col
      id={id}
      className="abs-center drednote-row"
      style={{
        height: '100vh',
        backgroundColor: colors.backgroundDark(),
        paddingTop: Options.navigationHeight + 48,
        paddingLeft: 48,
        paddingRight: 48,
        paddingBottom: 48,
      }}
    >
      <AboutContainer activeFade={activeFade} />
    </Col>
  )
}

export default About
