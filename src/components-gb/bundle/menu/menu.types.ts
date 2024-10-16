import { EventTheme } from "../../../enums-gb";
import { LinkData } from "../../../interfaces";

export interface MenuProps {
	eventTheme: EventTheme;
	links: LinkData[];
	className?: string;
}

export interface NavigationProps {
	active: boolean;
}
