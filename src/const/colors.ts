type ColorWithOpacity = (val?: number) => string

export interface AppColors {
  // Основной цвет (по дефолту у анта синий)
  primary: ColorWithOpacity
  text: ColorWithOpacity
  textSecondary: ColorWithOpacity
  primarySecond: ColorWithOpacity
}

export const cssColorsVariableNames: Record<keyof AppColors, string> = {
  primary: 'primary',
  text: 'text',
  textSecondary: 'textSecondary',
  primarySecond: 'primarySecond',
}
