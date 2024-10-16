import React from "react";

import { Component, LogoIcon, LogoWrapper } from "./logo.styled";
import { LogoProps } from "./logo.types";

export const Logo: React.FC<LogoProps> = (props: LogoProps): JSX.Element => {
	const { className }: LogoProps = props;

	return (
		<Component className={className}>
			<LogoWrapper data-sal='fade' data-sal-delay='600' data-sal-easing='ease'>
				<LogoIcon icon={"logo-bk-1"} />
			</LogoWrapper>
		</Component>
	);
};
