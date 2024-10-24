import React from "react";
import { IconResProps } from "./iconRes.types";
import { Color } from "../../../../enums";

export const Rules: React.FC<IconResProps> = (
	props: IconResProps
): JSX.Element => {
	const { color = Color.White }: IconResProps = props;

	return (
		<svg width='32' height='32' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M23.68 5.76H8.32a2.563 2.563 0 0 0-2.56 2.56v15.36a2.563 2.563 0 0 0 2.56 2.56h15.36a2.563 2.563 0 0 0 2.56-2.56V8.32a2.563 2.563 0 0 0-2.56-2.56Zm1.28 17.92a1.28 1.28 0 0 1-1.28 1.28H8.32a1.28 1.28 0 0 1-1.28-1.28V8.32c0-.707.573-1.28 1.28-1.28h15.36c.707 0 1.28.573 1.28 1.28v15.36ZM23.04 16a.64.64 0 0 1-.64.64h-7.68a.64.64 0 1 1 0-1.28h7.68a.64.64 0 0 1 .64.64Zm-10.88 0a.64.64 0 0 1-.64.64H9.6a.64.64 0 1 1 0-1.28h1.92a.64.64 0 0 1 .64.64Zm10.88 3.2a.64.64 0 0 1-.64.64h-7.68a.64.64 0 1 1 0-1.28h7.68a.64.64 0 0 1 .64.64Zm-10.88 0a.64.64 0 0 1-.64.64H9.6a.64.64 0 1 1 0-1.28h1.92a.64.64 0 0 1 .64.64Zm10.88-6.4a.64.64 0 0 1-.64.64h-7.68a.64.64 0 1 1 0-1.28h7.68a.64.64 0 0 1 .64.64Zm-10.88 0a.64.64 0 0 1-.64.64H9.6a.64.64 0 1 1 0-1.28h1.92a.64.64 0 0 1 .64.64Z'
				fill={color}
			></path>
		</svg>
	);
};
