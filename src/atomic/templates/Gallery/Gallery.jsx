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

const Component = styled(Box)`
  .gatsby-image-wrapper {
    margin: 0 auto;

    img {
      object-fit: contain !important;
    }
  }
`

const images = [
  "gallery-1",
  "gallery-2",
  "gallery-3",
  "gallery-4",
  "gallery-5",
  "gallery-6",
  "gallery-7",
  "gallery-8",
  "gallery-9",
]

const Gallery = ({ theme }) => (
  <Component
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
    <Box
      width="280px"
      widthSM="168px"
      position="absolute"
      top="30%"
      right="0"
      opacity="0.2"
      opacityMD="1"
    >
      {theme === "niepodleglosci" ? <BgRedSVG /> : <BgGreenSVG />}
    </Box>
    <Box
      width="280px"
      widthSM="304px"
      position="absolute"
      bottom="0"
      left="0"
      opacity="0.2"
      opacityMD="1"
    >
      {theme === "niepodleglosci" ? <BgRedSVG2 /> : <BgGreenSVG2 />}
    </Box>
    <Container position="relative" zIndex="1">
      <Box column width="100%">
        <Box justify="space-between" align="center" gap="32px" width="100%">
          <Heading
            size="h600"
            sizeMD="h700"
            sizeLG="h800"
            align="center"
            alignMD="left"
            margin="0 0 24px"
          >
            Galeria
          </Heading>
          <Button variant={theme + "Outline"} as={Link} to="./kontakt">
            Zobacz wszystkie
          </Button>
        </Box>

        <Box column margin="0 0 40px" marginMD="0 0 80px">
          <ImagesGallery theme={theme} images={images} />
        </Box>
      </Box>
    </Container>
  </Component>
)

export default Gallery
