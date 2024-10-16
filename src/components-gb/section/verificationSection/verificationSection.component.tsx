import React from "react";

import {
	Component,
	Container,
	ContentWrapper,
	TextWrapper,
	ImageWrapper,
	ImageInnerWrapper,
	VeryficationTitle,
} from "./verificationSection.styled";
import { VerificationSectionProps } from "./verificationSection.types";
import { Button, Title, RichText } from "../../single";
import { GatsbyImage } from "gatsby-plugin-image";
import { ImagesGallery } from "../../parts";
import { TextAlign } from "../../../enums-gb";

export const VerificationSection: React.FC<VerificationSectionProps> = (
	props: VerificationSectionProps
): JSX.Element => {
	const { className, data, theme }: VerificationSectionProps = props;
	const {
		verificationdisabled: disabled,
		verificationtitle: title,
		verificationtext: text,
		verificationimage: image,
	} = data;

	return (
		<Component id={"weryfikacja"} className={className} $disabled={disabled}>
			<Container>
				<ContentWrapper>
					{(!!title || !!text) && (
						<TextWrapper $isImageEnabled={image}>
							{!!title && (
								<VeryficationTitle
									level={2}
									text={title}
									eventTheme={theme}
									align={TextAlign.Left}
								/>
							)}
							{text && <RichText content={text} />}
						</TextWrapper>
					)}
					{!!image && (
						<ImageWrapper $isTextEnabled={!!title || !!text}>
							<ImageInnerWrapper>
								<ImagesGallery
									images={[image]}
									columns={1}
									eventTheme={theme}
								/>
							</ImageInnerWrapper>
						</ImageWrapper>
					)}
				</ContentWrapper>
			</Container>
		</Component>
	);
};
