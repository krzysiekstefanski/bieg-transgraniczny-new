import { Color } from "../../../enums-gb";

export interface IconProps {
	icon: string;
	animation?: string;
	size?: number;
	height?: number;
	width?: number;
	color?: Color;
	inset?: string;
	className?: string;
}

export interface ComponentProps {
	height: number;
	width: number;
	inset?: string;
}
