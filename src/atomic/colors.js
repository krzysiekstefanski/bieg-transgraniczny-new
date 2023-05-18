import { getColor } from "./utils"

// const transgraniczny = "#1FAD66"
const transgraniczny = "#208e9c"
//const niepodleglosci = "#AD1f37"
const niepodleglosci = "#ad1f32"
//const niepodleglosci = "#ad9c1f"

export const colors = {
  transgraniczny00: transgraniczny,
  transgraniczny20: getColor(transgraniczny, 20),
  transgraniczny40: getColor(transgraniczny, 40),
  transgraniczny60: getColor(transgraniczny, 60),
  transgraniczny80: getColor(transgraniczny, 80),
  transgraniczny100: getColor(transgraniczny, 100),
  niepodleglosci00: niepodleglosci,
  niepodleglosci20: getColor(niepodleglosci, 20),
  niepodleglosci40: getColor(niepodleglosci, 40),
  niepodleglosci60: getColor(niepodleglosci, 60),
  niepodleglosci80: getColor(niepodleglosci, 80),
  niepodleglosci100: getColor(niepodleglosci, 100),
  black: "#17171C",
  grey20: "#2F2E38",
  grey40: "#3F3D5C",
  grey60: "#3F3D5C",
  grey80: "#7C7B93",
  grey90: "#E9E9F1",
  grey95: "#FBFBFE",
  //grey95: 'red',
  white: "#FFFFFF",
}
