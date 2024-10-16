import styled from "styled-components";

import { StyledComponent } from "../../../interfaces";
import { Color } from "../../../enums";
import { hexToRgba } from "../../../utils";

export const Component: StyledComponent<"div"> = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;

export const Wrapper: StyledComponent<"div"> = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-grow: 1;
	gap: 24px;
	width: 100%;
`;

export const ImageWrapper: StyledComponent<"div"> = styled.div`
	display: flex;
	width: calc(50% - 12px);
	background-color: ${Color.Tertiary};
	border-radius: 3px;
	position: relative;
	overflow: hidden;
	cursor: pointer;

	&::after {
		content: "";
		background-color: ${hexToRgba(Color.Tertiary, 0.3)};
		background-position: bottom center;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 2;
		transition: background-color 0.3s ease, background-position 0.3s ease;
	}

	&:hover {
		img {
			transform: scale(1.1);
		}

		&::after {
			background-color: transparent;
			background-position: center center;
			background-repeat: no-repeat;
			transition: background-color 0.3s ease;
		}
	}

	@media (min-width: 768px) {
		width: calc((100% / 3) - (2 * 24px / 3));
	}
`;

export const InnerImageWrapper: StyledComponent<"div"> = styled.div`
	display: flex;
	width: 100%;
	position: relative;

	&::before {
		content: "";
		width: 100%;
		padding-top: 60%;
	}

	.gatsby-image-wrapper {
		width: 100%;
		position: absolute;
	}

	img {
		height: 100%;
		width: 100%;
		border-radius: 3px;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1;
		transition: opacity 0.25s linear, transform 0.6s ease !important;
	}
`;

export const Button: StyledComponent<"button"> = styled.button`
	font-family: inherit;
	color: ${Color.White};
	font-size: 18px;
	line-height: 24px;
	font-weight: 500;
	text-decoration: none;
	background-color: ${Color.Primary};
	border: 0;
	border-radius: 3px;
	padding: 8px 16px;
	cursor: pointer;
	transition: color 0.1s ease, background-color 0.3s ease;
	margin-top: 24px;
	width: 100%;

	@media (min-width: 768px) {
		width: auto;
		margin: 24px auto 0;
	}

	&:hover {
		background-color: ${Color.Primary};

		svg {
			path {
				fill: #000;
			}
		}
	}
`;

export const ModalImageWrapper: StyledComponent<"div"> = styled.div`
	max-height: 100%;
	width: 80%;
	background-color: ${Color.Tertiary};
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 25px 0;
`;

export const ModalInnerImageWrapper: StyledComponent<"div"> = styled.div`
	display: flex;
	height: 80vh;
	width: 100%;
	overflow: hidden;

	.gatsby-image-wrapper {
		width: 100%;
	}
`;

export const CancelButton: StyledComponent<"button"> = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 44px;
	height: 44px;
	background-color: ${Color.Primary};
	position: absolute;
	top: 2%;
	right: 2%;
	cursor: pointer;
	apperance: none;
`;

export const ArrowLeftButton: StyledComponent<"button"> = styled.button`
	display: flex;
	justify-content: center;
	width: 60px;
	height: 60px;
	background-color: ${Color.Primary};
	position: absolute;
	top: calc(50% - 30px);
	left: 2%;
	cursor: pointer;
	apperance: none;
`;

export const ArrowRightButton: StyledComponent<"button"> = styled.button`
	display: flex;
	justify-content: center;
	width: 60px;
	height: 60px;
	background-color: ${Color.Primary};
	position: absolute;
	top: calc(50% - 30px);
	right: 2%;
	cursor: pointer;
	apperance: none;
`;
