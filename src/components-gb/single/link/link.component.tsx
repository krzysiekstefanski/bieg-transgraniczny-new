import React from "react";
import parse from "html-react-parser";
import { EventTheme, TextAlign } from "../../../enums-gb";
import { Container } from "./link.styled";
import { TextProps } from "./link.types";

export const Link: React.FC<TextProps> = (props: TextProps): JSX.Element => {
	const {
		className,
		text,
		align = TextAlign.Left,
		eventTheme = EventTheme.Transgraniczny,
		to,
		blank,
	}: TextProps = props;

	return (
		<Container
			className={className}
			$align={align}
			$eventTheme={eventTheme}
			to={to}
			target={blank && "_blank"}
			rel={blank && "noopener noreferrer"}
		>
			{parse(text)}
		</Container>
	);
};
