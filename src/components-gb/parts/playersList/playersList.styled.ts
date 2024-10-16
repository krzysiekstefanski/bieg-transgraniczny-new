import styled from "styled-components";
import { StyledComponent } from "../../../interfaces";
import { Color, EventTheme } from "../../../enums-gb";
import {
	TableDataProps,
	TableHeadingProps,
	TableRowProps,
} from "./playersList.types";

export const Component: StyledComponent<"table"> = styled.table`
	display: flex;
	width: 100%;
`;

export const Table: StyledComponent<"table"> = styled.table`
	border-spacing: 0;
	white-space: nowrap;
	width: 100%;
`;

export const TableHeading: StyledComponent<
	"th",
	TableHeadingProps
> = styled.th<TableHeadingProps>`
	text-align: left;
	padding: 12px 16px 12px 8px;

	&:last-child {
		background-color: ${Color.White};
		box-shadow: inset 1px 0 0 0
			${({ $eventTheme }: TableHeadingProps): Color =>
				$eventTheme === EventTheme.Niepodleglosci
					? Color.Niepodleglosci80
					: Color.Transgraniczny80};
		position: sticky;
		right: 0;
		padding-left: 20px;
		padding-right: 20px;

		@media (min-width: 1200px) {
			box-shadow: none;
			position: static;
		}
	}
`;

export const TableData: StyledComponent<
	"td",
	TableDataProps
> = styled.td<TableDataProps>`
	padding: 12px 16px 12px 8px;

	&:last-child {
		box-shadow: inset 1px 0 0 0
			${({ $eventTheme }: TableDataProps): Color =>
				$eventTheme === EventTheme.Niepodleglosci
					? Color.Niepodleglosci80
					: Color.Transgraniczny80};
		position: -webkit-sticky;
		position: sticky;
		right: 0;
		padding-left: 20px;
		padding-right: 20px;

		@media (min-width: 1200px) {
			box-shadow: none;
			position: static;
		}
	}
`;

export const TableRowHeading: StyledComponent<"tr"> = styled.tr``;

export const TableRow: StyledComponent<
	"tr",
	TableRowProps
> = styled.tr<TableRowProps>`
	${TableData} {
		&:last-child {
			background-color: ${Color.White};
		}
	}

	&:nth-child(2n + 1) {
		background-color: ${({ $eventTheme }: TableRowProps): Color =>
			$eventTheme === EventTheme.Niepodleglosci
				? Color.Niepodleglosci100
				: Color.Transgraniczny100};

		${TableData} {
			&:last-child {
				background-color: ${({ $eventTheme }: TableRowProps): Color =>
					$eventTheme === EventTheme.Niepodleglosci
						? Color.Niepodleglosci100
						: Color.Transgraniczny100};
			}
		}
	}
`;
