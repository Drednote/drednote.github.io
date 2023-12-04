import React from 'react'
import { ColorScheme } from '@components/color-scheme/useColorScheme'
import { AdaptiveProps } from '@components/adaptive/Adaptive'
import { FallbackNs, UseTranslationResponse } from 'react-i18next'

/** Если данные переменные не использовать до обертки в Provider,
 * они никогда не будут с defaultValue */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const ColorSchemeContext = React.createContext<ColorScheme>({})
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const AdaptiveContext = React.createContext<AdaptiveProps>({})
const TranslationContext = React.createContext<
  UseTranslationResponse<FallbackNs<undefined>, undefined>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
>({})

export default {
  ColorScheme: ColorSchemeContext,
  Adaptive: AdaptiveContext,
  Translation: TranslationContext,
}
