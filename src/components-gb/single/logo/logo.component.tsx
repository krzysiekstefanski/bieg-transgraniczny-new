import React from "react";

import { Component, LogoWrapper } from "./logo.styled";
import { LogoProps } from "./logo.types";
import { GatsbyImage } from "gatsby-plugin-image";

export const Logo: React.FC<LogoProps> = (props: LogoProps): JSX.Element => {
	const { className, logo }: LogoProps = props;

	return (
		<Component className={className}>
			<LogoWrapper>
				<GatsbyImage
					image={logo?.logophoto.localFile.childImageSharp.gatsbyImageData}
					alt={`Zdjęcie Biegacza`}
					objectPosition={"50% 50%"}
				/>
			</LogoWrapper>
		</Component>
	);
};
