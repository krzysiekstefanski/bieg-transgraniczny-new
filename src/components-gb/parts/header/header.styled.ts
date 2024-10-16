import styled from "styled-components";

import { StyledComponent } from "../../../interfaces";
import { Color } from "../../../enums-gb";

export const Component: StyledComponent<"header"> = styled.header`
	display: flex;
	flex-direction: column;
	width: 100%;
	background-color: ${Color.White};
	padding: 16px 0;
	box-shadow: rgba(47, 46, 56, 0.08) 0px 16px 32px;
	position: relative;
	z-index: 2;
`;

export const Wrapper: StyledComponent<"div"> = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 45px;
	width: 100%;
`;
