import React from "react";

import { Container } from "./title.styled";
import { TitleProps } from "./title.types";
import { TextAlign } from "../../../enums";

export const Title: React.FC<TitleProps> = (props: TitleProps): JSX.Element => {
	const {
		className,
		text,
		align = TextAlign.Center,
		level = 1,
	}: TitleProps = props;

	return (
		<Container
			className={className}
			$level={level}
			$align={align}
			data-sal='slide-up'
			data-sal-delay='300'
			data-sal-easing='ease'
		>
			{text}
		</Container>
	);
};
