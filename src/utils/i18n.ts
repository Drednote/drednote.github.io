import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import resources from '@public/translation/config'

void i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    debug: true,
    resources,
  })

export default i18n
