import React, { useContext } from 'react'
import { Col, Row, Space, Typography } from 'antd'
import SocialNetwork from '@modules/navigation/footer/SocialNetwork'
import { Desktop, Mobile } from '@components/adaptive/Adaptive'
import LogoIcon from '@icons/LogoIcon'
import { OptionsProps } from '@const/options'
import context from '@const/context'
import './footer.scss'
import { TFunction } from 'i18next'

const Social: React.FC<{
  t: TFunction
}> = ({ t }) => (
  <Col className="dr-center">
    <Space direction="vertical" className="dr-center" size={8}>
      <Typography.Title
        level={5}
        style={{
          marginTop: 12,
          marginBottom: 0,
        }}
      >
        {t('footer_social-title')}
      </Typography.Title>
      <SocialNetwork fontSize={26} />
    </Space>
  </Col>
)

const Copyright: React.FC = () => (
  <Col
    style={{
      display: 'flex',
      alignItems: 'end',
    }}
  >
    <Typography.Text
      style={{
        fontSize: 14,
      }}
    >
      Copyright © 2023. Made by Ivan Galushko
    </Typography.Text>
  </Col>
)

const Name: React.FC<{ text: string; options: OptionsProps }> = ({ text, options }) => (
  <Col className="dr-center">
    <LogoIcon className="logo" style={{ fontSize: 64 }} />
    <Typography.Title
      level={options.titleLevels.l4}
      style={{
        marginTop: 12,
      }}
    >
      {text}
    </Typography.Title>
  </Col>
)

const CardContentFooter: React.FC = () => {
  const { t } = useContext(context.Translation)
  const { options } = useContext(context.Adaptive)

  return (
    <Row className="dr-row dr-center footer-outer-row">
      <Row
        style={{
          maxWidth: options.maxWidth,
        }}
        className="footer-inner-row"
      >
        <Name text={t('navigation-title')} options={options} />
        <Desktop>
          <Copyright />
        </Desktop>
        <Social t={t} />
      </Row>
      <Mobile>
        <Row
          style={{
            paddingBottom: 12,
          }}
        >
          <Copyright />
        </Row>
      </Mobile>
    </Row>
  )
}

export default CardContentFooter
