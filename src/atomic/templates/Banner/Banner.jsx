import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import styled from "styled-components"
import Box from "../../atoms/Box/Box"
import Container from "../../molecules/Container/Container"
import Text from "../../atoms/Text/Text"
import LinkInternal from "../../atoms/Link/Link"
import Button from "../../atoms/Button/Button"
import BgSVG from "../../../images/background-stripes-2.inline.svg"
import BgGreenSVG from "../../../images/teal-bg-1.inline.svg"
import BgRedSVG from "../../../images/red-bg-1.inline.svg"
import { colors } from "../../colors"
import CustomLink from "../../atoms/Link/Link"
import ImagesGallery from "../../organisms/ImagesGallery/ImagesGallery"

import image1 from "../../../images/05f3bffe-f0d1-4cbb-b294-8c84c1499cb3.jpg"
import image2 from "../../../images/0a891bfe-c147-44bb-bf09-586d1ef65886.jpg"

const Component = styled(Box)`
  .gatsby-image-wrapper {
    max-width: 756px;
    margin: 0 auto;

    img {
      object-fit: contain !important;
    }
  }
`

const BoxSVG = styled(Box)`
  svg {
    path {
      &:nth-child(1) {
        fill: ${props => props.theme === 'transgraniczny' ? colors.transgraniczny40 : colors.niepodleglosci80};
      }
      &:nth-child(2) {
        fill: ${props => props.theme === 'transgraniczny' ? colors.transgraniczny60 : colors.niepodleglosci60};
      }
      &:nth-child(3) {
        fill: ${props => props.theme === 'transgraniczny' ? colors.transgraniczny20 : colors.niepodleglosci60};
      }
      &:nth-child(4) {
        fill: ${props => props.theme === 'transgraniczny' ? colors.transgraniczny00 : colors.niepodleglosci60};
      }
      &:nth-child(5) {
        fill: ${props => props.theme === 'transgraniczny' ? colors.transgraniczny20 : colors.niepodleglosci20};
      }
      &:nth-child(6) {
        fill: ${props => props.theme === 'transgraniczny' ? colors.transgraniczny60 : colors.niepodleglosci00};
      }
    }
  }
`;

const images = [
  image1,
  image2,
];

const Banner = ({ theme }) => (
  <Component
    id="bieg"
    width="100%"
    backgroundColor="grey95"
    padding="0"
    position="relative"
  >
    <Box width="100%" widthXL="80%" position="absolute" top="0" left="-50px">
      <BgSVG />
    </Box>
    <BoxSVG
      theme={theme}
      width="201px"
      position="absolute"
      bottom="-20px"
      left="0"
      zIndex="1"
      opacity="0.2"
      opacityMD="1"
    >
      {theme === "niepodleglosci" ? <BgRedSVG /> : <BgGreenSVG />}
    </BoxSVG>
    <Container position="relative" zIndex="1">
      <Box
        column
        align="center"
        width="100%"
        max="1030px"
        backgroundColor="white"
        radius="8px"
        shadowMD="md"
        paddingMD="40px"
        margin="0 auto"
        position="relative"
        zIndex="1"
      >
        {theme === "niepodleglosci" && (
          <StaticImage src="../../../images/bieg-niepodleglosci.jpg" />
        )}
        {/* <Box column width="100%" max="664px" margin="32px 0 24px"> */}
        <Box column width="100%" max="756px" margin="0 0 40px">
          {/* <Text
            size="contentM"
            align="center"
            margin="0 0 16px"
            marginMD="0 0 32px"
          >
            Na chętnych czekać będą dwie trasy biegowe - 10 km i 21,097 km, obie
            z atestem. Razem z biegaczami na 10 kilometrową trasę wyruszą
            zawodnicy Nordic Walking.
          </Text>
          <Text
            size="contentM"
            align="center"
            margin="0 0 16px"
            marginMD="0 0 32px"
          >
            Zapisy rozpoczynamy w środę 1 marca i do końca marca startowe 90 zł
            a potem opłata rośnie.
          </Text>
          <Text size="contentM" align="center">
            Zanim się zapiszecie koniecznie przeczytajcie{" "}
            <LinkInternal variant={theme} to={`/bieg${theme}/regulamin`}>
              regulamin
            </LinkInternal>
            .
          </Text> */}
          {theme === "niepodleglosci" ? (
            <Box column gap="16px">
              <Button as={Link} to={`/bieg${theme}/lista-startowa`} variant={theme}>Lista Startowa</Button>
              <Button as={Link} to={`/bieg${theme}/wyniki`} variant={theme}>Wyniki</Button>
              <Button as={Link} to={`https://photos.google.com/share/AF1QipPQQJTcSPJ4vxZxL3ILmgmSPSSFC0JKNcVVoc-byitoS_pDI8SYEJiRqBBzq7l8ig?key=U2V1anhDTGNpV280NHEwU2otNnh3Ym9EdldHNU1n`} variant={theme}>Zdjęcia</Button>
              <Button as={Link} to={`/bieg${theme}/regulamin`} variant={theme}>Regulamin</Button>
            </Box>
          ) : (
            <>
              <Text
                size="contentM"
                margin="0 0 8px"
                marginMD="0 0 16px"
              >
                31 marca zakończy się 1 termin zapisów na nasz Festiwal. Jednak realnie, jeżeli zarejestrowany uczestnik nie opłacił startowego do piątku 29 marca to nie ma szansy na zaksięgowanie opłaty na koncie organizatora (Święta). Wchodzimy więc w II termin a to wiąże się wyższymi kosztami i mamy nadzieję, że 10 zł więcej i będzie stanowić dla Was przeszkody do rejestracji (regulamin).
              </Text>
              <Text>
                Dla zachęty prezentujemy świeże projekty ładnego medalu i koszulki. Zastrzegamy sobie że w produkcie końcowym mogą być drobne różnice.
              </Text>
            </>
          )}
        </Box>
        {/* <Button as={Link} to={`/bieg${theme}/zapisy`} variant={theme}> */}
        {theme === "transgraniczny" && (
          <Box display="block" width="100%">
            <ImagesGallery images={images} theme={theme} columns={2} />
          </Box>
        )}
      </Box>
    </Container>
  </Component>
)

export default Banner
