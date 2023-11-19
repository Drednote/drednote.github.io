import React from 'react'
import About from '@modules/card-content/about/About'
import { menuKeys } from '@modules/navigation/menu/const'
import Home from '@modules/card-content/home/Home'
import useColorScheme from '@components/color-scheme/useColorScheme'

const ContentContainer: React.FC = () => {
  return (
    <>
      <Home key={menuKeys.home} id={menuKeys.home} />
      <About key={menuKeys.about} id={menuKeys.about} />
    </>
  )
}

const CardContent: React.FC = () => {
  const { colors } = useColorScheme()

  return (
    <div
      style={{
        width: '100%',
        position: 'absolute',
        height: 'calc(100vh)',
        // background: `radial-gradient(100% 70% at 50% 0%,
        // ${
        //   isDark
        //     ? mainColors.backgroundLight_dark()
        //     : mainColors.backgroundLight_light()
        // } 20%,
        // ${
        //   isDark
        //     ? mainColors.backgroundDark_dark()
        //     : mainColors.backgroundDark_light()
        // } 100%)`,
        background: `linear-gradient(${colors.backgroundLight()}, ${colors.backgroundDark()})`,
      }}
    >
      <ContentContainer />
    </div>
  )
}

export default CardContent
