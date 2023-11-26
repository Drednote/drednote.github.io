import React from 'react'
import About from '@modules/card-content/about/About'
import { menuKeys } from '@modules/navigation/menu/const'
import Home from '@modules/card-content/home/Home'
import { Row } from 'antd'

const CardContent: React.FC = () => {
  return (
    <Row
      style={{
        width: '100%',
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
      }}
    >
      <Home key={menuKeys.home} id={menuKeys.home} />
      <About key={menuKeys.about} id={menuKeys.about} />
    </Row>
  )
}

export default CardContent
