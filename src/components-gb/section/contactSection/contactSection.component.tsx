import React from "react";

import {
	Component,
	Container,
	ContentInnerWrapper,
	ContentRow,
	ContentWrapper,
	DecorationWrapper,
	DecorationWrapperSeparator,
	DecorationWrapperTwo,
	InformationsWrapper,
	SectionTitle,
	TextWrapper,
} from "./contactSection.styled";
import { ContactSectionProps } from "./contactSection.types";
import { Button, Title, Text, Link } from "../../single";
import { GatsbyImage } from "gatsby-plugin-image";
import { ImagesGallery } from "../../parts";
import { EventTheme, TextAlign } from "../../../enums-gb";
import BgGreenSVG from "../../../images/teal-bg-2.inline.svg";
import BgGreenSVG2 from "../../../images/teal-bg-5.inline.svg";
import BgRedSVG from "../../../images/red-bg-2.inline.svg";
import BgRedSVG2 from "../../../images/red-bg-5.inline.svg";

export const ContactSection: React.FC<ContactSectionProps> = (
	props: ContactSectionProps
): JSX.Element => {
	const { className, data, theme }: ContactSectionProps = props;

	return (
		<Component id={"kontakt"} className={className}>
			<DecorationWrapper $theme={theme}>
				{theme === EventTheme.Niepodleglosci ? <BgRedSVG /> : <BgGreenSVG />}
			</DecorationWrapper>
			<Container>
				<ContentWrapper>
					<ContentInnerWrapper>
						<SectionTitle text={"Kontakt"} align={TextAlign.Left} />
						<InformationsWrapper>
							<ContentRow>
								<TextWrapper>
									<Text text={"Strony internetowe:"} />
									<Link
										text={"www.csir.gryfino.pl"}
										to={"https://www.csir.gryfino.pl"}
										blank
										eventTheme={theme}
									/>
									<Link
										text={"www.gryfinobiega.pl"}
										to={"/"}
										eventTheme={theme}
									/>
								</TextWrapper>
								<TextWrapper>
									<Text text={"Adres e-mail:"} />
									<Link
										text={"sport@csir.gryfino.pl"}
										to={"mailto: sport@csir.gryfino.pl"}
										eventTheme={theme}
									/>
								</TextWrapper>
							</ContentRow>
							<ContentRow>
								<TextWrapper>
									<Text text={"Telefon / Fax:"} />
									<Link
										text={"91 416 30 11"}
										to={"tel: 48914163011"}
										eventTheme={theme}
									/>
								</TextWrapper>
								<TextWrapper>
									<Text text={"Dyrektor biegu:"} />
									<Text text={"Jan Podleśny"} />
									<Link
										text={"601 205 951"}
										to={"tel: 601205951"}
										eventTheme={theme}
									/>
								</TextWrapper>
							</ContentRow>
						</InformationsWrapper>
					</ContentInnerWrapper>
				</ContentWrapper>
			</Container>
			<DecorationWrapperSeparator>
				<DecorationWrapperTwo $theme={theme}>
					{theme === EventTheme.Niepodleglosci ? (
						<BgRedSVG2 />
					) : (
						<BgGreenSVG2 />
					)}
				</DecorationWrapperTwo>
			</DecorationWrapperSeparator>
		</Component>
	);
};
