import React from "react";
import { IconResProps } from "./iconRes.types";
import { Color } from "../../../../enums";

export const Mail: React.FC<IconResProps> = (
	props: IconResProps
): JSX.Element => {
	const { color = Color.Secondary }: IconResProps = props;

	return (
		<svg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M20.103 4.094H3.897A2.7 2.7 0 0 0 1.2 6.791V17.21a2.7 2.7 0 0 0 2.697 2.697h16.206A2.7 2.7 0 0 0 22.8 17.21V6.79a2.7 2.7 0 0 0-2.697-2.697Zm-16.206.764h16.206c.38 0 .734.112 1.034.303l-7.716 7.287c-.784.74-2.058.74-2.842 0L2.863 5.16c.3-.191.654-.303 1.034-.303Zm18.139 12.35a1.935 1.935 0 0 1-1.933 1.934H3.897a1.935 1.935 0 0 1-1.933-1.933V6.79c0-.41.129-.789.346-1.101l7.745 7.313c.536.507 1.24.76 1.945.76.704 0 1.409-.253 1.945-.76l7.744-7.313c.218.313.347.692.347 1.101V17.21Z'
				fill={color}
			></path>
		</svg>
	);
};
