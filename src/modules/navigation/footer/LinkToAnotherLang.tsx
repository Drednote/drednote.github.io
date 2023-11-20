import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './link-lang.scss'
import ruIcon from '@icons/lang/ru-icon.svg'
import ruWhiteIcon from '@icons/lang/ru-white-icon.svg'
import enIcon from '@icons/lang/en-icon.svg'
import enWhiteIcon from '@icons/lang/en-white-icon.svg'
import Icon from '@ant-design/icons'
import useColorScheme from '@components/color-scheme/useColorScheme'

const LinkToAnotherLang: React.FC = () => {
  const { t } = useTranslation()
  const { isDark } = useColorScheme()

  return (
    <Link to={t('link-lang-to')} style={{ display: 'flex' }}>
      {t('button-link-lang') === 'en' ? (
        <Icon
          alt="en"
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          component={isDark ? enWhiteIcon : enIcon}
          style={{ color: 'black', fontSize: 26 }}
        />
      ) : (
        <Icon
          alt="ru"
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          component={isDark ? ruWhiteIcon : ruIcon}
          style={{ color: 'black', fontSize: 26 }}
        />
      )}
    </Link>
  )
}

export default LinkToAnotherLang
