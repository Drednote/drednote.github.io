import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './link-lang.scss'
import ruIcon from '@icons/lang/ru-icon.svg'
import enIcon from '@icons/lang/en-icon.svg'

const LinkToAnotherLang: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Link className="link-lang" to={t('link-lang-to')}>
      {t('button-link-lang') === 'en' ? <img alt="en" src={enIcon} /> : <img alt="ru" src={ruIcon} />}
    </Link>
  )
}

export default LinkToAnotherLang
