import * as React from "react";

import { Component } from "./hamburger.styled";
import { HamburgerProps } from "./hamburger.types";

export const Hamburger: React.FC<HamburgerProps> = (
	props: HamburgerProps
): JSX.Element => {
	const { className, hamburgerClick, eventTheme, active }: HamburgerProps =
		props;

	return (
		<Component
			className={`hamburger ${active && ` active` && !!className}`}
			onClick={hamburgerClick}
			$eventTheme={eventTheme}
		>
			<span />
			<span />
			<span />
		</Component>
	);
};
