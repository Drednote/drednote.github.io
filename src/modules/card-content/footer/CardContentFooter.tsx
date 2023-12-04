import React, { useContext } from 'react'
import { Col, Row, Space, Typography } from 'antd'
import SocialNetwork from '@modules/navigation/footer/SocialNetwork'
import { Desktop, Mobile } from '@components/adaptive/Adaptive'
import LogoIcon from '@icons/LogoIcon'
import { AppColors } from '@components/color-scheme/helpers'
import { OptionsProps } from '@const/options'
import context from '@const/context'

const Social: React.FC = () => (
  <Col className="dr-center">
    <Space direction="vertical" className="dr-center" size={8}>
      <Typography.Title
        level={5}
        style={{
          marginTop: 12,
          marginBottom: 0,
        }}
      >
        Social
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

const Name: React.FC<{ colors: AppColors; text: string; options: OptionsProps }> = ({
  colors,
  text,
  options,
}) => (
  <Col className="dr-center">
    <LogoIcon style={{ fontSize: 64, color: colors.primary() }} />
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
  const { colors } = useContext(context.ColorScheme)
  const { t } = useContext(context.Translation)
  const { options } = useContext(context.Adaptive)

  return (
    <Row
      style={{
        backgroundColor: colors.backgroundDark(),
        zIndex: 10,
      }}
      className="dr-row dr-center"
    >
      <Row
        style={{
          justifyContent: 'space-between',
          maxWidth: options.maxWidth,
          width: 'inherit',
          padding: 12,
          borderTopColor: colors.navBorder(),
          borderTopWidth: 2,
          borderLeftWidth: '0',
          borderRightWidth: '0',
          borderBottomWidth: '0',
          borderStyle: 'solid',
        }}
      >
        <Name colors={colors} text={t('navigation-title')} options={options} />
        <Desktop>
          <Copyright />
        </Desktop>
        <Social />
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
