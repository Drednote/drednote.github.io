import { useMediaQuery } from 'react-responsive'
import type React from 'react'
import { DesktopOptions, MobileOptions, OptionsProps, TabletOptions } from '@const/options'
import { useContext } from 'react'
import context from '@const/context'

interface WithChildren {
  children: React.ReactNode
}

export interface AdaptiveProps {
  isDesktop: boolean
  isTablet: boolean
  isMobile: boolean
  options: OptionsProps
}

export const useAdaptive = (): AdaptiveProps => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  const isTablet = useMediaQuery({ maxWidth: 991, minWidth: 481 })
  const isMobile = useMediaQuery({ maxWidth: 480 })

  return {
    isDesktop,
    isTablet,
    isMobile,
    options: isDesktop ? DesktopOptions : isTablet ? TabletOptions : MobileOptions,
  }
}

export const Desktop: React.FC<WithChildren> = ({ children }) => {
  const { isDesktop } = useContext(context.Adaptive)
  return isDesktop ? children : null
}

export const DesktopOrTablet: React.FC<WithChildren> = ({ children }) => {
  const { isDesktop, isTablet } = useContext(context.Adaptive)
  return isDesktop || isTablet ? children : null
}

export const Mobile: React.FC<WithChildren> = ({ children }) => {
  const { isMobile, isTablet } = useContext(context.Adaptive)
  return isTablet || isMobile ? children : null
}
