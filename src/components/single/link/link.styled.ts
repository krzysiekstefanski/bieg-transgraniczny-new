import styled from "styled-components";

import { ContainerProps } from "./link.types";
import { StyledComponent } from "../../../interfaces";
import { Color } from "../../../enums";

export const Component: StyledComponent<
	"a",
	ContainerProps
> = styled.a<ContainerProps>`
	color: ${({ $active }: ContainerProps): Color =>
		$active ? Color.Primary : Color.Secondary};
	font-size: 18px;
	line-height: 29px;
	transition: color 0.2s ease;

	&:hover {
		color: ${Color.Primary};
	}
`;
