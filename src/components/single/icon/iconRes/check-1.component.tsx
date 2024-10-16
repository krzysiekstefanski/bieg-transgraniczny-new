import React from "react";
import { IconResProps } from "./iconRes.types";
import { Color } from "../../../../enums";

export const Check1: React.FC<IconResProps> = (
	props: IconResProps
): JSX.Element => {
	const { color = Color.Primary }: IconResProps = props;

	return (
		<svg width='100%' height='100%' viewBox='-1 0 16 12'>
			<polyline points='1.5 6 4.5 9 10.5 1'></polyline>
		</svg>
	);
};
