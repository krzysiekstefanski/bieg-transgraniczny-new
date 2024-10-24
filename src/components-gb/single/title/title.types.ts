import { EventTheme, TextAlign } from "../../../enums-gb";

export interface TitleProps {
	text: string;
	level?: number;
	align?: TextAlign;
	eventTheme?: EventTheme;
	className?: string;
}

export interface ContainerProps {
	$level: number;
	$align: TextAlign;
}
