import styled from "styled-components";

import { StyledComponent } from "../../../interfaces";
import { Breakpoint, Color, FontWeight } from "../../../enums-gb";
import { NavigationProps } from "./menu.types";
import { Link } from "gatsby";

export const Container: StyledComponent<"div"> = styled.div`
	display: flex;
	align-items: center;
	gap: 45px;
`;

export const NavWrapper: StyledComponent<
	"div",
	NavigationProps
> = styled.div<NavigationProps>`
	display: ${(props: NavigationProps) => (props.active ? "flex" : "none")};
	flex-direction: column;
	gap: 25px;
	width: 100%;
	background-color: ${Color.White};
	box-shadow: rgba(47, 46, 56, 0.08) 0px 24px 24px;
	padding: 20px;
	position: absolute;
	top: 87px;
	right: 0;
	z-index: 90;

	@media ${Breakpoint.Small} {
		width: auto;
		min-width: 260px;
	}

	@media ${Breakpoint.Large} {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 5px;
		box-shadow: none;
		position: static;
		padding: 0;
	}
`;

export const Navigation: StyledComponent<"nav"> = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 8px;
	min-width: 320px;

	@media ${Breakpoint.Large} {
		align-items: center;
		flex-direction: row;
	}

	@media ${Breakpoint.ExtraLarge} {
		gap: 40px;
	}
`;

export const MenuLink: StyledComponent<typeof Link> = styled(Link)`
	display: flex;
	gap: 8px;
	align-items: center;
	width: 100%;
	font-family: inherit;
	font-size: 16px;
	line-height: 24px;
	font-weight: ${FontWeight.Medium};
	transition: color 0.2s ease;
	white-space: nowrap;
	color: ${Color.Black};
	padding: 8px 0px;

	@media ${Breakpoint.Large} {
		gap: 4px;
	}
`;
