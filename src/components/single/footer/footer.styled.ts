import styled from "styled-components";

import { StyledComponent } from "../../../interfaces";
import { Breakpoint } from "../../../enums-gb";
import {
	ComponentProps,
	ContainerProps,
	PartnerWrapperProps,
} from "./footer.types";

export const Component: StyledComponent<
	"div",
	ComponentProps
> = styled.div<ComponentProps>`
	display: flex;
	height: 101px;
	width: 100%;
	background-color: white;
	padding: 0 16px;
	margin-top: ${({ $margin }: ComponentProps): string =>
		$margin ? `${$margin}px` : "0"};
`;

export const Container: StyledComponent<
	"div",
	ContainerProps
> = styled.div<ContainerProps>`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	justify-content: space-between;
	align-items: center;
	gap: 16px;
	width: 100%;
	max-width: 1272px;
	padding: 0 16px;
	margin: 0 auto;
	position: relative;
	z-index: 1;

	@media ${Breakpoint.Medium} {
		grid-template-columns: ${({ $columns }: ContainerProps): string =>
			`repeat(${$columns}, auto)`};
	}
`;

export const PartnerWrapper: StyledComponent<
	"div",
	PartnerWrapperProps
> = styled.div<PartnerWrapperProps>`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	height: 100%;

	.gatsby-image-wrapper {
		div {
			height: ${({ $height }: PartnerWrapperProps): string => `${$height}px`};
		}
	}
`;
