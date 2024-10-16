import styled from "styled-components";

import { ContainerProps } from "./text.types";
import { StyledComponent } from "../../../interfaces";
import { Color, TextAlign } from "../../../enums";

export const Container: StyledComponent<
	"div",
	ContainerProps
> = styled.div.attrs<ContainerProps>(({ $is }) => ({ as: $is }))`
	color: ${Color.Secondary};
	font-size: 18px;
	line-height: 24px;
	text-align: ${({ $align }: ContainerProps): TextAlign => $align};
`;
