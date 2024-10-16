import styled from "styled-components";

import { StyledComponent } from "../../../interfaces";

import { ContainerProps } from "./text.types";
import { Color, FontWeight, TextAlign } from "../../../enums-gb";

export const Container: StyledComponent<
	"p",
	ContainerProps
> = styled.p<ContainerProps>`
	font-family: Urbanist, sans-serif;
	font-size: 18px;
	line-height: 32px;
	font-weight: 400;
	color: ${Color.Black};
	text-align: ${({ $align }: ContainerProps): TextAlign => $align};
`;
