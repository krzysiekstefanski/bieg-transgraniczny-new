import styled from "styled-components";

import { StyledComponent } from "../../../interfaces";
import { Breakpoint, Color, Shadow } from "../../../enums-gb";
import {
	ComponentProps,
	ImageWrapperProps,
	TextWrapperProps,
} from "./verificationSection.types";
import { Title } from "../../single";

export const Component: StyledComponent<
	"section",
	ComponentProps
> = styled.section<ComponentProps>`
	display: ${({ $disabled }: ComponentProps): string =>
		$disabled ? "none" : "flex"};
	width: 100%;
	background-color: ${Color.Grey95};
	padding: 48px 0;
	position: relative;

	@media ${Breakpoint.Medium} {
		padding: 120px 0 0;
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
	width: 100%;
	gap: 24px;

	@media ${Breakpoint.Medium} {
		flex-direction: row;
	}
`;

export const TextWrapper: StyledComponent<
	"div",
	TextWrapperProps
> = styled.div<TextWrapperProps>`
	display: flex;
	flex-direction: column;
	gap: 24px;

	@media ${Breakpoint.Medium} {
		width: ${({ $isImageEnabled }: TextWrapperProps): string =>
			$isImageEnabled ? "calc(50% - 12px)" : "100%"};
	}
`;

export const VeryficationTitle: StyledComponent<typeof Title> = styled(Title)`
	@media ${Breakpoint.Large} {
		font-size: 32px;
		line-height: 48px;
	}
`;

export const ImageWrapper: StyledComponent<
	"div",
	ImageWrapperProps
> = styled.div<ImageWrapperProps>`
	display: flex;
	align-items: center;

	@media ${Breakpoint.Medium} {
		width: ${({ $isTextEnabled }: ImageWrapperProps): string =>
			$isTextEnabled ? "calc(50% - 12px)" : "100%"};
	}
`;

export const ImageInnerWrapper: StyledComponent<"div"> = styled.div`
	width: 100%;
`;
