import * as React from "react"
import styled from "styled-components"
import Box from "../../atoms/Box/Box"
import Button from "../../atoms/Button/Button"
import Container from "../../molecules/Container/Container"
import Heading from "../../atoms/Heading/Heading"
import ImagesGallery from "../../organisms/ImagesGallery/ImagesGallery"
import BgSVG from "../../../images/background-stripes-3.inline.svg"
import BgGreenSVG from "../../../images/teal-bg-4.inline.svg"
import BgGreenSVG2 from "../../../images/teal-bg-5.inline.svg"
import BgRedSVG from "../../../images/red-bg-4.inline.svg"
import BgRedSVG2 from "../../../images/red-bg-5.inline.svg"
import { Link } from "gatsby"
import { colors } from "../../colors"

const Component = styled(Box)`
  .gatsby-image-wrapper {
    margin: 0 auto;

    img {
      object-fit: contain !important;
    }
  }
`

const TopSVGBox = styled(Box)`
  svg {
    path {
      &:nth-child(1) {
        fill: ${props =>
          props.theme === "transgraniczny"
            ? colors.transgraniczny40
            : colors.niepodleglosci20};
      }
      &:nth-child(2) {
        fill: ${props =>
          props.theme === "transgraniczny"
            ? colors.transgraniczny80
            : colors.niepodleglosci40};
      }
      &:nth-child(3) {
        fill: ${props =>
          props.theme === "transgraniczny"
            ? colors.transgraniczny20
            : colors.niepodleglosci00};
      }
      &:nth-child(4) {
        fill: ${props =>
          props.theme === "transgraniczny"
            ? colors.transgraniczny60
            : colors.niepodleglosci60};
      }
      &:nth-child(5) {
        fill: ${props =>
          props.theme === "transgraniczny"
            ? colors.transgraniczny00
            : colors.niepodleglosci40};
      }
      &:nth-child(6) {
        fill: ${props =>
          props.theme === "transgraniczny"
            ? colors.transgraniczny20
            : colors.niepodleglosci60};
      }
    }
  }
`

const BottomSVGBox = styled(Box)`
  svg {
    path {
      &:nth-child(1) {
        fill: ${props =>
          props.theme === "transgraniczny"
            ? colors.transgraniczny20
            : colors.niepodleglosci80};
      }
      &:nth-child(2) {
        fill: ${props =>
          props.theme === "transgraniczny"
            ? colors.transgraniczny20
            : colors.niepodleglosci40};
      }
      &:nth-child(3) {
        fill: ${props =>
          props.theme === "transgraniczny"
            ? colors.transgraniczny00
            : colors.niepodleglosci60};
      }
      &:nth-child(4) {
        fill: ${props =>
          props.theme === "transgraniczny"
            ? colors.transgraniczny80
            : colors.niepodleglosci60};
      }
      &:nth-child(5) {
        fill: ${props =>
          props.theme === "transgraniczny"
            ? colors.transgraniczny00
            : colors.niepodleglosci20};
      }
      &:nth-child(6) {
        fill: ${props =>
          props.theme === "transgraniczny"
            ? colors.transgraniczny60
            : colors.niepodleglosci40};
      }
      &:nth-child(7) {
        fill: ${props =>
          props.theme === "transgraniczny"
            ? colors.transgraniczny00
            : colors.niepodleglosci40};
      }
    }
  }
`

const Gallery = ({ theme, display, images, imagesLink }) => (
  <Component
    id="galeria"
    display={display}
    width="100%"
    backgroundColor="grey95"
    padding="0 0 48px"
    paddingMD="120px 0"
    position="relative"
  >
    <Box
      justify="flex-end"
      widthMD="100%"
      width="70%"
      position="absolute"
      bottom="0"
      right="0"
    >
      <BgSVG />
    </Box>
    <TopSVGBox
      theme={theme}
      width="280px"
      widthSM="168px"
      position="absolute"
      top="30%"
      right="0"
      opacity="0.2"
      opacityMD="1"
    >
      {theme === "niepodleglosci" ? <BgRedSVG /> : <BgGreenSVG />}
    </TopSVGBox>
    <BottomSVGBox
      theme={theme}
      width="280px"
      widthSM="304px"
      position="absolute"
      bottom="0"
      left="0"
      opacity="0.2"
      opacityMD="1"
    >
      {theme === "niepodleglosci" ? <BgRedSVG2 /> : <BgGreenSVG2 />}
    </BottomSVGBox>
    <Container position="relative" zIndex="1">
      <Box column width="100%">
        <Box
          justify="space-between"
          align="center"
          gap="32px"
          width="100%"
          margin="0 0 24px"
        >
          <Heading
            size="h600"
            sizeMD="h700"
            sizeLG="h800"
            align="center"
            alignMD="left"
          >
            Galeria
          </Heading>
          <Button
            display="none"
            displayMD="flex"
            variant={theme + "Outline"}
            as={Link}
            to={imagesLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Zobacz wszystkie
          </Button>
        </Box>

        <Box column margin="0 0 40px" marginMD="0 0 80px">
          <ImagesGallery theme={theme} images={images} columns={3} />
        </Box>
        <Button
          displayMD="none"
          variant={theme + "Outline"}
          as={Link}
          to={imagesLink}
          target="_blank"
          rel="noopener noreferrer"
          margin="0 auto"
        >
          Zobacz wszystkie
        </Button>
      </Box>
    </Container>
  </Component>
)

export default Gallery
