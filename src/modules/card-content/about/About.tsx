import React from 'react'
import useColorScheme from '@components/color-scheme/useColorScheme'

const About: React.FC<{ id?: string }> = ({ id }) => {
  const { colors } = useColorScheme()

  return (
    <div
      id={id}
      style={{
        height: '100vh',
        backgroundColor: colors.backgroundDark(),
      }}
    ></div>
  )
}

export default About
