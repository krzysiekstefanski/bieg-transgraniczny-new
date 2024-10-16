import styled from "styled-components";

import { StyledComponent } from "../../../interfaces";

import { ContainerProps } from "./link.types";
import { Color, EventTheme, FontWeight, TextAlign } from "../../../enums-gb";
import { Link } from "gatsby";

export const Container: StyledComponent<typeof Link, ContainerProps> = styled(
	Link
)<ContainerProps>`
	font-family: Urbanist, sans-serif;
	font-size: 16px;
	line-height: 24px;
	font-weight: 400;
	color: ${({ $eventTheme }: ContainerProps): Color =>
		$eventTheme === EventTheme.Niepodleglosci
			? Color.Niepodleglosci
			: Color.Transgraniczny};
	text-align: ${({ $align }: ContainerProps): TextAlign => $align};

	&:hover {
		color: ${({ $eventTheme }: ContainerProps): Color =>
			$eventTheme === EventTheme.Niepodleglosci
				? Color.Niepodleglosci20
				: Color.Transgraniczny20};
	}
`;
