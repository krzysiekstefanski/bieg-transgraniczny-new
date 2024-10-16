import styled from "styled-components";

import { StyledComponent } from "../../../interfaces";
import { Color } from "../../../enums";

export const Component: StyledComponent<"section"> = styled.section`
	width: 100%;
	padding: 100px 0;
	background-color: ${Color.Tertiary};
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
