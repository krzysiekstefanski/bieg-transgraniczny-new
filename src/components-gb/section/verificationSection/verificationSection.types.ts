import { EventTheme } from "../../../enums-gb";

export interface VerificationSectionProps {
	data: any;
	theme: EventTheme;
	className?: string;
}

export interface ComponentProps {
	$disabled: boolean;
}

export interface TextWrapperProps {
	$isImageEnabled: boolean;
}

export interface ImageWrapperProps {
	$isTextEnabled: boolean;
}
