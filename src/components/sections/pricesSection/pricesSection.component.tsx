import React from "react";
import {
	Component,
	PriceWrapper,
	ImageWrapper,
	ContentWrapper,
	ImageOverlay,
	ShellIcon,
	WaveIcon,
	StarfishIcon,
	TortoiseIcon,
} from "./pricesSection.styled";
import { PricesSectionProps } from "./pricesSection.types";
import { Container, Title, RichText } from "../../single";
import {
	GatsbyImage,
	getImage,
	IGatsbyImageData,
	StaticImage,
} from "gatsby-plugin-image";
import { TwoColumns } from "../../templates";
import { Color } from "../../../enums";

export const PricesSection: React.FC<PricesSectionProps> = (
	props: PricesSectionProps
): JSX.Element => {
	const { className, data }: PricesSectionProps = props;
	const image: IGatsbyImageData | undefined = getImage(
		data.pricesimage.localFile
	);

	return (
		<Component className={className} id={"cennik"}>
			<StarfishIcon icon={"palms-1"} color={Color.Tertiary} />
			<TortoiseIcon icon={"tortoise-1"} color={Color.Tertiary} />
			<Container>
				<Title text={data.pricestitle} level={2} />
				<PriceWrapper>
					<RichText content={data.pricestextone} />
				</PriceWrapper>
				<TwoColumns
					leftColumn={
						<ImageWrapper
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
									src={"../../../images/mask-1.png"}
									alt={"Boost business image"}
								/>
							</ImageOverlay>
						</ImageWrapper>
					}
					rightColumn={
						<ContentWrapper>
							<WaveIcon icon={"shell-1"} color={Color.Tertiary} />
							<ShellIcon icon={"pingpong-1"} color={Color.Tertiary} />
							<RichText content={data.pricestexttwo} />
						</ContentWrapper>
					}
				/>
			</Container>
		</Component>
	);
};
