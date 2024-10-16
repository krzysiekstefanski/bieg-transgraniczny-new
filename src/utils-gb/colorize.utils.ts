import { Color, EventTheme } from "../enums-gb";

export function colorize(text: string, theme?: EventTheme) {
	// Regular expression to find words enclosed in **
	const regex = /\*\*(.*?)\*\*/g;
	const themeColor = theme
		? Color[theme.charAt(0).toUpperCase() + theme.slice(1) + "20"]
		: undefined;
	// Replace matched words with span tag having blue color

	const coloredText = text.replace(regex, (match, p1) => {
		return themeColor ? `<span style="color: ${themeColor};">${p1}</span>` : p1;
	});

	return coloredText;
}
