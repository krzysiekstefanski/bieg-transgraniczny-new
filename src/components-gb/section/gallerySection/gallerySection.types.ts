import { EventTheme } from "../../../enums-gb";

export interface GallerySectionProps {
	data: any;
	theme: EventTheme;
	disabled?: boolean;
	className?: string;
}

export interface ComponentProps {
	$disabled: boolean;
}
