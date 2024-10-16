import { EventTheme } from "../../../enums-gb";

export interface RewardsSectionProps {
	data: any;
	theme: EventTheme;
	className?: string;
}

export interface ComponentProps {
	$disabled: boolean;
}

export interface DecorationWrapperProps {
	$theme: EventTheme;
}
