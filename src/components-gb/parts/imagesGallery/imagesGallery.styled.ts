import styled from "styled-components";

import { StyledComponent } from "../../../interfaces";
import { hexToRgba } from "../../../utils";
import {
	ArrowLeftButtonProps,
	ArrowRightButtonProps,
	CancelButtonProps,
	ImageWrapperProps,
} from "./imagesGallery.types";
import { Color, EventTheme } from "../../../enums-gb";

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

export const ImageWrapper: StyledComponent<
	"div",
	ImageWrapperProps
> = styled.div<ImageWrapperProps>`
	display: flex;
	width: ${({ $columns }: ImageWrapperProps): string =>
		$columns > 1 ? "calc(50% - 12px)" : "100%"};
	background-color: ${Color.White};
	border-radius: 8px;
	position: relative;
	overflow: hidden;
	cursor: pointer;

	&::after {
		content: "";
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
			background-color: ${({ $eventTheme }: ImageWrapperProps): string =>
				hexToRgba(
					$eventTheme === EventTheme.Niepodleglosci
						? Color.Niepodleglosci
						: Color.Transgraniczny,
					0.7
				)};
			background-image: url("/images/magnifying-glass.svg");
			background-position: center center;
			background-repeat: no-repeat;
		}
	}

	@media (min-width: 768px) {
		width: ${({ $columns }: ImageWrapperProps): string =>
			$columns > 1
				? `calc((100% / ${$columns}) - (${$columns - 1} * 24px / ${$columns}))`
				: "100%"};
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
		height: 100%;
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
	background-color: ${Color.White};
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
		background-color: ${Color.White};

		svg {
			path {
				fill: #000;
			}
		}
	}
`;

export const ModalImageWrapper: StyledComponent<"div"> = styled.div`
	max-height: 100%;
	max-width: 80%;
	background-color: ${Color.White};
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 25px 0;
`;

export const ModalInnerImageWrapper: StyledComponent<"div"> = styled.div`
	display: flex;
	width: 100%;
	max-height: 80vh;
	border-radius: 8px;
	overflow: hidden;

	.gatsby-image-wrapper {
		width: 100%;

		img {
			height: auto;
			width: 100%;
		}
	}
`;

export const CancelButton: StyledComponent<
	"button",
	CancelButtonProps
> = styled.button<CancelButtonProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 44px;
	height: 44px;
	background-color: ${({ $eventTheme }: CancelButtonProps): Color =>
		$eventTheme === EventTheme.Niepodleglosci
			? Color.Niepodleglosci
			: Color.Transgraniczny};
	position: absolute;
	top: 2%;
	right: 2%;
	cursor: pointer;
	apperance: none;
`;

export const ArrowLeftButton: StyledComponent<
	"button",
	ArrowLeftButtonProps
> = styled.button<ArrowLeftButtonProps>`
	display: flex;
	justify-content: center;
	width: 60px;
	height: 60px;
	background-color: ${({ $eventTheme }: ArrowLeftButtonProps): Color =>
		$eventTheme === EventTheme.Niepodleglosci
			? Color.Niepodleglosci
			: Color.Transgraniczny};
	position: absolute;
	top: calc(50% - 30px);
	left: 2%;
	cursor: pointer;
	apperance: none;
`;

export const ArrowRightButton: StyledComponent<
	"button",
	ArrowRightButtonProps
> = styled.button<ArrowRightButtonProps>`
	display: flex;
	justify-content: center;
	width: 60px;
	height: 60px;
	background-color: ${({ $eventTheme }: ArrowRightButtonProps): Color =>
		$eventTheme === EventTheme.Niepodleglosci
			? Color.Niepodleglosci
			: Color.Transgraniczny};
	position: absolute;
	top: calc(50% - 30px);
	right: 2%;
	cursor: pointer;
	apperance: none;
`;
