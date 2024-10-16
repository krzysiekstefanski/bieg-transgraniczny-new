import { EventTheme } from "../../../enums-gb";

export interface HamburgerProps {
	hamburgerClick: () => void;
	active: boolean;
	eventTheme?: EventTheme;
	className?: string;
}

export interface ComponentProps {
	$eventTheme: EventTheme;
}
