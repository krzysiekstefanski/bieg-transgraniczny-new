import { EventTheme } from "../../../enums-gb";

export interface BannerSectionProps {
	data: any;
	theme: EventTheme;
	disabled?: boolean;
	className?: string;
}

export interface ComponentProps {
	$disabled: boolean;
}

export interface DecorationWrapperProps {
	$theme: EventTheme;
}
