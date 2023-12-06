import { useLocalStorage } from 'usehooks-ts'
import { getCssVariable } from '@components/color-scheme/helpers'
import { useEffect } from 'react'
import { AppColors, cssColorsVariableNames } from '@const/colors'

export const COLOR_SCHEMA_KEY = 'COLOR_SCHEME'
const dark = 'dark'
const light = 'light'

export interface ColorScheme {
  colorScheme: string
  isDark: boolean
  setIsDark: (val: boolean) => void
  colors: AppColors
}

export function useColorScheme(): ColorScheme {
  const systemPrefersDark = true
  // by default will be open dark theme. maybe will change in future
  /*useMediaQuery(
    {
      query: '(prefers-color-scheme: dark)',
    },
    undefined,
  )*/
  const [colorScheme, setColorScheme] = useLocalStorage(
    COLOR_SCHEMA_KEY,
    systemPrefersDark ? dark : light,
  )

  useEffect(() => {
    document.getElementById('html')?.setAttribute('data-theme', colorScheme)
  }, [colorScheme])

  return {
    colorScheme,
    isDark: colorScheme === dark,
    setIsDark: (val: boolean) => void setColorScheme(val ? dark : light),
    colors: getColors(colorScheme),
  }
}

const getColors = (colorScheme: string): AppColors => {
  return Object.entries(cssColorsVariableNames)
    .map((entry) => {
      const key = entry[0]
      const value = entry[1]
      return {
        [key]: (opacity: number) => getCssVariable(`--${colorScheme}_${value}`, opacity),
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
