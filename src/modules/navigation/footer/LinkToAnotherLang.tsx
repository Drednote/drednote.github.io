import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './link-lang.scss'
import ruIcon from '@icons/lang/ru-icon.svg'
import enIcon from '@icons/lang/en-icon.svg'
import Icon from '@ant-design/icons'
import useColorScheme from '@components/color-scheme/useColorScheme'

const LinkToAnotherLang: React.FC = () => {
  const { t } = useTranslation()
  const { colors } = useColorScheme()

  return (
    <Link to={t('link-lang-to')} style={{ display: 'flex' }}>
      {t('button-link-lang') === 'en' ? (
        <Icon alt="en" component={enIcon} style={{ color: colors.primary(), fontSize: 26 }} />
      ) : (
        <Icon alt="ru" component={ruIcon} style={{ color: colors.primary(), fontSize: 26 }} />
      )}
    </Link>
  )
}

export default LinkToAnotherLang
