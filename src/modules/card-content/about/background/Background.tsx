import React, { useEffect, useState } from 'react'
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon'
import Icon from '@ant-design/icons'
import svg from './background.svg'
import svgMobile from './background-mobile.svg'
import { useMediaQuery } from 'react-responsive'

interface Props {
  fontSize: number
}
const id = 'background-svg'

const Background: React.FC<Partial<CustomIconComponentProps> & Props> = (props) => {
  const { fontSize } = props
  const isDesktop = useMediaQuery({ minWidth: 800 })
  const [viewBox, setViewBox] = useState(svg().props.viewBox)

  function onWindowResize() {
    const innerWidth = window.innerWidth
    const svgElement = document.getElementById(id)
    if (innerWidth < fontSize && svgElement) {
      const diff = (fontSize - innerWidth) * 2
      const x = diff / 2
      setViewBox((prev) => {
        const split = prev.split(' ')
        split[0] = x.toString()
        split[2] = (1200 - diff).toString()
        return split.join(' ')
      })
      // svgElement.setAttribute('viewBox', `${diff} 0 800 ${1200 - diff}`)
    }
  }

  useEffect(() => {
    onWindowResize()
    window.addEventListener('resize', onWindowResize)
  }, [])

  // return <Icon id={id} component={isDesktop ? svg : svgMobile} {...props} />
  return <Icon id={id} component={svg} viewBox={viewBox} {...props} />
}

export default Background
