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
	height: 10vw;
	max-height: 120px;
	min-height: 50px;
	width: 10vw;
	max-width: 120px;
	min-width: 50px;
	opacity: 0.5;
	position: absolute;
	bottom: -80px;
	right: 0;
	z-index: -1;
`;

export const WaveIcon: StyledComponent<typeof Icon> = styled(Icon)`
	height: 60px;
	width: 60px;
	opacity: 0.5;
	position: absolute;
	top: -60px;
	right: 0;
	z-index: -1;

	@media (min-width: 991px) {
		top: -80px;
		left: 0;
	}
`;

export const StarfishIcon: StyledComponent<typeof Icon> = styled(Icon)`
	height: 7vw;
	max-height: 150px;
	min-height: 60px;
	width: 7vw;
	max-width: 150px;
	min-width: 60px;
	opacity: 0.7;
	position: absolute;
	bottom: 0;
	left: 15px;
	z-index: -1;
`;

export const TortoiseIcon: StyledComponent<typeof Icon> = styled(Icon)`
	height: 15vw;
	max-height: 200px;
	min-height: 100px;
	width: 15vw;
	max-width: 200px;
	min-width: 100px;
	opacity: 0.7;
	position: absolute;
	top: 25px;
	left: 10%;
	transform: rotate(-210deg);
	z-index: -1;
`;

export const PriceWrapper: StyledComponent<"div"> = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 25px;
	width: 100%;
`;

export const ImageWrapper: StyledComponent<"div"> = styled.div`
	display: flex;
	justify-content: flex-end;
	position: relative;
	overflow: hidden;
	aspect-ratio: 1 / 1;
	width: 100%;

	.gatsby-image-wrapper {
		height: 100%;
		width: 100%;
	}
`;

export const ContentWrapper: StyledComponent<"div"> = styled.div`
	display: flex;
	flex-direction: column;
	gap: 25px;
	position: relative;
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
