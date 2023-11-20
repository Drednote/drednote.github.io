import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import resources from '@public/translation/resources'
import LanguageDetector from 'i18next-browser-languagedetector'
import PathDetector from '@utils/PathDetector'

const languageDetector = new LanguageDetector()

languageDetector.addDetector(PathDetector)

void i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  .use(languageDetector)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    resources,
    detection: {
      order: [
        'customPath',
        'querystring',
        'cookie',
        'localStorage',
        'sessionStorage',
        'navigator',
        'htmlTag',
      ],
    },
  })

export default i18n
