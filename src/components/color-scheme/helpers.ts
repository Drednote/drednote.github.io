type ColorWithOpacity = (val?: number) => string

export interface AppColors {
  // Основной цвет (по дефолту у анта синий)
  primary: ColorWithOpacity
  text: ColorWithOpacity
  backgroundDark: ColorWithOpacity
  backgroundLight: ColorWithOpacity
  navBorder: ColorWithOpacity
}

export const cssColorsVariableNames: Record<keyof AppColors, string> = {
  primary: 'primary',
  text: 'text',
  backgroundDark: 'backgroundDark',
  backgroundLight: 'backgroundLight',
  navBorder: 'navBorder',
}

export const getCssVariable = (name: string, opacity = 1): string => {
  // eslint-disable-next-line no-undef
  const propertyValue = getComputedStyle(
    document.documentElement,
  ).getPropertyValue(name)

  if (!propertyValue || opacity === 1) {
    return propertyValue
  }

  let l = propertyValue.length - 1
  while (propertyValue.charAt(l) !== ',') l--

  return `${propertyValue.substring(0, l + 1)} ${opacity})`
}
