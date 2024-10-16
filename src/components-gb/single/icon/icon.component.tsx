import React from "react";

import { Component, IconWrapper } from "./icon.styled";
import { IconProps } from "./icon.types";
import { icons } from "./icon.const";
import { Color } from "../../../enums-gb";

export const Icon: React.FC<IconProps> = (props: IconProps): JSX.Element => {
	const {
		className,
		icon,
		size = 50,
		height = size,
		width = size,
		color,
		inset,
		animation,
	}: IconProps = props;
	const IconComponent = icons[icon];

	return (
		<Component
			className={className}
			height={height}
			width={width}
			inset={inset}
		>
			<IconWrapper>
				<IconComponent color={color} />
			</IconWrapper>
		</Component>
	);
};
