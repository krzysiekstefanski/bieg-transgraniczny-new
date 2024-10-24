import React from "react";
import { Component, Wrapper } from "./header.styled";
import { HeaderProps } from "./header.types";
import { EventTheme } from "../../../enums-gb";
import { Container, Logo } from "../../single";
import { Menu } from "../../bundle";

export const Header: React.FC<HeaderProps> = (
	props: HeaderProps
): JSX.Element => {
	const {
		className,
		eventTheme = EventTheme.Transgraniczny,
		logo,
		links,
	}: HeaderProps = props;

	return (
		<Component className={className}>
			<Container>
				<Wrapper>
					{logo && <Logo logo={logo} />}
					{links && <Menu eventTheme={eventTheme} links={links} />}
				</Wrapper>
			</Container>
		</Component>
	);
};
