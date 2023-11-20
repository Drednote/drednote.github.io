import { Lang } from '@const/lang'

export type MenuKey = 'about' | 'resume' | 'home'

export const menuKeys: Record<MenuKey, MenuKey> = {
  about: 'about',
  resume: 'resume',
  home: 'home',
}

export interface MenuType {
  key: MenuKey
  title: string
  href: string
}

export const menu: Record<string, MenuType[]> = {
  [Lang.ru]: [
    {
      key: 'home',
      href: '#home',
      title: 'Главная',
    },
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
      key: 'home',
      href: '#home',
      title: 'Home',
    },
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
