import { useMediaQuery } from 'react-responsive'
import type React from 'react'

interface WithChildren {
  children: React.ReactNode
}

export const Desktop: React.FC<WithChildren> = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}

export const Mobile: React.FC<WithChildren> = ({ children }) => {
  const isTablet = useMediaQuery({ maxWidth: 991 })
  return isTablet ? children : null
}
