import styled from "styled-components";

import { StyledComponent } from "../../../interfaces";
import { Icon } from "../icon/icon.component";

export const Component: StyledComponent<"div"> = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 14px;
	margin-right: auto;
`;

export const LogoWrapper: StyledComponent<"span"> = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;
	max-width: 270px;
`;
