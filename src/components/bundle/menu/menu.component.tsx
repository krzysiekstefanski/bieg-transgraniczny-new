import React, { useState } from "react";
import scrollTo from "gatsby-plugin-smoothscroll";

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
import { Hamburger, Icon } from "../../single";
import { UseState } from "../../../types";
import { Color } from "../../../enums";

export const Menu: React.FC<MenuProps> = (props: MenuProps): JSX.Element => {
	const { className, links, sitesocials }: MenuProps = props;
	const [hamburgerIsActive, setHamburgerIsActive]: UseState<boolean> =
		useState<boolean>(false);

	const handleClick = () => {
		setHamburgerIsActive(!hamburgerIsActive);
	};

	return (
		<Container className={className}>
			<NavWrapper active={hamburgerIsActive}>
				<Navigation>
					{links.map(
						(link: LinkData, index: number): JSX.Element => (
							<div
								onClick={() => setHamburgerIsActive(false)}
								data-sal='fade'
								data-sal-delay={index + 2 + "00"}
								data-sal-easing='ease'
							>
								<MenuLink onClick={() => scrollTo(link.to)} key={index}>
									{link.text}
								</MenuLink>
							</div>
						)
					)}
				</Navigation>
				<SocialsWrapper>
					{sitesocials.map(
						(social: any, index: number): JSX.Element => (
							<div
								data-sal={"zoom-in"}
								data-sal-delay='1000'
								data-sal-easing='ease'
							>
								<SocialLink
									href={social.link}
									target='_blank'
									rel='noopenner noreferer'
									key={index}
								>
									<Icon icon={social.icon} color={Color.White} size={30} />
								</SocialLink>
							</div>
						)
					)}
				</SocialsWrapper>
			</NavWrapper>
			<Hamburger hamburgerClick={handleClick} active={hamburgerIsActive} />
		</Container>
	);
};
