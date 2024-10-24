import React from "react";
import loadable from "@loadable/component";
import {
	Component,
	LeftSideContent,
	MiddleContent,
	HostLogoWrapper,
	HostLogoWrapperMobile,
	HostTitle,
	HostSubtitle,
	MiddleButtonsWrapper,
	RightSideContent,
	SideLogoWrapper,
	SideLogoInnerWrapper,
	EventTitle,
	EventImageWrapper,
	EventButtonWrapper,
	EventButton,
	EventImageInnerWrapper,
	TransformingBox,
	SvgWrapper,
} from "./mainSection.styled";
import { MainSectionProps } from "./mainSection.types";
import {
	ButtonSize,
	ButtonVariant,
	EventTheme,
	TextAlign,
} from "../../../enums-gb";
import { GatsbyImage } from "gatsby-plugin-image";

export const MainSection: React.FC<MainSectionProps> = (
	props: MainSectionProps
): JSX.Element => {
	const { className, data }: MainSectionProps = props;
	const GreenBackgroundSVG = loadable(
		() => import("../../../images/teal-bg.inline.svg")
	);
	const RedBackgroundSVG = loadable(
		() => import("../../../images/red-bg.inline.svg")
	);

	return (
		<Component className={className} id={"gryfinobiega"}>
			<LeftSideContent>
				<SideLogoWrapper>
					<SideLogoInnerWrapper>
						<GatsbyImage
							image={
								data.transgranicznyLogo.logophoto.localFile.childImageSharp
									.gatsbyImageData
							}
							alt={`${data.events.eventone.eventonename} logo`}
							objectPosition={"50% 50%"}
						/>
						{data.transgranicznyLogo.logotext && (
							<EventTitle
								text={data.transgranicznyLogo.logotext}
								level={3}
								align={TextAlign.Right}
							/>
						)}
					</SideLogoInnerWrapper>
				</SideLogoWrapper>
				<EventImageWrapper>
					<EventImageInnerWrapper>
						<GatsbyImage
							image={
								data.events.eventone.eventonephoto.localFile.childImageSharp
									.gatsbyImageData
							}
							alt={`${data.events.eventone.eventonename} logo`}
							objectPosition={"50% 50%"}
						/>
					</EventImageInnerWrapper>
					<SvgWrapper>
						<GreenBackgroundSVG />
					</SvgWrapper>
				</EventImageWrapper>
				<EventButtonWrapper>
					<EventButton
						label='Bieg Transgraniczny'
						to='biegtransgraniczny'
						eventTheme={EventTheme.Transgraniczny}
						size={ButtonSize.Big}
						variant={ButtonVariant.Primary}
						fullWidth
					/>
				</EventButtonWrapper>
			</LeftSideContent>
			<MiddleContent>
				<HostLogoWrapper>
					<GatsbyImage
						image={
							data.host.hostimage.localFile.childImageSharp.gatsbyImageData
						}
						alt='Gryfino logo'
						objectPosition={"50% 50%"}
					/>
				</HostLogoWrapper>
				<HostLogoWrapperMobile>
					<GatsbyImage
						image={
							data.host.hostimagemobile.localFile.childImageSharp
								.gatsbyImageData
						}
						alt='Gryfino logo'
						objectPosition={"50% 50%"}
					/>
				</HostLogoWrapperMobile>
				<HostTitle
					text={data.host.hosttitle}
					level={1}
					align={TextAlign.Center}
				/>
				<HostSubtitle
					text={data.host.hostsubtitle}
					level={3}
					align={TextAlign.Center}
				/>
				<MiddleButtonsWrapper>
					<EventButton
						label='Bieg Transgraniczny'
						to='biegtransgraniczny'
						eventTheme={EventTheme.Transgraniczny}
						size={ButtonSize.Small}
						variant={ButtonVariant.Primary}
						fullWidth
					/>
					<EventButton
						label='Bieg Niepodległości'
						to='biegniepodleglosci'
						eventTheme={EventTheme.Niepodleglosci}
						size={ButtonSize.Small}
						variant={ButtonVariant.Primary}
						fullWidth
					/>
				</MiddleButtonsWrapper>
			</MiddleContent>
			<RightSideContent>
				<SideLogoWrapper>
					<SideLogoInnerWrapper>
						<GatsbyImage
							image={
								data.niepodleglosciLogo.logophoto.localFile.childImageSharp
									.gatsbyImageData
							}
							alt={`${data.events.eventtwo.eventtwoname} logo`}
							objectPosition={"50% 50%"}
						/>
						{data.niepodleglosciLogo.logotext && (
							<EventTitle
								text={data.niepodleglosciLogo.logotext}
								level={3}
								align={TextAlign.Right}
							/>
						)}
					</SideLogoInnerWrapper>
				</SideLogoWrapper>
				<EventImageWrapper>
					<EventImageInnerWrapper>
						<TransformingBox>
							<GatsbyImage
								image={
									data.events.eventtwo.eventtwophoto.localFile.childImageSharp
										.gatsbyImageData
								}
								alt={`${data.events.eventtwo.eventtwoname} logo`}
								objectPosition={"50% 50%"}
							/>
						</TransformingBox>
					</EventImageInnerWrapper>
					<SvgWrapper>
						<RedBackgroundSVG />
					</SvgWrapper>
					{/* <Box
            justify="center"
            height="100%"
            maxHeight="617px"
            width="100%"
            position="absolute"
            top="47%"
            zIndex="0"
            transform="translate(-5px,-51%)"
          >
            <RedBackgroundSVG />
          </Box> */}
				</EventImageWrapper>
				<EventButtonWrapper>
					<EventButton
						label='Bieg Niepodległości'
						to='biegniepodleglosci'
						eventTheme={EventTheme.Niepodleglosci}
						size={ButtonSize.Big}
						variant={ButtonVariant.Primary}
						fullWidth
					/>
				</EventButtonWrapper>
			</RightSideContent>
		</Component>
	);
};
