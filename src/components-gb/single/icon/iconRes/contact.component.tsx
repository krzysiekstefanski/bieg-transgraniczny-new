import React from "react";
import { IconResProps } from "./iconRes.types";
import { Color } from "../../../../enums";

export const Contact: React.FC<IconResProps> = (
	props: IconResProps
): JSX.Element => {
	const { color = Color.White }: IconResProps = props;

	return (
		<svg width='32' height='32' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='m25.069 20.48-2.029-2.029a1.92 1.92 0 0 0-2.714 0l-.752.749a.641.641 0 0 1-.905 0L12.8 13.331a.641.641 0 0 1 0-.905l.749-.75a1.92 1.92 0 0 0 0-2.713L11.52 6.931a1.92 1.92 0 0 0-2.714 0l-.595.595a5.767 5.767 0 0 0 0 8.148l8.119 8.118a5.741 5.741 0 0 0 4.073 1.683c1.475 0 2.95-.56 4.074-1.683l.595-.595a1.927 1.927 0 0 0-.003-2.717Zm-.906 1.811-.595.595a4.485 4.485 0 0 1-6.336 0l-8.118-8.121a4.485 4.485 0 0 1 0-6.336l.595-.595a.634.634 0 0 1 .451-.186c.163 0 .326.06.451.186l2.029 2.028c.25.25.25.656 0 .906l-.746.752a1.92 1.92 0 0 0 0 2.714l5.87 5.868a1.92 1.92 0 0 0 2.713 0l.749-.748c.25-.25.656-.25.905 0l2.029 2.028c.253.253.253.66.003.91Z'
				fill={color}
			></path>
		</svg>
	);
};
