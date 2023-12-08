export const getCssVariable = (name: string, opacity?: number): string => {
  const propertyValue = getComputedStyle(document.documentElement).getPropertyValue(name)

  if (!propertyValue || opacity === undefined) {
    return propertyValue
  }

  let l = propertyValue.length - 1
  while (propertyValue.charAt(l) !== ',') l--

  return `${propertyValue.substring(0, l + 1)} ${opacity})`
}
