import React from "react";

import { Component, IconWrapper } from "./icon.styled";
import { IconProps } from "./icon.types";
import { icons } from "./icon.const";

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
			<IconWrapper
				data-sal={animation ?? "zoom-in"}
				data-sal-delay='1000'
				data-sal-easing='ease'
			>
				<IconComponent color={color} />
			</IconWrapper>
		</Component>
	);
};
