import { EventTheme, TextAlign } from "../../../enums-gb";

export interface TextProps {
	text: string;
	to?: string;
	blank?: boolean;
	align?: TextAlign;
	eventTheme?: EventTheme;
	className?: string;
}

export interface ContainerProps {
	$align: TextAlign;
	$eventTheme: EventTheme;
}
