import styled from "styled-components";

import { StyledComponent } from "../../../interfaces";
import { ComponentProps } from "./container.types";

export const Component: StyledComponent<
	"div",
	ComponentProps
> = styled.div<ComponentProps>`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: ${({ gap }: ComponentProps): string => gap.toString() + "px"};
	width: 100%;
	max-width: 1240px;
	margin: 0 auto;
	padding: 0 15px;
`;
