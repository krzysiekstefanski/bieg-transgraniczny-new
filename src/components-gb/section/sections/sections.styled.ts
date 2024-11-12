import styled from "styled-components"

import { StyledComponent } from "../../../interfaces"
import { Breakpoint, Color, SectionWidth, Shadow } from "../../../enums-gb"
import { ContentWrapperProps, SectionProps } from "./sections.types"
import { Title } from "../../single"

export const Component: StyledComponent<"div"> = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  position: relative;
  padding-bottom: 48px;

  @media ${Breakpoint.Medium} {
    padding-bottom: 120px;
  }
`

export const BackgroundWrapper: StyledComponent<"div"> = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  top: 0;
  left: -50px;

  @media ${Breakpoint.ExtraLarge} {
    width: 80%;
  }
`

export const DecorationWrapper: StyledComponent<"div"> = styled.div`
  display: flex;
  width: 70px;
  opacity: 0.2;
  position: absolute;
  top: 90px;
  left: 0;
  z-index: 1;

  @media ${Breakpoint.Small} {
    width: 140px;
  }

  @media ${Breakpoint.Medium} {
    width: 200px;
    opacity: 1;
  }
`

export const DecorationWrapperTwo: StyledComponent<"div"> = styled.div`
  display: flex;
  width: 120px;
  position: absolute;
  bottom: 15%;
  right: 0;
  z-index: 1;
  opacity: 0.2;

  @media ${Breakpoint.Small} {
    width: 180px;
  }

  @media ${Breakpoint.Medium} {
    width: 260px;
    opacity: 1;
  }
`

export const DecorationWrapperThree: StyledComponent<"div"> = styled.div`
  display: flex;
  width: 70px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  opacity: 0.2;

  @media ${Breakpoint.Small} {
    width: 140px;
  }

  @media ${Breakpoint.Medium} {
    width: 200px;
    opacity: 1;
  }
`

export const Section: StyledComponent<
  "section",
  SectionProps
> = styled.section<SectionProps>`
  display: block;
  background-color: ${({ $background }: SectionProps): string =>
    $background ? Color.Grey95 : Color.Transparent};
  padding: 48px 0;

  @media ${Breakpoint.Medium} {
    padding: 60px 0;
  }

  &:first-of-type {
    padding-top: 0;
  }

  &:last-of-type {
    padding-bottom: 0;
  }
`

export const Container: StyledComponent<"div"> = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  max-width: 1272px;
  padding: 0 16px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`

export const ContentWrapper: StyledComponent<
  "div",
  ContentWrapperProps
> = styled.div<ContentWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: ${({ $width }: ContentWrapperProps): string =>
    $width === SectionWidth.Narrowed ? "1030px" : "none"};
  border-radius: 8px;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  @media ${Breakpoint.Medium} {
    background-color: ${({ $frame }: ContentWrapperProps): string =>
      $frame ? Color.White : Color.Transparent};
    box-shadow: ${({ $frame }: ContentWrapperProps): string =>
      $frame ? Shadow.Medium : "none"};
    padding: ${({ $frame }: ContentWrapperProps): string =>
      $frame ? "40px" : "0"};
  }

  & > div:last-child {
    padding-bottom: 0;
  }
`

export const TitleWrapper: StyledComponent<"div"> = styled.div`
  width: 100%;
  padding-bottom: 8px;

  @media ${Breakpoint.Medium} {
    padding-bottom: 16px;
  }
`
export const SectionTitle: StyledComponent<typeof Title> = styled(Title)`
  @media ${Breakpoint.Large} {
    font-size: 32px;
    line-height: 48px;
  }
`

export const TextWrapper: StyledComponent<"div"> = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  padding-bottom: 16px;

  @media ${Breakpoint.Small} {
    padding-bottom: 32px;
  }

  @media ${Breakpoint.Medium} {
    gap: 16px;
    padding-bottom: 56px;
  }
`

export const ImageWrapper: StyledComponent<"div"> = styled.div`
  display: block;
  width: 100%;
  padding-bottom: 16px;

  @media ${Breakpoint.Small} {
    padding-bottom: 32px;
  }

  @media ${Breakpoint.Medium} {
    padding-bottom: 56px;
  }

  .gatsby-image-wrapper > div:first-child {
    max-width: none !important;
  }
`

export const DecorationWrapper3: StyledComponent<"div"> = styled.div`
  display: flex;
`
