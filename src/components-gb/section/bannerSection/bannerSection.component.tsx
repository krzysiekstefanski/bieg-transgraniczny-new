import React from "react"

import {
  Component,
  BackgroundWrapper,
  DecorationWrapper,
  Container,
  ContentWrapper,
  TextWrapper,
  ImageWrapper,
} from "./bannerSection.styled"
import { BannerSectionProps } from "./bannerSection.types"
import { GatsbyImage } from "gatsby-plugin-image"
import { EventTheme } from "../../../enums-gb"
import { RichText } from "../../single"
import BgSVG from "../../../images/background-stripes-2.inline.svg"
import BgRedSVG from "../../../images/red-bg-1.inline.svg"
import BgGreenSVG from "../../../images/teal-bg-1.inline.svg"
import { ImagesGallery } from "../../parts"

export const BannerSection: React.FC<BannerSectionProps> = (
  props: BannerSectionProps
): JSX.Element => {
  const { className, data, theme, disabled = false }: BannerSectionProps = props
  const { bannertext: text, bannerimage: image } = data

  return (
    <Component id={"bieg"} className={className} $disabled={disabled}>
      <BackgroundWrapper>
        <BgSVG />
      </BackgroundWrapper>
      <DecorationWrapper $theme={theme}>
        {theme === EventTheme.Niepodleglosci ? <BgRedSVG /> : <BgGreenSVG />}
      </DecorationWrapper>
      <Container>
        <ContentWrapper>
          {theme === EventTheme.Niepodleglosci && (
            <GatsbyImage
              image={image.localFile.childrenImageSharp[0].gatsbyImageData}
              alt={`Zdjęcie Biegacza`}
              objectPosition={"50% 50%"}
            />
          )}
          <TextWrapper>
            <RichText content={text} eventTheme={theme} />
          </TextWrapper>
          {theme === EventTheme.Transgraniczny && (
            <ImageWrapper>
              <ImagesGallery images={[image]} eventTheme={theme} columns={1} />
            </ImageWrapper>
          )}
        </ContentWrapper>
      </Container>
    </Component>
  )
}
