import React from "react";
import { IconResProps } from "./iconRes.types";
import { Color } from "../../../../enums";

export const Home: React.FC<IconResProps> = (
	props: IconResProps
): JSX.Element => {
	const { color = Color.White }: IconResProps = props;

	return (
		<svg width='32' height='32' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='m26.051 15.549-9.6-9.6a.641.641 0 0 0-.905 0l-9.6 9.6A.64.64 0 0 0 5.76 16v9.6c0 .355.288.64.64.64h7.04a.64.64 0 0 0 .64-.64v-6.4h3.84v6.4c0 .355.288.64.64.64h7.04a.64.64 0 0 0 .64-.64V16a.63.63 0 0 0-.189-.451ZM24.96 24.96H19.2v-6.4a.64.64 0 0 0-.64-.64h-5.12a.64.64 0 0 0-.64.64v6.4H7.04v-8.694L16 7.306l8.96 8.96v8.694Z'
				fill={color}
			></path>
		</svg>
	);
};
