import styled from "styled-components"

import { StyledComponent } from "../../../interfaces"
import { Breakpoint, Color, Shadow } from "../../../enums-gb"
import { ComponentProps } from "./gallerySection.types"
import { Button, Title } from "../../single"

export const Component: StyledComponent<
  "section",
  ComponentProps
> = styled.section<ComponentProps>`
  display: ${({ $disabled }: ComponentProps): string =>
    $disabled ? "none" : "flex"};
  width: 100%;
  background-color: ${Color.Grey95};
  padding: 48px 0;
  position: relative;

  @media ${Breakpoint.Medium} {
    padding: 120px 0;
  }
`

export const BackgroundWrapper: StyledComponent<"div"> = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 70%;
  position: absolute;
  bottom: 0;
  right: 0;

  @media ${Breakpoint.Medium} {
    width: 100%;
  }
`

export const DecorationWrapper: StyledComponent<"div"> = styled.div`
  display: flex;
  width: 280px;
  position: absolute;
  top: 30%;
  right: 0;
  opacity: 0.2;

  @media ${Breakpoint.Small} {
    width: 168px;
  }

  @media ${Breakpoint.Medium} {
    opacity: 1;
  }
`

export const DecorationWrapperTwo: StyledComponent<"div"> = styled.div`
  display: flex;
  width: 280px;
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0.2;

  @media ${Breakpoint.Small} {
    width: 304px;
  }

  @media ${Breakpoint.Medium} {
    opacity: 1;
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
  flex-direction: column;
  width: 100%;
`

export const LinkWrapper: StyledComponent<"div"> = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  width: 100%;
  margin: 0 0 24px;
`

export const GalleryTitle: StyledComponent<typeof Title> = styled(Title)`
  @media ${Breakpoint.Large} {
    font-size: 32px;
    line-height: 48px;
  }
`

export const GalleryWrapper: StyledComponent<"div"> = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 40px;

  @media ${Breakpoint.Medium} {
    margin: 0 0 80px;
  }
`

export const TopButton: StyledComponent<typeof Button> = styled(Button)`
  display: none;

  @media ${Breakpoint.Medium} {
    display: flex;
  }
`

export const BottomButton: StyledComponent<typeof Button> = styled(Button)`
  margin-right: 0;

  @media ${Breakpoint.Small} {
    margin-left: auto;
  }

  @media ${Breakpoint.Medium} {
    display: none;
  }
`
