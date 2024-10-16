import React from "react";
import parse from "html-react-parser";
import { colorize } from "../../../utils-gb";
import { TextAlign } from "../../../enums-gb";
import { Container } from "./text.styled";
import { TextProps } from "./text.types";

export const Text: React.FC<TextProps> = (props: TextProps): JSX.Element => {
	const {
		className,
		text,
		align = TextAlign.Left,
		eventTheme,
	}: TextProps = props;

	return (
		<Container className={className} $align={align}>
			{parse(colorize(text, eventTheme))}
		</Container>
	);
};
