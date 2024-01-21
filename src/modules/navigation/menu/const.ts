import { Lang } from '@const/lang'
import { AnchorLinkItemProps } from 'antd/es/anchor/Anchor'

export type MenuKey = 'about' | 'home' | 'work' | 'projects' //| 'resume'

export const menuKeys: Record<MenuKey, MenuKey> = {
  about: 'about',
  projects: 'projects',
  // resume: 'resume',
  home: 'home',
  work: 'work',
}

export interface MenuType extends AnchorLinkItemProps {
  key: MenuKey
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
      key: 'work',
      href: '#work',
      title: 'Опыт',
    },
    {
      key: 'projects',
      href: '#projects',
      title: 'Проекты',
    },
    // {
    //   key: 'resume',
    //   href: '#resume',
    //   title: 'Резюме',
    // },
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
      key: 'work',
      href: '#work',
      title: 'Experience',
    },
    {
      key: 'projects',
      href: '#projects',
      title: 'Projects',
    },
    // {
    //   key: 'resume',
    //   href: '#resume',
    //   title: 'Resume',
    // },
  ],
}
