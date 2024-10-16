import React from "react";
import { IconResProps } from "./iconRes.types";
import { Color } from "../../../../enums";

export const Facebook: React.FC<IconResProps> = (
	props: IconResProps
): JSX.Element => {
	const { color = Color.Secondary }: IconResProps = props;

	return (
		<svg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<rect
				x='2.375'
				y='2.375'
				width='19.25'
				height='19.25'
				rx='3.625'
				stroke={color}
				stroke-width='0.75'
			></rect>
			<g clip-path='url(#fb_inline_svg__a)'>
				<path
					d='M10.081 9.42v2.183H7.68l-.005.369-.049 2.956-.006.381H10.08v6.874l.314.052a10.605 10.605 0 0 0 3.09.051l.326-.043V15.31h2.102l.046-.324.413-2.956.06-.427h-2.622v-1.028h.001V10.2c0-.353.112-.622.279-.802.165-.177.41-.293.728-.3l1.19-.022.368-.008V5.921l-.288-.068c-2.04-.484-3.55-.158-4.557.608-1.001.76-1.449 1.91-1.449 2.96Z'
					stroke={color}
					stroke-width='0.75'
				></path>
			</g>
			<defs>
				<clipPath id='fb_inline_svg__a'>
					<path
						fill={color}
						transform='translate(6 5)'
						d='M0 0h12v17H0z'
					></path>
				</clipPath>
			</defs>
		</svg>
	);
};
