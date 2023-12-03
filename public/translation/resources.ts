import navigationRu from './ru/translation.json'
import navigationEn from './en/translation.json'

const resources = {
  ru: { translation: navigationRu },
  en: { translation: navigationEn },
} as const

export default resources
