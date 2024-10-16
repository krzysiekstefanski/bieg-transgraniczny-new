import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import { StyledComponent } from "../../../interfaces";

import { ContainerProps } from "./title.types";
import { Color, FontWeight, TextAlign } from "../../../enums-gb";

export const Container: StyledComponent<
	"div",
	ContainerProps
> = styled.div.attrs<ContainerProps>(({ $level }) => ({
	as: `h${$level}`,
}))<ContainerProps>`
	color: ${Color.Black};
	font-weight: ${FontWeight.Bold};
	text-align: ${({ $align }: ContainerProps): TextAlign => $align};

	${({ $level }: ContainerProps): FlattenSimpleInterpolation =>
		$level === 1
			? css`
					font-size: 48px;
					line-height: 64px;
			  `
			: $level === 2
			? css`
					font-size: 22px;
					line-height: 32px;
			  `
			: $level === 3
			? css`
					font-size: 19px;
					line-height: 1;
			  `
			: css``}
`;
