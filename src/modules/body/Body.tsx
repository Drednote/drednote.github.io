import React from 'react'
import { Col } from 'antd'
import AboutMe from '@modules/body/about/AboutMe'
import image from '../../animation/background-of-gradient-lights.jpg'
import { mainColors } from '@const/colors'
import About from '@modules/body/about/About'
import { menu, menuKeys } from '@modules/navigation/menu/const'

interface Props {
  height: number | string
}

const ContentContainer: React.FC = () => {
  return (
    <div
      style={{
        height: '100%',
      }}
    >
      <AboutMe key={menuKeys.main} id={menuKeys.main} />
      <About key={menuKeys.about} id={menuKeys.about} />
    </div>
  )
}

const Body: React.FC<Props> = (props) => {
  const { height } = props
  return (
    <>
      <div
        style={{
          width: '100%',
          // left: '-1vw',
          // top: '-5vh',
          // marginTop: height,
          position: 'absolute',
          height: 'calc(100vh)',
          // height: 'calc(100vh - 64px)',
          // backgroundImage: `url(${image})`,
          // backgroundSize: 'cover',
          // backgroundSize: '100% 100%',
          // backgroundRepeat: 'no-repeat',
          // filter: 'grayscale(.9)',
          // transform: 'rotate(90deg)',
          background: `radial-gradient(100% 70% at 50% 0%,${mainColors.topMain} 20%,${mainColors.botMain} 100%)`,
          // background: `linear-gradient(${mainColors.topMain}, ${mainColors.botMain})`,
          backgroundColor: 'black',
          // filter: 'blur(1px) grayscale(.9)', }}>
        }}
      >
        <ContentContainer />
      </div>
    </>
  )
}

export default Body
