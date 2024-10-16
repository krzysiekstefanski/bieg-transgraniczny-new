import { ButtonSize, EventTheme, ButtonVariant } from "../../../enums-gb";

export interface ButtonProps {
	label?: string;
	fullWidth?: boolean;
	eventTheme?: EventTheme;
	variant?: ButtonVariant;
	size?: ButtonSize;
	disabled?: boolean;
	isLoading?: boolean;
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
	to?: string;
	blank?: boolean;
	className?: string;
}

export interface ContainerProps {
	$eventTheme: EventTheme;
	$variant: ButtonVariant;
	$size: ButtonSize;
	$fullWidth: boolean;
}
