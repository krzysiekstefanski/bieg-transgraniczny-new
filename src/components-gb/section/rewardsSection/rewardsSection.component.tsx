import React from "react"

import {
  Component,
  DecorationWrapper,
  Container,
  ContentWrapper,
  TextWrapper,
  ImageWrapper,
  RewardsTitle,
  DecorationWrapperTwo,
} from "./rewardsSection.styled"
import { RewardsSectionProps } from "./rewardsSection.types"
import { GatsbyImage } from "gatsby-plugin-image"
import { EventTheme, TextAlign } from "../../../enums-gb"
import { RichText, Title } from "../../single"
import BgGreenSVG from "../../../images/teal-bg-2.inline.svg"
import BgGreenSVG2 from "../../../images/teal-bg-3.inline.svg"
import BgRedSVG from "../../../images/red-bg-2.inline.svg"
import BgRedSVG2 from "../../../images/red-bg-3.inline.svg"
import { ImagesGallery } from "../../parts"

export const RewardsSection: React.FC<RewardsSectionProps> = (
  props: RewardsSectionProps
): JSX.Element => {
  const { className, data, theme }: RewardsSectionProps = props
  const {
    rewardsdisabled: disabled,
    rewardstitle: title,
    rewardstext: text,
    rewardsimages: images,
  } = data

  return (
    <Component id={"nagrody"} className={className} $disabled={disabled}>
      <DecorationWrapper $theme={theme}>
        {theme === EventTheme.Niepodleglosci ? <BgRedSVG /> : <BgGreenSVG />}
      </DecorationWrapper>
      <DecorationWrapperTwo $theme={theme}>
        {theme === EventTheme.Niepodleglosci ? <BgRedSVG2 /> : <BgGreenSVG2 />}
      </DecorationWrapperTwo>
      <Container>
        <ContentWrapper>
          {(!!title || !!text) && (
            <TextWrapper>
              {!!title && (
                <RewardsTitle level={2} text={title} align={TextAlign.Left} />
              )}
              {text && <RichText content={text} eventTheme={theme} />}
            </TextWrapper>
          )}
          {!!images && (
            <ImageWrapper>
              <ImagesGallery
                images={images}
                eventTheme={theme}
                columns={images.length}
                isImageContain
              />
            </ImageWrapper>
          )}
        </ContentWrapper>
      </Container>
    </Component>
  )
}
