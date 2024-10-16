import React from "react";
import { IconResProps } from "./iconRes.types";
import { Color } from "../../../../enums";

export const Sunbed1: React.FC<IconResProps> = (
	props: IconResProps
): JSX.Element => {
	const { color = Color.Secondary }: IconResProps = props;

	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill={color}
			height='100%'
			width='100%'
			viewBox='0 0 263.903 263.903'
		>
			<g>
				<g>
					<g>
						<path d='M155.279,117.681c0.112,0.028,0.22,0.044,0.328,0.044c0.572,0,1.096-0.384,1.252-0.964     c4.684-17.792,2.748-37.536-5.312-54.168c-0.308-0.64-1.088-0.908-1.728-0.6c-0.64,0.312-0.912,1.084-0.6,1.728     c7.8,16.084,9.672,35.176,5.14,52.38C154.179,116.793,154.591,117.501,155.279,117.681z' />
						<path d='M263.899,213.389h-7.6c2.152-2.192,3.488-5.184,3.488-8.488c0-6.692-5.444-12.14-12.14-12.14H98.931l-1.616-1.9     l17.26-84.508c20.356,5.208,35.312,16.96,34.692,27.748c-0.048,0.852,0.504,1.62,1.324,1.848     c0.812,0.228,1.688-0.152,2.084-0.904c4.924-9.416,19.144-14.068,33.832-11.068c10.388,2.124,19.296,7.712,23.828,14.948     c0.336,0.536,0.92,0.848,1.532,0.848c0.156,0,0.316-0.02,0.472-0.064c0.768-0.208,1.312-0.896,1.336-1.692     c0.288-10.076-1.064-20.152-4.012-29.956c-1.048-3.488-2.316-6.972-3.76-10.352c-1.284-3.008-2.736-5.992-4.316-8.872     c-14.688-26.816-40.5-46.324-71.396-54.212l1.552-5.816c0.632-3.096-1.048-6.132-3.852-7.32l0.792-3.872     c0.144-0.7-0.308-1.38-1.008-1.524c-0.704-0.144-1.38,0.308-1.524,1.008l-0.788,3.876c-3.036,0-5.78,2.128-6.416,5.22l-1.08,5.28     c-0.052,0.248-0.016,0.452-0.032,0.68C66.135,24.565,16.279,51.869,0.103,97.649c-0.28,0.796,0.024,1.68,0.74,2.128     c0.712,0.456,1.644,0.352,2.244-0.244c6.612-6.564,18.632-9.22,30.62-6.772c14.196,2.9,25.16,12.104,26.664,22.384     c0.144,0.988,1.056,1.68,2.052,1.528c0.988-0.144,1.672-1.064,1.528-2.052c-0.144-0.976-0.384-1.94-0.664-2.896     c-0.468-17.424,7.828-38.736,21.26-54.048c7.772-8.864,20.632-19.484,38.264-20.992c0.296,0.056,0.588,0.084,0.884,0.144     c0.088,0.02,0.176,0.044,0.264,0.06c8.432,4.432,15.756,11.184,21.248,19.692c0.248,0.384,0.664,0.592,1.088,0.592     c0.24,0,0.484-0.068,0.7-0.208c0.6-0.388,0.772-1.188,0.384-1.788c-4.184-6.476-9.4-11.968-15.328-16.284     c28.7,8.072,52.6,26.552,66.368,51.68c1.524,2.78,2.924,5.656,4.16,8.552c1.392,3.26,2.612,6.616,3.624,9.976     c2.324,7.72,3.616,15.616,3.856,23.544c-5.452-5.908-13.624-10.336-22.824-12.216c-14.016-2.86-27.784,0.808-34.912,8.832     c-3.244-11.78-19.672-23.016-41.176-27.408c-1.292-0.264-2.584-0.488-3.872-0.692l-0.436-0.088c-0.024-0.004-0.044,0.004-0.064,0     c-10.392-1.6-20.5-1.28-28.836,0.944c-0.964,0.26-1.54,1.252-1.284,2.216c0.26,0.964,1.24,1.528,2.216,1.284     c7.36-1.968,16.224-2.32,25.444-1.112l-15.596,76.36l-24.632-28.916c-2.096-2.46-5.032-3.956-8.272-4.216     c-3.232-0.264-6.376,0.748-8.836,2.844c-2.46,2.096-3.956,5.032-4.216,8.272c-0.108,1.336,0.052,2.644,0.364,3.904l-8.2,9.64     l10.8,12.696l-18.792,28.4H10.311v16.448h10.672v18h17.744v-8.18l6.768-9.82h183.1l6.764,9.82v8.18h17.744v-18h10.8v-16.448     H263.899z M82.603,55.977c-12.432,14.172-20.572,33.376-21.756,50.224c-4.86-8.076-14.64-14.576-26.416-16.98     c-10.596-2.164-20.964-0.74-28.576,3.7c17.344-39.816,62.072-63.332,108.872-57.54C100.259,38.905,89.499,48.113,82.603,55.977z      M129.231,28.225l-1.552,5.824c-1.088-0.252-2.164-0.532-3.26-0.756c-1.36-0.276-2.716-0.512-4.072-0.74     c-0.008-0.156,0.008-0.344,0.052-0.556l1.08-5.28c0.38-1.868,2.032-3.156,3.868-3.156c0.26,0,0.528,0.028,0.792,0.08     C128.271,24.077,129.651,26.165,129.231,28.225z M111.031,105.621l-0.532,2.604l-2.24-3.168L111.031,105.621z M107.671,106.013     l2.544,3.604l-0.704,3.444l-2.544-3.604L107.671,106.013z M106.683,110.849l2.544,3.604l-0.632,3.088l-2.548-3.604     L106.683,110.849z M105.767,115.329l2.544,3.604l-0.66,3.24l-2.544-3.604L105.767,115.329z M104.823,119.957l2.544,3.604     l-13.032,63.804l-2.648-3.108L104.823,119.957z M46.395,159.041c0.18-2.268,1.224-4.324,2.944-5.788     c1.716-1.464,3.9-2.168,6.18-1.988c2.268,0.18,4.324,1.228,5.784,2.944l35.944,42.196h150.4c4.68,0,8.492,3.808,8.492,8.492     c0,4.68-3.808,8.488-8.492,8.488H95.923c-0.208,0-0.404-0.032-0.964-0.108l-0.228-0.028l-0.228,0.032     c-2.904,0.408-5.76-0.676-7.628-2.872l-38.492-45.188C46.919,163.505,46.215,161.309,46.395,159.041z M38.315,172.293     l5.596-6.576l40.556,47.672H73.275L38.315,172.293z M69.883,213.389H35.839l14.892-22.508L69.883,213.389z M47.467,187.037     l1.524,1.792l-16.252,24.556h-2.712L47.467,187.037z M35.075,238.521v5.668H24.627v-14.352h16.436L35.075,238.521z      M249.451,244.189h-10.448v-5.668l-5.984-8.684h16.432V244.189z M253.099,226.189h-27.024H48.003H20.979h-7.024v-9.156h79.276     c0.016,0,0.032,0.004,0.048,0.004c0.028,0,0.052-0.004,0.08-0.004h2.56h151.724h12.604v9.156H253.099z' />
						<path d='M244.299,239.393c1.808,0,3.284-1.472,3.284-3.28c0-1.808-1.472-3.284-3.284-3.284c-1.808,0-3.284,1.472-3.284,3.284     S242.487,239.393,244.299,239.393z M244.299,234.381c0.956,0,1.732,0.78,1.732,1.732c0,0.952-0.78,1.732-1.732,1.732     c-0.956,0-1.732-0.776-1.732-1.732S243.343,234.381,244.299,234.381z' />
						<path d='M29.779,239.393c1.808,0,3.284-1.472,3.284-3.28c0-1.808-1.472-3.284-3.284-3.284s-3.284,1.472-3.284,3.284     S27.971,239.393,29.779,239.393z M29.779,234.381c0.956,0,1.732,0.78,1.732,1.732c0,0.952-0.78,1.732-1.732,1.732     c-0.952,0-1.732-0.776-1.732-1.732S28.827,234.381,29.779,234.381z' />
						<path d='M52.055,178.381c-1.668,0-3.024,1.356-3.024,3.024c0,1.668,1.356,3.024,3.024,3.024c1.668,0,3.024-1.356,3.024-3.024     C55.079,179.737,53.723,178.381,52.055,178.381z M52.055,182.881c-0.812,0-1.476-0.664-1.476-1.476s0.664-1.476,1.476-1.476     s1.476,0.664,1.476,1.476S52.867,182.881,52.055,182.881z' />
					</g>
				</g>
			</g>
		</svg>
	);
};