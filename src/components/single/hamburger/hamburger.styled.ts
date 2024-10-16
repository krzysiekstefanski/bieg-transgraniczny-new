import styled from "styled-components";

import { StyledComponent } from "../../../interfaces";
import { Color } from "../../../enums";

export const Component: StyledComponent<"button"> = styled.button`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: 45px;
	width: 45px;
	padding: 5px;
	position: relative;
	background: transparent;
	border: 0;
	cursor: pointer;
	z-index: 1;

	@media (min-width: 768px) {
		display: none;
	}

	&:focus {
		outline-color: #fff;
	}

	span {
		display: block;
		height: 6px;
		width: 35px;
		background-color: ${Color.Primary};
		border-radius: 2px;
		position: relative;
		transition: background-color 0.3s ease;
	}

	&.active {
		justify-content: center;
		padding: 2px;

		span {
			position: absolute;
			transition: transform 0.3s ease;

			&:nth-child(1) {
				top: calc(50% - 3px);
				transform: rotate(45deg);
				transform-origin: center;
			}

			&:nth-child(2) {
				display: none;
			}

			&:nth-child(3) {
				bottom: calc(50% - 3px);
				transform: rotate(-45deg);
				transform-origin: center;
			}
		}
	}
`;
