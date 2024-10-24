import React, { useState } from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import { useMediaQuery } from "react-responsive";
import {
	Container,
	Navigation,
	MenuLink,
	NavWrapper,
	SocialsWrapper,
	SocialLink,
} from "./menu.styled";
import { MenuProps } from "./menu.types";
import { LinkData } from "../../../interfaces";
import { Button, Hamburger, Icon } from "../../single";
import { UseState } from "../../../types";
import { Breakpoint, ButtonSize, Color, EventTheme } from "../../../enums-gb";

export const Menu: React.FC<MenuProps> = (props: MenuProps): JSX.Element => {
	const { className, eventTheme, links }: MenuProps = props;
	const [hamburgerIsActive, setHamburgerIsActive]: UseState<boolean> =
		useState<boolean>(false);

	const handleClick = () => {
		setHamburgerIsActive(!hamburgerIsActive);
	};
	const isExtraLargeScreen: boolean = useMediaQuery({
		query: Breakpoint.ExtraLarge,
	});
	return (
		<Container className={className}>
			<NavWrapper active={hamburgerIsActive}>
				<Navigation>
					{links.map(
						(link: LinkData, index: number): JSX.Element => (
							<div
								onClick={() => setHamburgerIsActive(false)}
								style={{ width: "100%" }}
							>
								<MenuLink to={"/bieg" + eventTheme + link.to} key={index}>
									{link.icon && (
										<Icon
											size={32}
											icon={link.icon}
											color={
												eventTheme === EventTheme.Niepodleglosci
													? Color.Niepodleglosci
													: Color.Transgraniczny
											}
										/>
									)}
									{link.text}
								</MenuLink>
							</div>
						)
					)}
					<Button
						label={"Zapisz się"}
						to={"/bieg" + eventTheme + "/zapisy"}
						size={isExtraLargeScreen ? ButtonSize.Medium : ButtonSize.Small}
						fullWidth
						eventTheme={eventTheme}
					/>
				</Navigation>
			</NavWrapper>
			<Hamburger
				hamburgerClick={handleClick}
				active={hamburgerIsActive}
				eventTheme={eventTheme}
			/>
		</Container>
	);
};
