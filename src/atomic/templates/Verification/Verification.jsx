import * as React from "react"
import styled from "styled-components"
import Box from "../../atoms/Box/Box"
import Container from "../../molecules/Container/Container"
import Heading from "../../atoms/Heading/Heading"
import Text from "../../atoms/Text/Text"
import List from "../../atoms/List/List"
import ListItem from "../../atoms/ListItem/ListItem"
import ImagesGallery from "../../organisms/ImagesGallery/ImagesGallery"
import image1 from "../../../images/transgraniczny-mapa-p.png"

const Component = styled(Box)`
  .gatsby-image-wrapper {
    margin: 0 auto;

    img {
      object-fit: contain !important;
    }
  }
`
const images = [image1]

const Verification = ({ theme, display }) => (
  <Component
    id="weryfikacja"
    display={display}
    width="100%"
    backgroundColor="grey95"
    padding="48px 0"
    //paddingMD="0 0 120px"
    paddingMD="120px 0 0"
  >
    <Container position="relative" zIndex="1">
      <Box column directionMD="row" width="100%" gap="24px">
        <Box column widthMD="calc(50% - 12px)">
          <Heading
            size="h600"
            sizeMD="h700"
            sizeLG="h800"
            align="center"
            alignMD="left"
            margin="0 0 24px"
          >
            Weryfikacja uczestników
          </Heading>
          <Text size="contentL" margin="0 0 24px" marginMD="0 0 40px">
            Przypominamy, że weryfikacja do biegu odbywać się będzie w Liceum
            Ogólnokształcącym ul. Niepodległości.
          </Text>
          <Text weight="700" margin="0 0 4px">
            Z regulaminu:
          </Text>
          <Text margin="0 0 8px">
            „W celu weryfikacji każdy zawodnik musi zgłosić się osobiście w
            biurze zawodów (nie ma możliwości odebrania pakietu startowego w
            imieniu innej osoby), w budynku I Liceum Ogólnokształcącego w
            Gryfinie, ul. Niepodległości 16 (400 m od miejsca startu)
          </Text>
          <List>
            <ListItem variant={theme}>
              W przeddzień zawodów - 2.05.2024 r. w godz. 16:30 – 19:00
            </ListItem>
            <ListItem variant={theme}>
              W dniu zawodów - 3.05.2024 r. od godz. 8:30 – 11:00
            </ListItem>
            <ListItem variant={theme}>
              Zawodnicy powyżej 18 roku życia podpisują oświadczenie o biegu na
              własną odpowiedzialność.”
            </ListItem>
          </List>
        </Box>
        <Box widthMD="calc(50% - 12px)" align="center">
          <div style={{ width: "100%" }}>
            <ImagesGallery
              images={images}
              theme={theme}
              imagesOptions={{ imageFit: "cover" }}
            />
          </div>
        </Box>
      </Box>
    </Container>
  </Component>
)

export default Verification
