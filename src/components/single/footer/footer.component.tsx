import React from "react";

import { Component, Container, PartnerWrapper } from "./footer.styled";
import { FooterProps } from "./footer.types";
import { GatsbyImage } from "gatsby-plugin-image";

export const Footer: React.FC<FooterProps> = (
	props: FooterProps
): JSX.Element => {
	const { className, data, margin }: FooterProps = props;

	return (
		<Component $margin={margin}>
			<Container $columns={data.partnerslist.length}>
				{data.partnerslist.map((partner, index) => (
					<PartnerWrapper key={index} $height={partner.partnersheight}>
						<div
							style={{
								display: "flex",
								height: partner.partnersheight,
								padding: partner.partnerspadding,
							}}
						>
							<GatsbyImage
								image={
									partner.partnersimage.localFile.childImageSharp
										.gatsbyImageData
								}
								alt={"partner logo"}
								objectPosition={"50% 50%"}
								objectFit={"contain"}
							/>
						</div>
					</PartnerWrapper>
				))}
			</Container>
		</Component>
	);
};
