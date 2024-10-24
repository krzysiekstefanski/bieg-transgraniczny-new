import styled from "styled-components";

import { StyledComponent } from "../../../interfaces";
import { ComponentProps } from "./container.types";

export const Component: StyledComponent<
	"div",
	ComponentProps
> = styled.div<ComponentProps>`
	display: flex;
	flex-direction: ${({ $column }: ComponentProps): string =>
		$column ? "column" : "row"};
	justify-content: space-between;
	align-items: center;
	gap: ${({ $gap }: ComponentProps): string => $gap.toString() + "px"};
	width: 100%;
	max-width: 1272px;
	padding: 0 16px;
	margin: 0 auto;
	position: relative;
	z-index: 1;
`;
