import { EventTheme } from "../../../enums-gb";
import { LinkData } from "../../../interfaces";

export interface HeaderProps {
	logo?: any;
	links?: LinkData[];
	eventTheme?: EventTheme;
	className?: string;
}
