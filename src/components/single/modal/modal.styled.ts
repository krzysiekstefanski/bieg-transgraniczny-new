import styled from "styled-components";

import { StyledComponent } from "../../../interfaces";
import { Color } from "../../../enums";

export const Component: StyledComponent<"div"> = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 100;

	@media (min-width: 768px) {
		display: flex;
	}
`;

export const Overlay: StyledComponent<"div"> = styled.div`
	display: flex;
	height: 100vh;
	width: 100%;
	background-color: ${Color.Tertiary};
`;
