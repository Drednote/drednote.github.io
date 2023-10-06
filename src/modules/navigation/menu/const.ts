import { Lang } from '@const/lang'

export interface MenuType {
  key: string
  title: string
  href: string
}

export const menu: Record<string, MenuType[]> = {
  [Lang.ru]: [
    {
      key: 'about',
      href: '#about',
      title: 'Обо мне',
    },
    {
      key: 'resume',
      href: '#resume',
      title: 'Резюме',
    },
  ],
  [Lang.en]: [
    {
      key: 'about',
      href: '#about',
      title: 'About',
    },
    {
      key: 'resume',
      href: '#resume',
      title: 'Resume',
    },
  ],
}
