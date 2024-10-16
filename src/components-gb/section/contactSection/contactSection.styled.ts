import styled from "styled-components";

import { StyledComponent } from "../../../interfaces";
import { Breakpoint, Color, Shadow } from "../../../enums-gb";
import { Title } from "../../single";

export const Component: StyledComponent<"section"> = styled.section`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	width: 100%;
	background-color: ${Color.Grey95};
	padding-top: 32px;
	position: relative;

	@media ${Breakpoint.Medium} {
		padding-top: 84px;
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

export const DecorationWrapper: StyledComponent<"div"> = styled.div`
	display: flex;
	width: 100px;
	position: absolute;
	top: 0;
	right: 0;
	z-index: 1;

	@media ${Breakpoint.Small} {
		width: 200px;
	}

	@media ${Breakpoint.Medium} {
		width: 266px;
	}
`;

export const ContentWrapper: StyledComponent<"div"> = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;

	@media ${Breakpoint.Large} {
		flex-direction: row;
	}
`;

export const ContentInnerWrapper: StyledComponent<"div"> = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 600px;
`;

export const SectionTitle: StyledComponent<typeof Title> = styled(Title)`
	font-size: 22px;
	line-height: 32px;
	margin-bottom: 24px;

	@media ${Breakpoint.Medium} {
		font-size: 32px;
		line-height: 48px;
	}

	@media ${Breakpoint.Large} {
		font-size: 48px;
		line-height: 64px;
	}
`;

export const InformationsWrapper: StyledComponent<"div"> = styled.div`
	display: flex;
	flex-direction: column;
	gap: 48px;
`;

export const ContentRow: StyledComponent<"div"> = styled.div`
	display: flex;
	flex-direction: column;

	@media ${Breakpoint.Small} {
		flex-direction: row;
	}
`;

export const TextWrapper: StyledComponent<"div"> = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;

	@media ${Breakpoint.Small} {
		width: 50%;
	}
`;

export const DecorationWrapperSeparator: StyledComponent<"div"> = styled.div`
	display: flex;
	width: 100%;
	padding-top: 15px;
	margin-top: auto;
`;

export const DecorationWrapperTwo: StyledComponent<"div"> = styled.div`
	display: flex;
	width: 150px;
	max-height: 180px;

	@media ${Breakpoint.Small} {
		width: 260px;
	}

	@media ${Breakpoint.Medium} {
		width: 304px;
	}
`;
