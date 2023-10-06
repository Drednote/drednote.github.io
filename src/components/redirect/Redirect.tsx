import { Navigate } from 'react-router-dom'
import React from 'react'
import LanguageDetector from 'i18next-browser-languagedetector'
import _ from 'lodash'
import { Lang } from '@const/lang'

const Redirect: React.FC = () => {
  const detect = new LanguageDetector().detect()
  const lang = determineLang(detect)
  return <Navigate to={`/${lang}`} />
}

function determineLang(detect?: string | string[]): string {
  if (_.isArray(detect) && !_.isEmpty(detect)) {
    return convertToSimpleLang(detect[0])
  } else if (typeof detect === 'string') {
    return convertToSimpleLang(detect)
  }
  return Lang.en
}

function convertToSimpleLang(lang: string): Lang {
  const regex = /^ru(-|$).*$/
  return lang.match(regex) ? Lang.ru : Lang.en
}

export default Redirect
