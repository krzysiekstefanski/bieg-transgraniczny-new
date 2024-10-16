import styled from "styled-components";

import { StyledComponent } from "../../../interfaces";
import { Color } from "../../../enums";
import { Text } from "../text/text.component";

export const Component: StyledComponent<"div"> = styled.div`
	width: 100%;
	margin: 25px 0;
`;

export const Checkmark: StyledComponent<"span"> = styled.span`
	display: block;
	width: 30px;
	height: 30px;
	min-width: 30px;
	min-height: 30px;
	max-width: 30px;
	max-height: 30px;
	position: absolute;
	top: 7px;
	left: 0;
	border: 1px solid ${Color.Secondary};
	border-radius: 3px;
	z-index: 0;
	transform: scale(1);
	vertical-align: middle;
	background-color: transparent;
	transition: all 0.2s ease;
	margin-right: 15px;
	cursor: pointer;

	@media (min-width: 992px) {
		svg {
			height: 24px;
			width: 24px;
		}
	}

	svg {
		height: 24px;
		width: 24px;
		position: absolute;
		top: 3px;
		left: 3px;
		fill: none;
		stroke: ${Color.Primary};
		stroke-width: 2;
		stroke-linecap: round;
		stroke-linejoin: round;
		stroke-dasharray: 24;
		stroke-dashoffset: 24;
		transform: translate3d(0, 0, 0);
		z-index: 99;
	}

	&::before {
		content: "";
		width: 100%;
		height: 100%;
		display: block;
		transform: scale(0);
		opacity: 1;
		border-radius: 50%;
	}

	&::after {
		content: "";
		position: absolute;
		top: 1px;
		left: 1px;
		right: 1px;
		bottom: 1px;
	}

	.active {
		background-color: transparent;
		animation: wave 0.4s ease;

		&::before {
			transform: scale(3.5);
			opacity: 0;
			transition: all 0.6s ease;
		}
	}
`;

export const Label: StyledComponent<"label"> = styled.label`
	display: flex;
	flex-direction: column;
	position: relative;
	padding-left: 46px;

	.checkbox:checked ~ .checkmark {
		background-color: transparent;
		animation: wave 0.4s ease;

		svg {
			stroke-dashoffset: 0;
		}

		&::before {
			transform: scale(3.5);
			opacity: 0;
			transition: all 0.6s ease;
		}
	}
`;

export const Checkbox: StyledComponent<"input"> = styled.input`
	width: 30px;
	height: 30px;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;
	cursor: pointer;
	opacity: 0;
`;

export const AltText: StyledComponent<typeof Text> = styled(Text)`
	font-size: 14px;
	line-height: 18px;
	padding-top: 8px;
`;
