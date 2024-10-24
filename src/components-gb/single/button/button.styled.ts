import styled, {
	css,
	FlattenSimpleInterpolation,
	FlattenInterpolation,
	ThemedStyledProps,
} from "styled-components";

import {
	ButtonSize,
	ButtonVariant,
	Color,
	EventTheme,
} from "../../../enums-gb";
import { StyledComponent } from "../../../interfaces";
import { ContainerProps } from "./button.types";

const buttonVariant: {
	[b in ButtonVariant]: FlattenInterpolation<
		ThemedStyledProps<ContainerProps, EventTheme>
	>;
} = {
	[ButtonVariant.Primary]: css`
		background-color: ${({ $eventTheme }: ContainerProps): Color =>
			$eventTheme === EventTheme.Niepodleglosci
				? Color.Niepodleglosci20
				: Color.Transgraniczny20};
		color: ${Color.White};
		border: 1px solid transparent;
		outline: none;
		transition: 0.25s ease-in background-color;

		&:hover,
		&:focus {
			background-color: ${({ $eventTheme }: ContainerProps): Color =>
				$eventTheme === EventTheme.Niepodleglosci
					? Color.Niepodleglosci40
					: Color.Transgraniczny40};
		}
	`,
	[ButtonVariant.Secondary]: css`
		color: ${Color.Black};
		background-color: ${Color.White};
		border: ${({ $eventTheme }: ContainerProps): string =>
			$eventTheme === EventTheme.Niepodleglosci
				? `1px solid ${Color.Niepodleglosci20}`
				: `1px solid ${Color.Transgraniczny20}`};
		outline: none;
		transition: 0.25s ease-in background-color, 0.1s ease-in color;

		&:hover,
		&:focus {
			border: ${({ $eventTheme }: ContainerProps): string =>
				$eventTheme === EventTheme.Niepodleglosci
					? `1px solid ${Color.Niepodleglosci40}`
					: `1px solid ${Color.Transgraniczny40}`};
			color: ${({ $eventTheme }: ContainerProps): Color =>
				$eventTheme === EventTheme.Niepodleglosci
					? Color.Niepodleglosci40
					: Color.Transgraniczny40};
		}
	`,
};

const buttonSize: { [b in ButtonSize]: FlattenSimpleInterpolation } = {
	[ButtonSize.Big]: css`
		font-size: 16px;
		line-height: 24px;
		font-weight: 700;
		padding: 15px 39px;
	`,
	[ButtonSize.Medium]: css`
		font-size: 16px;
		line-height: 24px;
		font-weight: 700;
		padding: 15px 39px;
		padding: 11px 39px;
	`,
	[ButtonSize.Small]: css`
		font-size: 14px;
		line-height: 22px;
		font-weight: 700;
		padding: 9px 27px;
	`,
};

export const Container: StyledComponent<
	"button",
	ContainerProps
> = styled.button<ContainerProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: "Bai Jamjuree", sans-serif;
	width: ${({ $fullWidth }: ContainerProps): string =>
		$fullWidth ? "100%" : "auto"};
	border-radius: 8px;
	${({ $size }: ContainerProps): FlattenSimpleInterpolation =>
		buttonSize[$size]};
	${({
		$variant,
	}: ContainerProps): FlattenInterpolation<
		ThemedStyledProps<ContainerProps, EventTheme>
	> => buttonVariant[$variant]};
`;

export const Label: StyledComponent<"span"> = styled.span`
	text-align: center;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;
