import React from "react";
import parse from "html-react-parser";
import { RichTextProps } from "./richText.types";
import { Component } from "./richText.styled";
import { EventTheme } from "../../../enums-gb";

export const RichText: React.FC<RichTextProps> = (
	props: RichTextProps
): JSX.Element => {
	const {
		className,
		eventTheme = EventTheme.Transgraniczny,
		content,
	}: RichTextProps = props;

	return (
		<Component className={className} $eventTheme={eventTheme}>
			{parse(content)}
		</Component>
	);
};
