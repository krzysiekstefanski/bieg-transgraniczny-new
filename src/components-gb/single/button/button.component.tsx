import React from "react";

import { Container, Label } from "./button.styled";
import { ButtonProps } from "./button.types";
import { ButtonSize, ButtonVariant, EventTheme } from "../../../enums-gb";
import { Link } from "gatsby";

export const Button: React.FC<ButtonProps> = (
	props: ButtonProps
): JSX.Element => {
	const {
		label,
		onClick,
		eventTheme = EventTheme.Transgraniczny,
		variant = ButtonVariant.Primary,
		size = ButtonSize.Medium,
		className,
		fullWidth = false,
		disabled = false,
		type = "button",
		to,
		blank,
	}: ButtonProps = props;

	return (
		<Container
			as={to ? Link : "button"}
			href={to}
			className={className}
			onClick={onClick}
			disabled={disabled}
			type={to ? undefined : type}
			$eventTheme={eventTheme}
			$variant={variant}
			$size={size}
			$fullWidth={fullWidth}
			target={blank && "_blank"}
			rel={blank && "noopener noreferrer"}
		>
			{!!label && <Label>{label}</Label>}
		</Container>
	);
};
