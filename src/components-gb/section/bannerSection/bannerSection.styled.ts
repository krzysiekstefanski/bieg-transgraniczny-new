import styled from "styled-components";

import { StyledComponent } from "../../../interfaces";
import { Breakpoint, Color, Shadow } from "../../../enums-gb";
import { ComponentProps } from "./bannerSection.types";

export const Component: StyledComponent<
	"section",
	ComponentProps
> = styled.section<ComponentProps>`
	display: ${({ $disabled }: ComponentProps): string =>
		$disabled ? "none" : "flex"};
	width: 100%;
	background-color: ${Color.Grey95};
	padding: 0;
	position: relative;
`;

export const BackgroundWrapper: StyledComponent<"div"> = styled.div`
	display: flex;
	width: 100%;
	position: absolute;
	top: 0;
	left: -50px;

	@media ${Breakpoint.ExtraLarge} {
		width: 80%;
	}
`;

export const DecorationWrapper: StyledComponent<"div"> = styled.div`
	display: flex;
	width: 201px;
	opacity: 0.2;
	position: absolute;
	bottom: -20px;
	left: 0;
	z-index: 1;

	@media ${Breakpoint.Medium} {
		opacity: 1;
	}
`;

export const Container: StyledComponent<"div"> = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	max-width: 1272px;
	padding: 0 16px;
	margin: 0 auto;
	position: relative;
	z-index: 1;
`;

export const ContentWrapper: StyledComponent<"div"> = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 56px;
	width: 100%;
	max-width: 1030px;
	background-color: white;
	border-radius: 8px;
	margin: 0 auto;
	position: relative;
	z-index: 1;

	@media ${Breakpoint.Medium} {
		box-shadow: ${Shadow.Medium};
		padding: 40px;
	}
`;

export const TextWrapper: StyledComponent<"div"> = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	width: 100%;
	max-width: 936px;

	@media ${Breakpoint.Medium} {
		gap: 16px;
	}
`;

export const ImageWrapper: StyledComponent<"div"> = styled.div`
	display: block;
	width: 100%;
`;

export const DecorationWrapper3: StyledComponent<"div"> = styled.div`
	display: flex;
`;
