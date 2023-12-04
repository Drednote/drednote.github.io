import React, { PropsWithChildren, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Lang } from '@const/lang'
import Redirect from '@components/router/Redirect'
import context from '@const/context'

const LanguageProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { i18n } = useContext(context.Translation)
  const { lang } = useParams()

  const isLangValid = lang !== undefined && lang in Lang

  useEffect(() => {
    if (isLangValid) {
      if (i18n.language !== lang) {
        void i18n.changeLanguage(lang)
      }
      document.getElementById('html')?.setAttribute('lang', i18n.language)
    }
  }, [lang])

  return isLangValid ? children : <Redirect />
}

export default LanguageProvider
