export interface MenuType {
  key: string
  title: string
  href: string
}

export const menu: MenuType[] = [
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
]
