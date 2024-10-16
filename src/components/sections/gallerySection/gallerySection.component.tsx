import React from "react";

import {
	Component,
	ImageDividerBottom,
	ImageDividerTop,
} from "./gallerySection.styled";
import { GallerySectionProps } from "./gallerySection.types";
import { Container, Title } from "../../single";
import { ImagesGallery } from "../../bundle";
import { StaticImage } from "gatsby-plugin-image";

export const GallerySection: React.FC<GallerySectionProps> = (
	props: GallerySectionProps
): JSX.Element => {
	const { className, data }: GallerySectionProps = props;

	return (
		<Component className={className} id={"galeria"}>
			<ImageDividerTop>
				<StaticImage
					src={"../../../images/gallery-top.png"}
					alt={"hero image"}
				/>
			</ImageDividerTop>
			<Container>
				<Title text={data.gallerytitle} level={2} />
				<ImagesGallery images={data.galleryimages} columns={3} />
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
