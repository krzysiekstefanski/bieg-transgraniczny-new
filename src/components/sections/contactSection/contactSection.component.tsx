import React from "react";
import {
	Component,
	BackgroundWrapper,
	BackgroundImageWrapper,
	TextWrapper,
	ImageDividerBottom,
	ImageDividerTop,
} from "./contactSection.styled";
import { ContactSectionProps } from "./contactSection.types";
import { Container, Title, RichText, Form } from "../../single";
import { TwoColumns } from "../../templates";
import { AlignFlex } from "../../../enums";
import {
	GatsbyImage,
	getImage,
	IGatsbyImageData,
	StaticImage,
} from "gatsby-plugin-image";

export const ContactSection: React.FC<ContactSectionProps> = (
	props: ContactSectionProps
): JSX.Element => {
	const { className, data }: ContactSectionProps = props;
	const image: IGatsbyImageData | undefined = getImage(
		data.contactimage.localFile
	);

	return (
		<Component className={className} id={"kontakt"}>
			<ImageDividerTop>
				<StaticImage
					src={"../../../images/gallery-top.png"}
					alt={"hero image"}
				/>
			</ImageDividerTop>
			<BackgroundImageWrapper>
				{image && (
					<GatsbyImage
						image={image}
						alt={"contact section background image"}
						objectPosition={"50% 50%"}
					/>
				)}
			</BackgroundImageWrapper>
			<BackgroundWrapper />
			<Container>
				<Title text={data.contacttitle} level={2} />
				<TwoColumns
					leftColumn={
						<TextWrapper>
							<RichText content={data.contacttext} />
						</TextWrapper>
					}
					rightColumn={<Form />}
					options={{
						leftColumn: {
							align: AlignFlex.Top,
						},
					}}
				/>
			</Container>
			<ImageDividerBottom>
				<StaticImage
					src={"../../../images/gallery-bottom.png"}
					alt={"hero image"}
				/>
			</ImageDividerBottom>
		</Component>
	);
};
