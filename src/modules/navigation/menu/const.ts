import { Lang } from '@const/lang'

export type MenuKey = 'about' | 'resume' | 'main'

export const menuKeys: Record<MenuKey, MenuKey> = {
  about: 'about',
  resume: 'resume',
  main: 'main',
}

export interface MenuType {
  key: MenuKey
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
