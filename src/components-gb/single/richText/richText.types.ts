import { EventTheme } from "../../../enums-gb";

export interface RichTextProps {
	content: string;
	eventTheme?: EventTheme;
	className?: string;
}

export interface ComponentProps {
	$eventTheme: EventTheme;
}
