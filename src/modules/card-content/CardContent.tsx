import React from 'react'
import { mainColors } from '@const/colors'
import About from '@modules/card-content/about/About'
import { menuKeys } from '@modules/navigation/menu/const'
import Home from '@modules/card-content/home/Home'

const ContentContainer: React.FC = () => {
  return (
    <>
      <Home key={menuKeys.home} id={menuKeys.home} />
      <About key={menuKeys.about} id={menuKeys.about} />
    </>
  )
}

const CardContent: React.FC = () => {
  return (
    <div
      style={{
        width: '100%',
        position: 'absolute',
        height: 'calc(100vh)',
        background: `radial-gradient(100% 70% at 50% 0%,${mainColors.topMain} 20%,${mainColors.botMain} 100%)`,
        // background: `linear-gradient(${mainColors.topMain}, ${mainColors.botMain})`,
        backgroundColor: 'black',
      }}
    >
      <ContentContainer />
    </div>
  )
}

export default CardContent
