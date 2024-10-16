import React from "react";
import parse from "html-react-parser";
import { RichTextProps } from "./richText.types";
import { Component } from "./richText.styled";

export const RichText: React.FC<RichTextProps> = (
	props: RichTextProps
): JSX.Element => {
	const { content }: RichTextProps = props;

	return <Component>{parse(content)}</Component>;
};
