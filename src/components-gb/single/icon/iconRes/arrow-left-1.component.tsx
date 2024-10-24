import React from "react";
import { IconResProps } from "./iconRes.types";
import { Color } from "../../../../enums";

export const ArrowLeft1: React.FC<IconResProps> = (
	props: IconResProps
): JSX.Element => {
	const { color = Color.White }: IconResProps = props;

	return (
		<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
			<path
				stroke={color}
				stroke-width='4'
				fill='none'
				stroke-linejoin='round'
				d='M30 10 10 30l20 20'
			></path>
		</svg>
	);
};
