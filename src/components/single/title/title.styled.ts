import styled, { css } from "styled-components";

import { ContainerProps } from "./title.types";
import { Color, FontWeight, TextAlign } from "../../../enums";
import { StyledComponent } from "../../../interfaces";

export const Container: StyledComponent<
	"div",
	ContainerProps
> = styled.div.attrs<ContainerProps>(({ $level }) => ({
	as: `h${$level}`,
}))<ContainerProps>`
	color: ${Color.Secondary};
	font-weight: ${FontWeight.Bold};
	text-align: ${({ $align }: ContainerProps): TextAlign => $align};

	${({ $level }: ContainerProps) =>
		$level === 1
			? css`
					font-size: 30px;
					line-height: 38px;
					letter-spacing: -1px;
			  `
			: $level === 2
			? css`
					font-size: 28px;
					line-height: 32px;
					letter-spacing: -0.5px;
			  `
			: $level === 3
			? css`
					font-size: 22px;
					line-height: 26px;
			  `
			: css``}
`;
