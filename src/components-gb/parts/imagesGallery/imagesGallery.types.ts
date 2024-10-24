import { EventTheme } from "../../../enums-gb";

export interface ImagesGalleryProps {
	images: any;
	columns: number;
	eventTheme: EventTheme;
	isImageContain?: boolean;
	className?: string;
}

export interface ImageWrapperProps {
	$columns: number;
	$eventTheme: EventTheme;
}

export interface ArrowLeftButtonProps {
	$eventTheme: EventTheme;
}

export interface ArrowRightButtonProps {
	$eventTheme: EventTheme;
}

export interface CancelButtonProps {
	$eventTheme: EventTheme;
}
