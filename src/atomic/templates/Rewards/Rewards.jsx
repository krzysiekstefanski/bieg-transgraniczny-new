import React from "react"
import styled from "styled-components"
import Box from "../../atoms/Box/Box"
import Container from "../../molecules/Container/Container"
import Heading from "../../atoms/Heading/Heading"
import Text from "../../atoms/Text/Text"
import BgGreenSVG from "../../../images/teal-bg-2.inline.svg"
import BgGreenSVG2 from "../../../images/teal-bg-3.inline.svg"
import BgRedSVG from "../../../images/red-bg-2.inline.svg"
import BgRedSVG2 from "../../../images/red-bg-3.inline.svg"
import ImagesGallery from "../../organisms/ImagesGallery/ImagesGallery"
import image1 from "../../../images/medal-1.png"
import image2 from "../../../images/medal-2.png"
import image3 from "../../../images/medal-3.png"
import image4 from "../../../images/medal-4.png"
import image5 from "../../../images/koszulka-przod.png"
import image6 from "../../../images/koszulka-tyl.png"

const Component = styled(Box)`
  .gatsby-image-wrapper {
    margin: 0 auto;

    img {
      object-fit: contain !important;
    }
  }
`
const images = [image1, image2, image3, image4]
const images2 = [image5, image6]

const Rewards = ({ className, theme, disabled }) => {
  return (
    <Component
      id="nagrody"
      className={className}
      display={disabled && "none"}
      width="100%"
      padding="0 0 48px"
      paddingMD="120px 0"
      position="relative"
    >
      <Box
        width="266px"
        position="absolute"
        top="0"
        right="0"
        zIndex="1"
        opacity="0.2"
        opacityMD="1"
      >
        {theme === "niepodleglosci" ? <BgRedSVG /> : <BgGreenSVG />}
      </Box>
      <Box
        width="202px"
        position="absolute"
        bottom="0"
        left="0"
        zIndex="1"
        opacity="0.2"
        opacityMD="1"
      >
        {theme === "niepodleglosci" ? <BgRedSVG2 /> : <BgGreenSVG2 />}
      </Box>
      <Container position="relative" zIndex="1">
        <Box column width="100%">
          <Box column>
            <Heading
              size="h600"
              sizeMD="h700"
              sizeLG="h800"
              align="center"
              alignMD="left"
              margin="0 0 24px"
            >
              Medale i koszulki
            </Heading>
            <Text
              size="contentL"
              max="1031px"
              margin="0 0 40px"
              marginMD="0 0 80px"
            >
              Trwają zgłoszenia do 6 edycji gryfińskiego Transgranicznego
              Festiwalu Biegowego. Przy okazji „pęknięcia” pierwszej setki
              zgłoszeń mamy okazję zaprezentować projekty medali i koszulki
              jakie otrzymają uczestnicy naszych zawodów. Nie trudno się
              domyśleć, że projekty nawiązują do aktualnej sytuacji w
              bezpośrednim sąsiedztwie naszego kraju obok których jakże ciężko
              przejść obojętnie.
            </Text>
          </Box>
          <Box column margin="0 0 40px" marginMD="0 0 80px">
            <Heading
              size="h600"
              align="center"
              alignMD="left"
              margin="0 0 24px"
            >
              Medale podczas 6. Gryfińskiego Transgranicznego Festiwalu
              Biegowego
            </Heading>
            <Box gap="24px" wrap="wrap">
              <Box grow="1" gap="24px" wrap="wrap">
                <ImagesGallery
                  images={images}
                  imagesOptions={{
                    borderWidth: "1px",
                    borderColor: "grey90",
                    padding: "34px",
                  }}
                  theme={theme}
                  columns={2}
                />
              </Box>
            </Box>
          </Box>
          <Box column>
            <Heading
              size="h600"
              align="center"
              alignMD="left"
              margin="0 0 24px"
            >
              Koszulka
            </Heading>
            <Box grow="1" gap="24px" wrap="wrap">
              <ImagesGallery
                images={images2}
                imagesOptions={{
                  borderWidth: "1px",
                  borderColor: "grey90",
                  padding: "34px",
                }}
                theme={theme}
                columns={2}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Component>
  )
}

export default Rewards
