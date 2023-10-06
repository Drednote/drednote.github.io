import navigationRu from './ru/navigation.json'
import navigationEn from './en/navigation.json'

const resources = {
  ru: { translation: navigationRu },
  en: { translation: navigationEn },
} as const

export default resources
