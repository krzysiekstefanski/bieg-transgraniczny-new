import React from "react";
import { IconResProps } from "./iconRes.types";
import { Color } from "../../../../enums";

export const Close1: React.FC<IconResProps> = (
	props: IconResProps
): JSX.Element => {
	const { color = Color.White }: IconResProps = props;

	return (
		<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
			<g stroke={color} stroke-width='4'>
				<path d='m5 5 20 20M5 25 25 5'></path>
			</g>
		</svg>
	);
};
