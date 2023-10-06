import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './link-lang.scss'

const LinkToAnotherLang: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Link className="link-lang" to={t('link-lang-to')}>
      {t('button-link-lang')}
    </Link>
  )
}

export default LinkToAnotherLang
