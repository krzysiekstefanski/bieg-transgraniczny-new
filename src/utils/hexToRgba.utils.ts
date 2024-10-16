import { getRgbValuesFromHex } from "./getRgbValuesFromHex.utils"

export const hexToRgba = (hex: string, alpha: number = 1): string => {
  const [red, green, blue]: number[] = getRgbValuesFromHex(hex)

  return `rgba(${[red, green, blue].join(",")}, ${alpha})`
}
