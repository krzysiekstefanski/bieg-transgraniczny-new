import styled from "styled-components";

import { StyledComponent } from "../../../interfaces";
import { Color } from "../../../enums";
import { hexToRgba } from "../../../utils";
import { Container } from "../../single";

export const Component: StyledComponent<"section"> = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
	background-color: ${Color.White};
	position: relative;
	overflow: hidden;
`;

export const Wrapper = styled.div`
	display: flex;
	width: 100%;
	height: 130vw;
	max-height: 1200px;
	margin-bottom: 24px;
`;

export const ImageDividerTop: StyledComponent<"div"> = styled.div`
	display: flex;
	height: 14px;
	width: 100%;
	position: absolute;
	top: -1px;
	left: 0;
	z-index: 2;
`;

export const ImageWrapper: StyledComponent<"div"> = styled.div`
	height: 80vh;
	width: 100%;
	position: relative;

	.gatsby-image-wrapper {
		height: 100%;
		width: 100%;
	}
`;

export const ImageOverlay: StyledComponent<"div"> = styled.div`
	background-color: ${hexToRgba(Color.Tertiary, 0.2)};
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 1;
`;

export const LogoWrapper: StyledComponent<"div"> = styled.div`
	display: none;
	height: 100px;
	width: 100px;
	position: absolute;
	right: 65px;
	bottom: 10%;
	z-index: 2;

	@media (min-width: 576px) {
		display: block;
	}
`;

export const LogoOverlay: StyledComponent<"div"> = styled.div`
	height: 100px;
	width: 100px;
	background-color: ${Color.White};
	border-radius: 5px;
	position: absolute;
	transform: rotate(45deg);
	top: 25px;
	left: 25px;
	z-index: -1;
`;

export const ContentContainer: StyledComponent<typeof Container> = styled(
	Container
)`
	position: absolute;
	top: 50%;
	left: 0;
	right: 0;
	transform: translateY(-50%);
`;

export const ContentWrapper: StyledComponent<"div"> = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	max-width: 400px;
	margin-right: auto;
	position: relative;
`;

export const ContentBackgroundWrapper: StyledComponent<"div"> = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: -1;

	.gatsby-image-wrapper {
		height: 100%;

		img {
			object-fit: fill !important;
		}
	}
`;

export const TextWrapper: StyledComponent<"div"> = styled.div`
	display: flex;
	flex-direction: column;
	gap: 25px;
	padding: 65px 45px 45px 45px;
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
	margin-right: auto;

	&:hover {
		background-color: ${Color.Primary};

		svg {
			path {
				fill: #000;
			}
		}
	}
`;

export const ImageDividerBottom: StyledComponent<"div"> = styled.div`
	display: flex;
	width: 100%;
	position: absolute;
	left: 0;
	bottom: -1px;
	z-index: 2;
`;
