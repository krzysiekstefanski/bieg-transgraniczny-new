import React from "react"
import {
  Component,
  BackgroundWrapper,
  Container,
  ContentWrapper,
  TextAreaWrapper,
  PageTitle,
  PageSubTitle,
  PageText,
  ShowMoreButton,
  MediaWrapper,
  SvgWrapper,
  ImageWrapper,
} from "./topSection.styled"
import { TopSectionProps } from "./topSection.types"
import BgSVG from "../../../images/background-stripes-1.inline.svg"
import { ButtonSize, EventTheme, TextAlign } from "../../../enums-gb"
import { GatsbyImage } from "gatsby-plugin-image"
import TopBgSvg from "../../../images/teal-top.inline.svg"
import TopBgRedSvg from "../../../images/red-top.inline.svg"

export const TopSection: React.FC<TopSectionProps> = (
  props: TopSectionProps
): JSX.Element => {
  const {
    className,
    data,
    theme = EventTheme.Transgraniczny,
  }: TopSectionProps = props

  return (
    <Component className={className} id={"gryfinobiega"}>
      <BackgroundWrapper>
        <BgSVG />
      </BackgroundWrapper>
      <Container>
        <ContentWrapper>
          <TextAreaWrapper>
            {data.herotitle && (
              <PageTitle
                text={data.herotitle}
                align={TextAlign.Left}
                eventTheme={theme}
                herosubtitle={!!data.herosubtitle}
              />
            )}
            {data.herosubtitle && (
              <PageSubTitle
                text={data.herosubtitle}
                level={2}
                align={TextAlign.Left}
              />
            )}
            {data.herotext && <PageText text={data.herotext} />}
            <ShowMoreButton
              label="Zobacz więcej"
              to="#"
              size={ButtonSize.Big}
              eventTheme={theme}
            />
          </TextAreaWrapper>
          <MediaWrapper>
            <SvgWrapper>
              {theme === EventTheme.Niepodleglosci ? (
                <TopBgRedSvg />
              ) : (
                <TopBgSvg />
              )}
            </SvgWrapper>
            <ImageWrapper $theme={theme}>
              <GatsbyImage
                image={data.heroimage.localFile.childImageSharp.gatsbyImageData}
                alt={`Zdjęcie Biegacza`}
                objectPosition={"50% 50%"}
                objectFit={"contain"}
              />
            </ImageWrapper>
          </MediaWrapper>
        </ContentWrapper>
      </Container>
    </Component>
  )
}
