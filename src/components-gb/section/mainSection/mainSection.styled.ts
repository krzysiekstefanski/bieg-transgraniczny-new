import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import { StyledComponent } from "../../../interfaces";
import { Breakpoint, Color } from "../../../enums-gb";
import { Button, Title } from "../../single";
import { ButtonProps } from "../../single/button/button.types";
import { TitleProps } from "../../single/title/title.types";

export const Component: StyledComponent<"section"> = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 16px;
	max-width: 1920px;
	padding: 16px;
	margin: 0 auto;

	@media ${Breakpoint.Large} {
		flex-direction: row;
		height: calc(100vh - 101px);
		padding: 32px 48px 0;
	}
`;

const sideContent: FlattenSimpleInterpolation = css`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	max-height: 280px;
	border: 1px solid ${Color.Grey90};
	border-radius: 8px;
	padding: 16px 16px 0;
	overflow: hidden;
	position: relative;

	@media ${Breakpoint.Small} {
		max-height: 400px;
	}

	@media ${Breakpoint.Medium} {
		max-height: 760px;
	}

	@media ${Breakpoint.Large} {
		justify-content: center;
		max-height: none;
		background-color: transparent;
		border-width: 0;
		padding: 0;
		overflow: visible;
	}
`;

export const LeftSideContent: StyledComponent<"div"> = styled.div`
	order: 2;

	@media ${Breakpoint.Large} {
		order: 1;
	}

	${sideContent}
`;

export const MiddleContent: StyledComponent<"div"> = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	order: 1;

	@media ${Breakpoint.Large} {
		order: 2;
	}
`;

export const HostLogoWrapper: StyledComponent<"div"> = styled.div`
	display: none;

	@media ${Breakpoint.Large} {
		display: flex;
	}
`;

export const HostLogoWrapperMobile: StyledComponent<"div"> = styled.div`
	display: flex;

	@media ${Breakpoint.Large} {
		display: none;
	}
`;

export const HostTitle: StyledComponent<typeof Title, TitleProps> = styled(
	Title
)<TitleProps>`
	& {
		font-size: 32px;
		line-height: 48px;
		margin: 8px 0;

		@media ${Breakpoint.Medium} {
			font-size: 48px;
			line-height: 64px;
			margin: 16px 0 32px;
		}

		@media ${Breakpoint.Laptop} {
			margin: 32px 0 76px;
		}

		@media ${Breakpoint.Desktop} {
			font-size: 56px;
			line-height: 72px;
		}
	}
`;

export const HostSubtitle: StyledComponent<typeof Title, TitleProps> = styled(
	Title
)<TitleProps>`
	@media ${Breakpoint.Large} {
		margin: 0 0 66px;
	}
`;

export const MiddleButtonsWrapper: StyledComponent<"div"> = styled.div`
	display: none;

	@media ${Breakpoint.Large} {
		display: flex;
		gap: 16px;
	}

	@media ${Breakpoint.ExtraLarge} {
		gap: 24px;
	}
`;

export const RightSideContent: StyledComponent<"div"> = styled.div`
	order: 3;

	${sideContent}
`;

export const SideLogoWrapper: StyledComponent<"div"> = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin: 0 0 6px;

	@media ${Breakpoint.Medium} {
		margin: 0 0 26px;
	}

	@media ${Breakpoint.Large} {
		min-height: 120px;
	}
`;

export const SideLogoInnerWrapper: StyledComponent<"div"> = styled.div`
	display: flex;
	max-width: 350px;
	border-radius: 8px;
	overflow: hidden;
`;

export const EventTitle: StyledComponent<typeof Title, TitleProps> = styled(
	Title
)<TitleProps>`
	display: flex;
	order: 2;
	margin: 0 0 0 25px;

	@media ${Breakpoint.Large} {
		order: 1;
		flex-wrap: nowrap;
		margin: 0 25px 0 0;
	}
`;

export const EventImageWrapper: StyledComponent<"div"> = styled.div`
	display: flex;
	justify-content: center;
	height: stretch;
	width: 100%;
	margin: auto 0;
	position: relative;

	@media ${Breakpoint.ExtraLarge} {
		height: calc(100vh - 305px);
	}
`;

export const EventButtonWrapper: StyledComponent<"div"> = styled.div`
	display: flex;
	justify-content: center;
	width: calc(100% - 32px);
	position: absolute;
	bottom: 8px;
	z-index: 3;

	@media ${Breakpoint.Small} {
		bottom: 32px;
	}

	@media ${Breakpoint.Large} {
		display: none;
	}
`;

export const EventButton: StyledComponent<typeof Button, ButtonProps> = styled(
	Button
)<ButtonProps>`
	@media ${Breakpoint.Small} {
		width: 60%;
	}

	@media ${Breakpoint.Medium} {
		width: auto;
	}
`;

export const EventImageInnerWrapper: StyledComponent<"div"> = styled.div`
	display: flex;
	max-width: 230px;
	margin: auto 0;
	z-index: 1;

	@media ${Breakpoint.Small} {
		max-width: 400px;
	}

	@media ${Breakpoint.Medium} {
		max-width: 514px;
	}

	@media ${Breakpoint.ExtraLarge} {
		height: 100%;
	}

	img {
		object-fit: contain !important;
	}
`;

export const TransformingBox: StyledComponent<"div"> = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	transform: scale(-1, 1) translateX(18%);

	@media ${Breakpoint.Large} {
		transform: none;
	}
`;

export const SvgWrapper: StyledComponent<"div"> = styled.div`
	display: flex;
	justify-content: center;
	height: 100%;
	max-height: 612px;
	width: 100%;
	position: absolute;
	top: 47%;
	z-index: 0;
	transform: translate(-21px, -49%);
`;
