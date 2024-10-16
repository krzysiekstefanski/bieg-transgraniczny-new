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
	height: 70px;
	width: auto;

	@media (min-width: 991px) {
		height: 100px;
	}
`;

export const LogoIcon: StyledComponent<typeof Icon> = styled(Icon)`
	height: 70px;
	width: 100%;

	@media (min-width: 991px) {
		height: 100px;
	}
`;
