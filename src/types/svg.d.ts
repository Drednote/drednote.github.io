declare module '*.svg' {
  import { ReactSVGElement, ReactElement } from 'react'

  const content: () => ReactElement<{ viewBox: string; children: ReactSVGElement[] }>
  export default content
}
