import { Color, EventTheme } from "../enums-gb"

export function colorize(text: string, theme?: EventTheme) {
  const regex = /\*\*(.*?)\*\*/g
  const themeColor = theme
    ? Color[theme.charAt(0).toUpperCase() + theme.slice(1) + "20"]
    : undefined

  const coloredText = text.replace(regex, (match, p1) => {
    return themeColor ? `<span style="color: ${themeColor};">${p1}</span>` : p1
  })

  return coloredText
}
