type ColorWithOpacity = (val?: number) => string

export interface AppColors {
  // Основной цвет (по дефолту у анта синий)
  primary: ColorWithOpacity
  text: ColorWithOpacity
  textSecondary: ColorWithOpacity
  primarySecond: ColorWithOpacity
  buttonText: ColorWithOpacity
}

export const cssColorsVariableNames: Record<keyof AppColors, string> = {
  primary: 'primary',
  text: 'text',
  textSecondary: 'textSecondary',
  primarySecond: 'primarySecond',
  buttonText: 'buttonText',
}
