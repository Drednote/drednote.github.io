type ColorWithOpacity = (val?: number) => string

export interface AppColors {
  // Основной цвет (по дефолту у анта синий)
  primary: ColorWithOpacity
  text: ColorWithOpacity
  backgroundDark: ColorWithOpacity
  backgroundLight: ColorWithOpacity
  navBorder: ColorWithOpacity
  aboutBackground: ColorWithOpacity
  aboutSkillsBg: ColorWithOpacity
  aboutSkillsText: ColorWithOpacity
}

export const cssColorsVariableNames: Record<keyof AppColors, string> = {
  primary: 'primary',
  text: 'text',
  backgroundDark: 'backgroundDark',
  backgroundLight: 'backgroundLight',
  navBorder: 'navBorder',
  aboutBackground: 'aboutBackground',
  aboutSkillsBg: 'aboutSkillsBg',
  aboutSkillsText: 'aboutSkillsText',
}

export const getCssVariable = (name: string, opacity = 1): string => {
  const propertyValue = getComputedStyle(document.documentElement).getPropertyValue(name)

  if (!propertyValue || opacity === 1) {
    return propertyValue
  }

  let l = propertyValue.length - 1
  while (propertyValue.charAt(l) !== ',') l--

  return `${propertyValue.substring(0, l + 1)} ${opacity})`
}
