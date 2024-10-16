import React from "react";

import { Component } from "./container.styled";
import { ContainerProps } from "./container.types";

export const Container: React.FC<ContainerProps> = (
	props: ContainerProps
): JSX.Element => {
	const {
		className,
		column = false,
		gap = 45,
		children,
	}: ContainerProps = props;

	return (
		<Component className={className} $gap={gap} $column={column}>
			{children}
		</Component>
	);
};
