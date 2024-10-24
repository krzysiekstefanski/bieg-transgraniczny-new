import styled from "styled-components";

import { StyledComponent } from "../../../interfaces";
import { ComponentProps } from "./subFooter.types";
import { Breakpoint, Color, EventTheme, FontWeight } from "../../../enums-gb";
import { Link } from "gatsby";

export const Component: StyledComponent<
	"div",
	ComponentProps
> = styled.div<ComponentProps>`
	display: flex;
	background-color: ${({ $eventTheme }: ComponentProps): string =>
		$eventTheme === EventTheme.Niepodleglosci
			? Color.Niepodleglosci
			: Color.Transgraniczny};
	width: 100%;
	padding: 24px 16px;
	margin: auto 0 8px;
`;

export const Container: StyledComponent<"div"> = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	gap: 16px;
	width: 100%;
	max-width: 1272px;
	padding: 0 16px;
	margin: 0 auto;
	position: relative;
	z-index: 1;

	@media ${Breakpoint.Small} {
		flex-direction: column;
	}

	@media ${Breakpoint.Large} {
		flex-direction: row;
	}
`;

export const Menu: StyledComponent<"div"> = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 12px;

	@media ${Breakpoint.Small} {
		flex-direction: row;
		gap: 16px;
	}
`;

export const MenuLink: StyledComponent<typeof Link> = styled(Link)`
	display: flex;
	gap: 16px;
	align-items: center;
	width: 100%;
	font-family: Urbanist, sans-serif;
	font-size: 16px;
	line-height: 24px;
	font-weight: ${FontWeight.Medium};
	transition: color 0.2s ease;
	white-space: nowrap;
	color: ${Color.White};
`;

export const ContactWrapper: StyledComponent<"div"> = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;

	@media ${Breakpoint.Small} {
		flex-direction: row;
		gap: 24px;
	}
`;
