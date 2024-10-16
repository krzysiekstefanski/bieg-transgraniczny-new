import React from "react";

import { Component, Wrapper } from "./header.styled";
import { HeaderProps } from "./header.types";
import { Container } from "../container/container.component";

import { Logo } from "../logo/logo.component";
import { Menu } from "../../bundle/menu/menu.component";
import { links } from "./header.const";

export const Header: React.FC<HeaderProps> = (
	props: HeaderProps
): JSX.Element => {
	const { className, data }: HeaderProps = props;
	const { sitesocials } = data;

	return (
		<Component className={className}>
			<Container>
				<Wrapper>
					<Logo />
					<Menu links={links} sitesocials={sitesocials} />
				</Wrapper>
			</Container>
		</Component>
	);
};
