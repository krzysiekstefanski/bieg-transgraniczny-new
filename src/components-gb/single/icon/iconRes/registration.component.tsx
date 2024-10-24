import React from "react";
import { IconResProps } from "./iconRes.types";
import { Color } from "../../../../enums";

export const Registration: React.FC<IconResProps> = (
	props: IconResProps
): JSX.Element => {
	const { color = Color.White }: IconResProps = props;

	return (
		<svg width='32' height='32' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M21.12 16c0 .352-.288.64-.64.64h-8.96a.642.642 0 0 1-.64-.64c0-.352.288-.64.64-.64h8.96c.352 0 .64.288.64.64Zm-2.56 2.56h-7.04a.642.642 0 0 0-.64.64c0 .352.288.64.64.64h7.04c.352 0 .64-.288.64-.64a.642.642 0 0 0-.64-.64Zm1.92-6.4h-8.96a.642.642 0 0 0-.64.64c0 .352.288.64.64.64h8.96c.352 0 .64-.288.64-.64a.642.642 0 0 0-.64-.64Zm3.84-3.84v15.36a2.563 2.563 0 0 1-2.56 2.56H10.24a2.563 2.563 0 0 1-2.56-2.56V8.32a2.563 2.563 0 0 1 2.56-2.56h11.52a2.563 2.563 0 0 1 2.56 2.56Zm-1.28 0a1.28 1.28 0 0 0-1.28-1.28H10.24a1.28 1.28 0 0 0-1.28 1.28v15.36c0 .707.573 1.28 1.28 1.28h11.52a1.28 1.28 0 0 0 1.28-1.28V8.32Z'
				fill={color}
			></path>
		</svg>
	);
};
