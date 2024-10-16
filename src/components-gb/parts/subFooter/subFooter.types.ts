import { EventTheme } from "../../../enums-gb";
import { LinkData } from "../../../interfaces";

export interface SubFooterProps {
	links?: LinkData[];
	eventTheme?: EventTheme;
	className?: string;
}

export interface ComponentProps {
	$eventTheme?: EventTheme;
}
