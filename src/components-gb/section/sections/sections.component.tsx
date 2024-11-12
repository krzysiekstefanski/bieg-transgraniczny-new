import React from "react"

import {
  Component,
  BackgroundWrapper,
  DecorationWrapper,
  Container,
  ContentWrapper,
  TitleWrapper,
  SectionTitle,
  TextWrapper,
  ImageWrapper,
  Section,
  DecorationWrapperTwo,
  DecorationWrapperThree,
} from "./sections.styled"
import { SectionsProps } from "./sections.types"
import { GatsbyImage } from "gatsby-plugin-image"
import { EventTheme, SectionColumns, TextAlign } from "../../../enums-gb"
import { RichText } from "../../single"
import BgSVG from "../../../images/background-stripes-2.inline.svg"
import BgRedSVG from "../../../images/red-bg-1.inline.svg"
import BgRedSVG2 from "../../../images/red-bg-2.inline.svg"
import BgRedSVG3 from "../../../images/red-bg-3.inline.svg"
import BgGreenSVG from "../../../images/teal-bg-1.inline.svg"
import BgGreenSVG2 from "../../../images/teal-bg-2.inline.svg"
import BgGreenSVG3 from "../../../images/teal-bg-3.inline.svg"
import { ImagesGallery } from "../../parts"

export const Sections: React.FC<SectionsProps> = (
  props: SectionsProps
): JSX.Element => {
  const { className, data, theme }: SectionsProps = props

  return (
    <Component id={"bieg"} className={className}>
      <BackgroundWrapper>
        <BgSVG />
      </BackgroundWrapper>
      <DecorationWrapper>
        {theme === EventTheme.Niepodleglosci ? <BgRedSVG /> : <BgGreenSVG />}
      </DecorationWrapper>
      {data.single.length > 1 && (
        <>
          <DecorationWrapperTwo>
            {theme === EventTheme.Niepodleglosci ? (
              <BgRedSVG2 />
            ) : (
              <BgGreenSVG2 />
            )}
          </DecorationWrapperTwo>
          <DecorationWrapperThree>
            {theme === EventTheme.Niepodleglosci ? (
              <BgRedSVG3 />
            ) : (
              <BgGreenSVG3 />
            )}
          </DecorationWrapperThree>
        </>
      )}
      {data?.single?.map(
        (section: any, index: number) =>
          !section.sectionconfig.sectiondisable && (
            <Section
              key={index}
              $background={section.sectionconfig.sectionframe}
            >
              <Container>
                <ContentWrapper
                  $columns={section.sectionconfig.sectioncolumns}
                  $frame={section.sectionconfig.sectionframe}
                  $width={section.sectionconfig.sectionwidth}
                >
                  {section.sectionfield?.map((item: any, index: number) =>
                    item.sectiontitleinput ? (
                      <TitleWrapper key={index}>
                        <SectionTitle
                          level={2}
                          text={item.sectiontitleinput}
                          eventTheme={theme}
                          align={TextAlign.Left}
                        />
                      </TitleWrapper>
                    ) : item.sectiontextinput ? (
                      <TextWrapper key={index}>
                        <RichText
                          content={item.sectiontextinput}
                          eventTheme={theme}
                        />
                      </TextWrapper>
                    ) : item.sectionimageinput ? (
                      <ImageWrapper key={index}>
                        <GatsbyImage
                          image={
                            item.sectionimageinput.localFile.childImageSharp
                              .gatsbyImageData
                          }
                          alt={""}
                          objectPosition={"50% 50%"}
                          style={{
                            maxWidth: "none",
                            width: "100%",
                            height: "auto",
                          }}
                        />
                      </ImageWrapper>
                    ) : item.sectiongalleryinput ? (
                      <ImageWrapper key={index}>
                        <ImagesGallery
                          images={item.sectiongalleryinput}
                          columns={
                            item.sectiongalleryinput.length < 3
                              ? item.sectiongalleryinput.length
                              : 3
                          }
                          eventTheme={theme}
                        />
                      </ImageWrapper>
                    ) : null
                  )}
                </ContentWrapper>
                {section?.sectionfield2 && (
                  <ContentWrapper
                    $columns={section.sectionconfig.sectioncolumns}
                    $frame={section.sectionconfig.sectionframe}
                    $width={section.sectionconfig.sectionwidth}
                  >
                    {section?.sectionfield2?.map((item: any, index: number) =>
                      item.sectiontitleinput2 ? (
                        <TitleWrapper key={index}>
                          <SectionTitle
                            level={2}
                            text={item.sectiontitleinput2}
                            eventTheme={theme}
                            align={TextAlign.Left}
                          />
                        </TitleWrapper>
                      ) : item.sectiontextinput2 ? (
                        <TextWrapper key={index}>
                          <RichText
                            content={item.sectiontextinput2}
                            eventTheme={theme}
                          />
                        </TextWrapper>
                      ) : item.sectionimageinput2 ? (
                        <ImageWrapper key={index}>
                          <GatsbyImage
                            image={
                              item.sectionimageinput2.localFile.childImageSharp
                                .gatsbyImageData
                            }
                            alt={""}
                            objectPosition={"50% 50%"}
                            style={{
                              maxWidth: "none",
                              width: "100%",
                              height: "auto",
                            }}
                          />
                        </ImageWrapper>
                      ) : item.sectiongalleryinput2 ? (
                        <ImageWrapper key={index}>
                          <ImagesGallery
                            images={item.sectiongalleryinput2}
                            columns={
                              item.sectiongalleryinput2.length < 3
                                ? item.sectiongalleryinput2.length
                                : 3
                            }
                            eventTheme={theme}
                          />
                        </ImageWrapper>
                      ) : null
                    )}
                  </ContentWrapper>
                )}
              </Container>
            </Section>
          )
      )}
    </Component>
  )
}
