import styled from "styled-components"

import { StyledComponent } from "../../../interfaces"
import { Breakpoint, Color, EventTheme } from "../../../enums-gb"
import { Button, Title, Text } from "../../single"
import { ImageWrapperProps, PageTitleProps } from "./topSection.types"

export const Component: StyledComponent<"section"> = styled.section`
  display: flex;
  background-color: ${Color.Grey95};
  position: relative;
  padding: 0 0 48px;

  @media ${Breakpoint.Medium} {
    padding: 0;
  }
`

export const BackgroundWrapper: StyledComponent<"div"> = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;

  @media ${Breakpoint.Medium} {
    width: 80%;
  }
`

export const Container: StyledComponent<"div"> = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1272px;
  padding: 0 16px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`

export const ContentWrapper: StyledComponent<"div"> = styled.div`
  display: flex;
  width: 100%;
  gap: 48px;

  @media ${Breakpoint.Large} {
    gap: 100px;
  }
`

export const TextAreaWrapper: StyledComponent<"div"> = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 32px 0 0;

  @media ${Breakpoint.Medium} {
    max-width: 42%;
    padding: 88px 0 0;
  }

  @media ${Breakpoint.Large} {
    max-width: 540px;
  }
`

export const PageTitle: StyledComponent<typeof Title, PageTitleProps> = styled(
  Title
)<PageTitleProps>`
  font-size: 32px;
  line-height: 48px;
  margin: ${({ herosubtitle }: PageTitleProps): string =>
    herosubtitle ? "0" : "0 0 24px"};

  @media ${Breakpoint.Medium} {
    margin: ${({ herosubtitle }: PageTitleProps): string =>
      herosubtitle ? "0" : "0 0 32px"};
  }

  @media ${Breakpoint.Large} {
    font-size: 48px;
    line-height: 64px;
  }

  @media ${Breakpoint.ExtraLarge} {
    font-size: 56px;
    line-height: 72px;
  }
`

export const PageSubTitle: StyledComponent<typeof Title> = styled(Title)`
  display: flex;
  margin-bottom: 24px;

  @media ${Breakpoint.Medium} {
    margin-bottom: 32px;
  }
`

export const PageText: StyledComponent<typeof Text> = styled(Text)`
  margin-bottom: 24px;

  @media ${Breakpoint.Medium} {
    margin-bottom: 80px;
  }
`

export const ShowMoreButton: StyledComponent<typeof Button> = styled(Button)`
  margin-left: 0;

  @media ${Breakpoint.Small} {
    margin-right: auto;
  }
`

export const MediaWrapper: StyledComponent<"div"> = styled.div`
  display: none;
  max-height: 480px;
  width: 100%;
  max-width: 60%;
  position: relative;

  @media ${Breakpoint.Medium} {
    display: flex;
  }

  @media ${Breakpoint.Large} {
    max-height: none;
  }
`

export const SvgWrapper: StyledComponent<"div"> = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const ImageWrapper: StyledComponent<
  "div",
  ImageWrapperProps
> = styled.div<ImageWrapperProps>`
  display: flex;
  max-height: 480px;
  width: 111.8%;
  padding: ${({ $theme }: ImageWrapperProps): string =>
    $theme === EventTheme.Niepodleglosci ? "8px 0 0" : "56px 0 0"};
  position: absolute;
  top: 0;
  right: 0;

  @media ${Breakpoint.Large} {
    max-height: none;
  }
`
