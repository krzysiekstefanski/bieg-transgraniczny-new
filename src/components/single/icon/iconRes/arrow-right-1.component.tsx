import React from "react";
import { IconResProps } from "./iconRes.types";
import { Color } from "../../../../enums";

export const ArrowRight1: React.FC<IconResProps> = (
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
				d='m14 10 20 20-20 20'
			></path>
		</svg>
	);
};
