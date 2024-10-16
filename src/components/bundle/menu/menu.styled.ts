import styled from "styled-components";

import { StyledComponent } from "../../../interfaces";
import { Color, FontWeight } from "../../../enums";
import { NavigationProps } from "./menu.types";

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
	top: 90px;
	right: 0;
	z-index: 90;

	@media (min-width: 576px) {
		width: auto;
		min-width: 260px;
	}

	@media (min-width: 768px) {
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
	gap: 15px;

	@media (min-width: 768px) {
		align-items: center;
		flex-direction: row;
		gap: 45px;
	}
`;

export const MenuLink: StyledComponent<"button"> = styled.button`
	display: block;
	width: 100%;
	background-color: transparent;
	font-family: inherit;
	font-size: 18px;
	line-height: 29px;
	font-weight: ${FontWeight.Medium};
	transition: color 0.2s ease;
	white-space: nowrap;

	&:hover {
		color: ${Color.Primary};
	}

	@media (min-width: 768px) {
		display: inline;
	}
`;

export const SocialsWrapper: StyledComponent<"div"> = styled.div`
	display: flex;
	align-items: center;
	gap: 15px;
	padding: 0;

	@media (min-width: 768px) {
		padding: 20px;
	}
`;

export const SocialLink: StyledComponent<"a"> = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;
	background-color: ${Color.Primary};
	border: 1px solid ${Color.Primary};
	border-radius: 5px;
	padding: 5px;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: ${Color.White};

		svg {
			g,
			path {
				fill: ${Color.Primary};
			}
		}
	}
`;
