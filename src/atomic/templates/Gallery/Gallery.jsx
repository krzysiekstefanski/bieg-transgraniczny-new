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

import gallery1 from "../../../images/gallery/gallery-1.jpg"
import gallery2 from "../../../images/gallery/gallery-2.jpg"
import gallery3 from "../../../images/gallery/gallery-3.jpg"
import gallery4 from "../../../images/gallery/gallery-4.jpg"
import gallery5 from "../../../images/gallery/gallery-5.jpg"
import gallery6 from "../../../images/gallery/gallery-6.jpg"
import gallery7 from "../../../images/gallery/gallery-7.jpg"
import gallery8 from "../../../images/gallery/gallery-8.jpg"
import gallery9 from "../../../images/gallery/gallery-9.jpg"

const Component = styled(Box)`
  .gatsby-image-wrapper {
    margin: 0 auto;

    img {
      object-fit: contain !important;
    }
  }
`

const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
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
            to="https://photos.google.com/share/AF1QipM_jT8XNGzhKcYSYGZvk3dfc83i00YO0XsAySHD2Vx0cEO0h4Fp2Q710oVhiXN2HA?key=ekxncGF4UG1BWU8ydG80X0xXN0VCUXhraHZnYUV3"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zobacz wszystkie
          </Button>
        </Box>

        <Box column margin="0 0 40px" marginMD="0 0 80px">
          <ImagesGallery theme={theme} images={images} />
        </Box>
        <Button
          displayMD="none"
          variant={theme + "Outline"}
          as={Link}
          to="https://photos.google.com/share/AF1QipM_jT8XNGzhKcYSYGZvk3dfc83i00YO0XsAySHD2Vx0cEO0h4Fp2Q710oVhiXN2HA?key=ekxncGF4UG1BWU8ydG80X0xXN0VCUXhraHZnYUV3"
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
