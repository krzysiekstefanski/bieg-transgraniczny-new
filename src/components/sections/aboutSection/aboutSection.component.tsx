import React from "react";
import {
	Component,
	ImagesWrapper,
	ImageOverlay,
	TextWrapper,
	ShellIcon,
	WaveIcon,
	StarfishIcon,
	TortoiseIcon,
	HousesIcon,
} from "./aboutSection.styled";
import { AboutSectionProps } from "./aboutSection.types";
import { Container, RichText, Title } from "../../single";
import {
	GatsbyImage,
	getImage,
	IGatsbyImageData,
	StaticImage,
} from "gatsby-plugin-image";
import { TwoColumns } from "../../templates";
import { Color } from "../../../enums";

export const AboutSection: React.FC<AboutSectionProps> = (
	props: AboutSectionProps
): JSX.Element => {
	const { className, data }: AboutSectionProps = props;
	const image: IGatsbyImageData | undefined = getImage(
		data.aboutimage.localFile
	);

	return (
		<Component className={className} id={"o-nas"}>
			<WaveIcon icon={"playground-1"} color={Color.Tertiary} />
			<TortoiseIcon icon={"starfish-1"} color={Color.Tertiary} />
			<HousesIcon icon={"houses-1"} color={Color.Tertiary} />
			<Container>
				<Title text={data.abouttitle} level={2} />
				<TwoColumns
					leftColumn={
						<TextWrapper>
							<ShellIcon icon={"shell-1"} color={Color.Tertiary} />
							<StarfishIcon icon={"sunbed-1"} color={Color.Tertiary} />
							<RichText content={data.abouttext} />
						</TextWrapper>
					}
					rightColumn={
						<ImagesWrapper
							data-sal='fade'
							data-sal-delay='600'
							data-sal-easing='ease'
						>
							{image && (
								<GatsbyImage
									image={image}
									alt={"hero image"}
									objectPosition={"50% 50%"}
								/>
							)}
							<ImageOverlay>
								<StaticImage
									src={"../../../images/mask-2.png"}
									alt={"Boost business image"}
								/>
							</ImageOverlay>
						</ImagesWrapper>
					}
				/>
			</Container>
		</Component>
	);
};
