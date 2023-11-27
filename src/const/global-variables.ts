type TL = 1 | 2 | 3 | 4 | 5 | undefined

export interface OptionsProps {
  maxWidth: number
  navigationHeight: number
  titleLevels: {
    l1: TL
    l2: TL
    l4: TL
  }
}

const Options = {
  maxWidth: 1200,
  navigationHeight: 64,
}

export const DesktopOptions: OptionsProps = {
  ...Options,
  titleLevels: {
    l1: 1,
    l2: 3,
    l4: 4,
  },
}

export const TabletOptions: OptionsProps = {
  ...Options,
  titleLevels: {
    l1: 2,
    l2: 4,
    l4: 4,
  },
}

export const MobileOptions: OptionsProps = {
  ...Options,
  titleLevels: {
    l1: 3,
    l2: 5,
    l4: 5,
  },
}
