import styled from "styled-components";

import { StyledComponent } from "../../../interfaces";
import { Color } from "../../../enums";

export const Component: StyledComponent<"header"> = styled.header`
	display: flex;
	flex-direction: column;
	width: 100%;
	background-color: ${Color.White};
	padding: 10px 0;
`;

export const Wrapper: StyledComponent<"div"> = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 45px;
	width: 100%;
`;
