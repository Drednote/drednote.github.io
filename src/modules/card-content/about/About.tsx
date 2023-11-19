import React from 'react'
import { mainColors } from '@const/colors'

const About: React.FC<{ id?: string }> = ({ id }) => {
  return (
    <div
      id={id}
      style={{ height: '100vh', backgroundColor: mainColors.blueDark }}
    ></div>
  )
}

export default About
