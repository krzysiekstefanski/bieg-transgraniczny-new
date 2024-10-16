import { EventTheme, TextAlign } from "../../../enums-gb";

export interface TextProps {
	text: string;
	align?: TextAlign;
	eventTheme?: EventTheme;
	className?: string;
}

export interface ContainerProps {
	$align: TextAlign;
}
