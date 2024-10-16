import React from "react";
import { IconResProps } from "./iconRes.types";
import { Color } from "../../../../enums";

export const List: React.FC<IconResProps> = (
	props: IconResProps
): JSX.Element => {
	const { color = Color.White }: IconResProps = props;

	return (
		<svg width='32' height='32' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='m13.251 21.571-3.2 3.2a.638.638 0 0 1-.451.189.638.638 0 0 1-.451-.189l-1.92-1.92a.641.641 0 0 1 .905-.905L9.6 23.414l2.749-2.748a.638.638 0 1 1 .902.906ZM24.96 13.29v10.39a2.563 2.563 0 0 1-2.56 2.56h-9.6a.64.64 0 1 1 0-1.28h9.6a1.28 1.28 0 0 0 1.28-1.28v-9.6H19.2a2.563 2.563 0 0 1-2.56-2.56V7.04h-5.76A1.28 1.28 0 0 0 9.6 8.32v11.52a.64.64 0 1 1-1.28 0V8.32a2.563 2.563 0 0 1 2.56-2.56h6.48c.678 0 1.315.262 1.798.736l5.04 4.97c.484.48.762 1.145.762 1.824Zm-5.76-.49h4.38c-.063-.157-.16-.3-.28-.422l-5.04-4.97c-.1-.1-.215-.173-.34-.234v4.346c0 .707.573 1.28 1.28 1.28Z'
				fill={color}
			></path>
		</svg>
	);
};
