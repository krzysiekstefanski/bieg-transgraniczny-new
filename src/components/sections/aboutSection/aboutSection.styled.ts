import styled from "styled-components";

import { StyledComponent } from "../../../interfaces";
import { Icon } from "../../single";

export const Component: StyledComponent<"section"> = styled.section`
	width: 100%;
	padding: 100px 0;
	position: relative;
	overflow: hidden;
`;

export const ShellIcon: StyledComponent<typeof Icon> = styled(Icon)`
	height: 8vw;
	max-height: 80px;
	min-height: 50px;
	width: 8vw;
	max-width: 80px;
	min-width: 50px;
	opacity: 0.6;
	position: absolute;
	top: 40px;
	right: -80px;
	transform: rotate(-230deg);
	z-index: -1;
`;

export const WaveIcon: StyledComponent<typeof Icon> = styled(Icon)`
	height: 100px;
	width: 100px;
	opacity: 0.7;
	position: absolute;
	bottom: 5px;
	right: 15px;
	z-index: -1;
`;

export const StarfishIcon: StyledComponent<typeof Icon> = styled(Icon)`
	height: 10vw;
	max-height: 110px;
	min-height: 60px;
	width: 10vw;
	max-width: 110px;
	min-width: 60px;
	opacity: 0.8;
	position: absolute;
	bottom: -25px;
	left: 0;
	z-index: -1;

	@media (min-width: 768px) {
		top: -120px;
		right: 0;
		bottom: auto;
	}
`;

export const TortoiseIcon: StyledComponent<typeof Icon> = styled(Icon)`
	height: 120px;
	width: 120px;
	opacity: 0.7;
	position: absolute;
	top: 75px;
	right: 2%;
	z-index: -1;
`;

export const HousesIcon: StyledComponent<typeof Icon> = styled(Icon)`
	height: 13vw;
	max-height: 150px;
	min-height: 70px;
	width: 13vw;
	max-width: 150px;
	min-width: 70px;
	opacity: 0.7;
	position: absolute;
	bottom: 5px;
	left: 5%;
	z-index: -1;
`;

export const TextWrapper: StyledComponent<"div"> = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
	padding-bottom: 34px;
	position: relative;
`;

export const SubscriptionWrapper: StyledComponent<"div"> = styled.div`
	display: flex;
	gap: 25px;
`;

export const SponsorsWrapper: StyledComponent<"div"> = styled.div`
	display: flex;
	gap: 25px;
`;

export const ImagesWrapper: StyledComponent<"div"> = styled.div`
	display: flex;
	position: relative;
	overflow: hidden;
	aspect-ratio: 1 / 1;
	width: 100%;

	.gatsby-image-wrapper {
		height: 100%;
		width: 100%;
	}
`;

export const ImageOverlay: StyledComponent<"div"> = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: -2px;
	left: -2px;
	right: -2px;
	bottom: -2px;
`;
