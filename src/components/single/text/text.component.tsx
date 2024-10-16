import React from "react";

import { Container } from "./text.styled";
import { TextProps } from "./text.types";
import { TextAlign } from "../../../enums";

export const Text: React.FC<TextProps> = (props: TextProps): JSX.Element => {
	const {
		className,
		text,
		align = TextAlign.Left,
		is = "p",
		style,
	}: TextProps = props;

	return (
		<Container
			className={className}
			$align={align}
			$is={is}
			style={style}
			data-sal='slide-up'
			data-sal-delay='300'
			data-sal-easing='ease'
		>
			{text}
		</Container>
	);
};
