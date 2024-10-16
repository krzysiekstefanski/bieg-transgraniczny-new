import styled from "styled-components";

import { StyledComponent } from "../../../interfaces";
import { hexToRgba } from "../../../utils";
import { Color } from "../../../enums";

export const Component: StyledComponent<"section"> = styled.section`
	width: 100%;
	padding: 100px 0;
	position: relative;
	overflow: hidden;
`;

export const ImageDividerTop: StyledComponent<"div"> = styled.div`
	display: flex;
	width: 100%;
	position: absolute;
	top: -1px;
	left: 0;
	z-index: 2;
`;

export const ImageDividerBottom: StyledComponent<"div"> = styled.div`
	display: flex;
	width: 100%;
	position: absolute;
	left: 0;
	bottom: -1px;
	z-index: 2;
`;

export const BackgroundWrapper: StyledComponent<"div"> = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	overflow: hidden;
	background-color: ${hexToRgba(Color.Tertiary, 0.95)};
	z-index: -1;
`;

export const BackgroundImageWrapper: StyledComponent<"div"> = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	overflow: hidden;
	z-index: -1;

	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
`;

export const TextWrapper: StyledComponent<"div"> = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;

	@media (min-width: 768px) {
		max-width: 510px;
	}
`;
