import React, { useRef, useEffect, useState } from "react";
import WebViewer from "@pdftron/pdfjs-express-viewer";
import {
	Component,
	Wrapper,
	ImageDividerTop,
	ImageWrapper,
	ImageOverlay,
	LogoWrapper,
	LogoOverlay,
	ImageDividerBottom,
	ContentContainer,
	ContentWrapper,
	ContentBackgroundWrapper,
	TextWrapper,
	Button,
} from "./topSection.styled";
import { TopSectionProps } from "./topSection.types";
import {
	GatsbyImage,
	getImage,
	IGatsbyImageData,
	StaticImage,
} from "gatsby-plugin-image";
import scrollTo from "gatsby-plugin-smoothscroll";
import { Icon, RichText } from "../../single";

export const TopSection: React.FC<TopSectionProps> = (
	props: TopSectionProps
): JSX.Element => {
	const { className }: TopSectionProps = props;
	const viewer = useRef(null);
	const [pdf, setPdf] = useState(undefined);
	const [instance, setInstance] = useState(null);

	useEffect(() => {
		if (!instance) {
			WebViewer(
				{
					path: "/webviewer/lib",
					initialDoc: "/pdf/regulamin-bieg-niepodleglosci-2024.pdf",
					licenseKey: "5MH0z4wBBOEfB48yb31C",
					css: "/webviewer/style.css",
				},
				viewer.current
			).then((instance) => {
				setInstance(instance);
				instance.UI.setLanguage("pl");
				instance.UI.disableElements(["ribbons"]);
			});
		}
	});

	useEffect(() => {
		if (instance && pdf) {
			instance.loadDocument(`/pdf/${pdf}.pdf`);
		}
	}, [pdf, instance]);

	return (
		<Component className={className} id={"hero"}>
			<Wrapper>
				aaa
				<div className='webviewer' ref={viewer} style={{ width: "100%" }}></div>
			</Wrapper>
		</Component>
	);
};
