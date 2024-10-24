import React from "react";
import { IconResProps } from "./iconRes.types";
import { Color } from "../../../../enums";

export const Houses1: React.FC<IconResProps> = (
	props: IconResProps
): JSX.Element => {
	const { color = Color.Secondary }: IconResProps = props;

	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill={color}
			height='100%'
			width='100%'
			viewBox='0 0 512 512'
		>
			<g transform='translate(1 1)'>
				<g>
					<g>
						<path d='M263.533,366.147H255c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533h8.533c5.12,0,8.533-3.413,8.533-8.533     S268.653,366.147,263.533,366.147z' />
						<path d='M417.133,314.947H408.6c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533h8.533c5.12,0,8.533-3.413,8.533-8.533     S422.253,314.947,417.133,314.947z' />
						<path d='M506.733,162.2L336.067,59.8c-2.56-1.707-5.973-1.707-8.533,0l-115.2,69.12L182.467,111c-2.56-1.707-5.973-1.707-8.533,0     L3.267,213.4C0.707,215.107-1,217.667-1,221.08v42.667c0,3.413,1.707,5.973,4.267,7.68s5.973,1.707,8.533,0l12.8-7.68v179.2     c0,5.12,3.413,8.533,8.533,8.533h187.733h68.267h34.133c5.12,0,8.533-3.413,8.533-8.533V400.28h42.667h68.267h34.133     c5.12,0,8.533-3.413,8.533-8.533v-179.2l12.8,7.68c0.853,0.853,2.56,0.853,4.267,0.853s2.56,0,4.267-0.853     c2.56-1.707,4.267-4.267,4.267-7.68V169.88C511,166.467,509.293,163.907,506.733,162.2z M16.067,226.2L178.2,128.92     l28.876,17.174c0.314,0.263,0.643,0.514,0.991,0.746l35.84,21.333c0.519,0.346,1.08,0.604,1.655,0.809l94.771,56.364v23.04     l-157.867-94.72c-0.258-0.258-0.601-0.431-0.991-0.557c-2.404-1.123-5.301-0.938-7.542,0.557l-145.067,87.04     c-0.994,0.663-1.854,1.458-2.541,2.378l-10.259,6.156V226.2z M178.2,171.587l93.746,56.248l42.787,25.672v138.24v8.533h-17.067     v-93.867c0-5.12-3.413-8.533-8.533-8.533h-68.267c-5.12,0-8.533,3.413-8.533,8.533v93.867H41.667V253.507l42.787-25.672     L178.2,171.587z M41.667,417.347h170.667v17.067H41.667V417.347z M229.4,434.413V314.947h51.2v119.467H229.4z M297.667,434.413     v-17.067h17.067v17.067H297.667z M331.8,366.147h34.133v17.067H331.8V366.147z M383,383.213V263.747h51.2v119.467H383z      M451.267,383.213v-17.067h17.067v17.067H451.267z M468.333,349.08h-17.067v-93.867c0-5.12-3.413-8.533-8.533-8.533h-68.267     c-5.12,0-8.533,3.413-8.533,8.533v93.867H331.8v-85.333l12.8,7.68c0.258,0.258,0.601,0.431,0.991,0.557     c2.405,1.123,5.301,0.938,7.542-0.557c2.56-1.707,4.267-4.267,4.267-7.68V221.08c0-3.413-1.707-5.973-4.267-7.68l-88.058-52.835     l66.725-40.178l136.533,81.92V349.08z M493.933,197.187l-10.259-6.156c-0.687-0.92-1.547-1.715-2.541-2.378l-145.067-87.04     c-2.56-1.707-5.973-1.707-8.533,0l-80.219,48.295l-18.339-11.003L331.8,77.72l162.133,96.427V197.187z' />
						<path d='M58.733,366.147h8.533h119.467h8.533c5.12,0,8.533-3.413,8.533-8.533s-3.413-8.533-8.533-8.533v-76.8     c0-5.12-3.413-8.533-8.533-8.533H67.267c-5.12,0-8.533,3.413-8.533,8.533v76.8c-5.12,0-8.533,3.413-8.533,8.533     S53.613,366.147,58.733,366.147z M135.533,349.08v-25.6H178.2v25.6H135.533z M178.2,306.413h-42.667v-25.6H178.2V306.413z      M118.467,280.813v25.6H75.8v-25.6H118.467z M75.8,323.48h42.667v25.6H75.8V323.48z' />
					</g>
				</g>
			</g>
		</svg>
	);
};
