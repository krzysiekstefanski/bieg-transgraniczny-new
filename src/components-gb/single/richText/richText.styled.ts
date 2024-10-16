import styled from "styled-components";

import { StyledComponent } from "../../../interfaces";
import { Color, EventTheme, FontWeight } from "../../../enums-gb";
import { Breakpoint } from "../../../enums-gb";
import { ComponentProps } from "./richText.types";

export const Component: StyledComponent<
	"div",
	ComponentProps
> = styled.div<ComponentProps>`
	display: flex;
	flex-direction: column;
	gap: 8px;

	@media ${Breakpoint.ExtraLarge} {
		gap: 16px;
	}

	& > div:not(:last-child) {
		margin-bottom: 22px;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		color: ${Color.Black};
		font-weight: ${FontWeight.Bold};
	}

	h1 {
		font-size: 30px;
		line-height: 38px;
		letter-spacing: -1px;
	}

	h2 {
		font-size: 28px;
		line-height: 32px;
		letter-spacing: -0.5px;
	}

	h3,
	h4,
	h5,
	h6 {
		font-size: 22px;
		line-height: 26px;
	}

	p {
		font-family: Urbanist, sans-serif;
		font-size: 16px;
		line-height: 28px;
		font-weight: 400;
		color: ${Color.Black};
	}

	ul {
		font-family: Urbanist, sans-serif;
		font-size: 16px;
		line-height: 24px;
		font-weight: 400;
		color: rgb(23, 23, 28);
		text-align: left;
		list-style: none;

		li {
			color: ${Color.Black};
			padding-left: 16px;
			position: relative;

			&:not(:last-child) {
				margin-bottom: 8px;
			}

			br {
				display: none;
			}

			&::before {
				content: "";
				width: 0px;
				height: 0px;
				border-top: 5px solid transparent;
				border-bottom: 5px solid transparent;
				border-left: 6px solid
					${({ $eventTheme }: ComponentProps): Color =>
						$eventTheme === EventTheme.Niepodleglosci
							? Color.Niepodleglosci
							: Color.Transgraniczny};
				position: absolute;
				top: 12px;
				left: 0px;
				transform: translateY(-50%);
			}
		}
	}

	a {
		color: ${Color.Black};
		font-size: 18px;
		line-height: 29px;
		transition: color 0.2s ease 0s;

		&:hover {
			color: ${Color.Niepodleglosci};
		}
	}
`;
