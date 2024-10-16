import React from "react";

import {
	Component,
	BackgroundWrapper,
	Container,
	ContentWrapper,
	GalleryWrapper,
	LinkWrapper,
	DecorationWrapper,
	DecorationWrapperTwo,
	TopButton,
	BottomButton,
	GalleryTitle,
} from "./gallerySection.styled";
import { GallerySectionProps } from "./gallerySection.types";
import { Button, Title, RichText } from "../../single";
import { GatsbyImage } from "gatsby-plugin-image";
import { ImagesGallery } from "../../parts";
import BgSVG from "../../../images/background-stripes-3.inline.svg";
import BgGreenSVG from "../../../images/teal-bg-4.inline.svg";
import BgGreenSVG2 from "../../../images/teal-bg-5.inline.svg";
import BgRedSVG from "../../../images/red-bg-4.inline.svg";
import BgRedSVG2 from "../../../images/red-bg-5.inline.svg";
import { ButtonVariant, EventTheme } from "../../../enums-gb";

export const GallerySection: React.FC<GallerySectionProps> = (
	props: GallerySectionProps
): JSX.Element => {
	const {
		className,
		data,
		theme,
		disabled = false,
	}: GallerySectionProps = props;
	const {
		galleryimages: images,
		gallerytitle: title,
		gallerylinktoall: linktoall,
	} = data;

	return (
		<Component id={"galeria"} className={className} $disabled={disabled}>
			<BackgroundWrapper>
				<BgSVG />
			</BackgroundWrapper>
			<DecorationWrapper $theme={theme}>
				{theme === EventTheme.Niepodleglosci ? <BgRedSVG /> : <BgGreenSVG />}
			</DecorationWrapper>
			<DecorationWrapperTwo $theme={theme}>
				{theme === EventTheme.Niepodleglosci ? <BgRedSVG2 /> : <BgGreenSVG2 />}
			</DecorationWrapperTwo>
			<Container>
				<ContentWrapper>
					<LinkWrapper>
						<GalleryTitle level={2} text={title} />
						<TopButton
							label={"Zobacz wszystkie"}
							eventTheme={theme}
							variant={ButtonVariant.Secondary}
							to={linktoall}
							blank
						/>
					</LinkWrapper>
					<GalleryWrapper>
						<ImagesGallery images={images} columns={3} eventTheme={theme} />
					</GalleryWrapper>
					<BottomButton
						label={"Zobacz wszystkie"}
						eventTheme={theme}
						variant={ButtonVariant.Secondary}
						to={linktoall}
						blank
					/>
				</ContentWrapper>
			</Container>
		</Component>
	);
};
