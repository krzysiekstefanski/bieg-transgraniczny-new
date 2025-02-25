export const getColor: (hexColor: string, level: number) => string = (
  hexColor,
  level
) => {
  let r = "0",
    g = "0",
    b = "0"

  if (hexColor.length == 4) {
    r = "0x" + hexColor[1] + hexColor[1]
    g = "0x" + hexColor[2] + hexColor[2]
    b = "0x" + hexColor[3] + hexColor[3]
  } else if (hexColor.length == 7) {
    r = "0x" + hexColor[1] + hexColor[2]
    g = "0x" + hexColor[3] + hexColor[4]
    b = "0x" + hexColor[5] + hexColor[6]
  }

  let redValue = +r,
    greenValue = +g,
    blueValue = +b

  redValue /= 255
  greenValue /= 255
  blueValue /= 255

  const cMin = Math.min(redValue, greenValue, blueValue),
    cMax = Math.max(redValue, greenValue, blueValue),
    delta = cMax - cMin
  let h = 0,
    s = 0,
    l = 0

  if (delta == 0) h = 0
  else if (cMax == redValue) h = ((greenValue - blueValue) / delta) % 6
  else if (cMax == greenValue) h = (blueValue - redValue) / delta + 2
  else h = (redValue - greenValue) / delta + 4

  h = Math.round(h * 60)

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
    case 90:
      s = 70
      l = 91
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

  l /= 100
  const a = (s * Math.min(l, 1 - l)) / 100
  const f = n => {
    const k = (n + h / 30) % 12
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0")
  }
  return `#${f(0)}${f(8)}${f(4)}`
}
