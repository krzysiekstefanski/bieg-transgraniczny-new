import { typography } from "./typography"
import { colors } from "./colors"
import { shadows } from "./shadows"

export function getSize(size) {
  return {
    size: typography[size]?.size,
    interline: typography[size]?.interline,
    weight: typography[size]?.weight,
    spacing: typography[size]?.spacing,
  }
}

export function checkColor(color, toRGB = false) {
  let result = colors[color] ? colors[color] : color

  if (toRGB) {
    result =
      result.length === 4
        ? `#${result[1]}${result[1]}${result[2]}${result[2]}${result[3]}${result[3]}`
        : result

    const r = parseInt(result.substring(1, 3), 16)
    const g = parseInt(result.substring(3, 5), 16)
    const b = parseInt(result.substring(5, 7), 16)

    result = `${r}, ${g}, ${b}`
  }

  return result
}

export function checkShadow(shadow) {
  return shadows[shadow] ? shadows[shadow] : shadow
}

export function getColor(hexColor, level) {
  //const hexColor = colors[color] ? colors[color] : color;
  let r = "0",
    g = "0",
    b = "0"

  // Check if hex is 3 digits
  if (hexColor.length === 4) {
    r = "0x" + hexColor[1] + hexColor[1]
    g = "0x" + hexColor[2] + hexColor[2]
    b = "0x" + hexColor[3] + hexColor[3]

    // Check if hex is 6 digits
  } else if (hexColor.length === 7) {
    r = "0x" + hexColor[1] + hexColor[2]
    g = "0x" + hexColor[3] + hexColor[4]
    b = "0x" + hexColor[5] + hexColor[6]
  }

  // Convert to number variation of color
  let redValue = +r,
    greenValue = +g,
    blueValue = +b

  // Get r, g and b fractions
  redValue /= 255
  greenValue /= 255
  blueValue /= 255

  // Get highest and lowest value channels
  const cMin = Math.min(redValue, greenValue, blueValue),
    cMax = Math.max(redValue, greenValue, blueValue),
    delta = cMax - cMin
  let h = 0,
    s = 0,
    l = 0

  // Get hue from RGB
  // If there is no difference
  if (delta === 0) h = 0
  // If Red is max
  else if (cMax === redValue) h = ((greenValue - blueValue) / delta) % 6
  // If Green is max
  else if (cMax === greenValue) h = (blueValue - redValue) / delta + 2
  // If Blue is max
  else h = (redValue - greenValue) / delta + 4

  h = Math.round(h * 60)

  // Get negative hue behind 360°
  if (h < 0) h += 360

  switch (level) {
    case 20:
      s = 70
      l = 45
      break
    case 40:
      s = 70
      l = 55
      break
    case 60:
      s = 90
      l = 65
      break
    case 80:
      s = 90
      l = 85
      break
    case 100:
      s = 92
      l = 95
      break
    default:
      l = (cMax + cMin) / 2
      s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))
      l = Math.round(+(l * 100))
      s = Math.round(+(s * 100))
      break
  }

  // Return HSL object
  //   return {
  //     h: h,
  //     s: s,
  //     l: l,
  //   };
  //return `hsl(${h},${s},${l})`

  l /= 100
  const a = (s * Math.min(l, 1 - l)) / 100
  const f = n => {
    const k = (n + h / 30) % 12
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0") // convert to Hex and prefix "0" if needed
  }
  return `#${f(0)}${f(8)}${f(4)}`
}

export function colorizeText(text, theme) {
  // Regular expression to find words enclosed in **
  const regex = /\*\*(.*?)\*\*/g
  // Replace matched words with span tag having blue color
  const coloredText = text.replace(regex, (match, p1) => {
    return `<span style="color: ${checkColor(theme + "20")};">${p1}</span>`
  })

  return coloredText
}
