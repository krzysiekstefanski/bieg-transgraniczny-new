import styled from "styled-components";

import { StyledComponent } from "../../../interfaces";
import { Breakpoint, Color, Shadow } from "../../../enums-gb";
import { ComponentProps } from "./rewardsSection.types";
import { Title } from "../../single";

export const Component: StyledComponent<
	"section",
	ComponentProps
> = styled.section<ComponentProps>`
	display: ${({ $disabled }: ComponentProps): string =>
		$disabled ? "none" : "flex"};
	width: 100%;
	padding: 0;
	position: relative;
	padding: 120px 0;
`;

export const DecorationWrapper: StyledComponent<"div"> = styled.div`
	display: flex;
	width: 266px;
	position: absolute;
	top: 0;
	right: 0;
	z-index: 1;
	opacity: 0.2;

	@media ${Breakpoint.Medium} {
		opacity: 1;
	}
`;

export const DecorationWrapperTwo: StyledComponent<"div"> = styled.div`
	display: flex;
	width: 202px;
	position: absolute;
	bottom: 0;
	left: 0;
	z-index: 1;
	opacity: 0.2;

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
	gap: 56px;
	width: 100%;
`;

export const TextWrapper: StyledComponent<"div"> = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	width: 100%;
	max-width: 1030px;
	margin: 0 auto;

	@media ${Breakpoint.Medium} {
		gap: 16px;
	}
`;

export const RewardsTitle: StyledComponent<typeof Title> = styled(Title)`
	@media ${Breakpoint.Large} {
		font-size: 32px;
		line-height: 48px;
	}
`;

export const ImageWrapper: StyledComponent<"div"> = styled.div`
	display: block;
	width: 100%;
	max-width: 1030px;
	margin: 0 auto;
`;

export const DecorationWrapper3: StyledComponent<"div"> = styled.div`
	display: flex;
`;
