import { useMediaQuery } from 'react-responsive'
import { useLocalStorage } from 'usehooks-ts'
import { AppColors, cssColorsVariableNames, getCssVariable } from '@components/color-scheme/helpers'
import { useEffect, useState } from 'react'

const COLOR_SCHEMA_KEY = 'COLOR_SCHEME'
const dark = 'dark'
const light = 'light'

interface ColorScheme {
  colorScheme: string
  isDark: boolean
  setIsDark: (val: boolean) => void
  colors: AppColors
}

export function useColorScheme(): ColorScheme {
  const systemPrefersDark = useMediaQuery(
    {
      query: '(prefers-color-scheme: dark)',
    },
    undefined,
  )
  const [colorScheme, setColorScheme] = useLocalStorage(
    COLOR_SCHEMA_KEY,
    systemPrefersDark ? dark : light,
  )
  const [colors, setColors] = useState(getColors(colorScheme))

  useEffect(() => {
    document.getElementById('html')?.setAttribute('data-theme', colorScheme)
    setColors(getColors(colorScheme))
  }, [colorScheme])

  return {
    colorScheme,
    isDark: colorScheme === dark,
    setIsDark: (val: boolean) => void setColorScheme(val ? dark : light),
    colors,
  }
}

const getColors = (colorScheme: string): AppColors => {
  return Object.entries(cssColorsVariableNames)
    .map((entry) => {
      const key = entry[0]
      const value = entry[1]
      return {
        [key]: (opacity = 1) => getCssVariable(`--${colorScheme}_${value}`, opacity),
      }
    })
    .reduce((previousValue, currentValue) => {
      return {
        ...previousValue,
        ...currentValue,
      }
    }) as unknown as AppColors
}

export default useColorScheme
