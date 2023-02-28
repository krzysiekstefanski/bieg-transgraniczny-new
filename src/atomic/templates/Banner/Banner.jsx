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

const Component = styled(Box)`
  .gatsby-image-wrapper {
    max-width: 756px;
    margin: 0 auto;

    img {
      object-fit: contain !important;
    }
  }
`

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
    <Box
      width="201px"
      position="absolute"
      bottom="-20px"
      left="0"
      zIndex="1"
      opacity="0.2"
      opacityMD="1"
    >
      {theme === "niepodleglosci" ? <BgRedSVG /> : <BgGreenSVG />}
    </Box>
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
        {theme === "niepodleglosci" ? (
          <StaticImage src="../../../images/bieg-niepodleglosci.jpg" />
        ) : (
          <StaticImage src="../../../images/logobaner_transgr.2023.jpg" />
        )}
        <Box column width="100%" max="664px" margin="32px 0 24px">
          <Text
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
          </Text>
        </Box>
        <Button as={Link} to={`/bieg${theme}/zapisy`} variant={theme}>
          Zapisz się
        </Button>
      </Box>
    </Container>
  </Component>
)

export default Banner
