// @ts-nocheck
import { getColor } from "../../utils-gb/getColor.utils";

export enum Color {
	Transgraniczny = "#208e9c", // 208e9c
	Niepodleglosci = "#ad1f32",
	Transgraniczny20 = getColor(Transgraniczny, 20), // 22b0c3
	Transgraniczny40 = getColor(Transgraniczny, 40), // 3ccadd
	Transgraniczny60 = getColor(Transgraniczny, 60), // 55e3f6
	Transgraniczny80 = getColor(Transgraniczny, 80), // b6f3fb
	Transgraniczny100 = getColor(Transgraniczny, 100), //
	Niepodleglosci20 = getColor(Niepodleglosci, 20),
	Niepodleglosci40 = getColor(Niepodleglosci, 40),
	Niepodleglosci60 = getColor(Niepodleglosci, 60),
	Niepodleglosci80 = getColor(Niepodleglosci, 80),
	Niepodleglosci100 = getColor(Niepodleglosci, 100),
	Black = "#17171C",
	Grey20 = "#2F2E38",
	Grey40 = "#3F3D5C",
	Grey60 = "#3F3D5C",
	Grey80 = "#7C7B93",
	Grey90 = "#E9E9F1",
	Grey95 = "#FBFBFE",
	White = "#FFFFFF",
}
