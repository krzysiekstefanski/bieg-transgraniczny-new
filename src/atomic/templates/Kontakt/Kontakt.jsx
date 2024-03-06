import React, { useState } from "react"
import styled from "styled-components"
import Box from "../../atoms/Box/Box"
import Container from "../../molecules/Container/Container"
import Heading from "../../atoms/Heading/Heading"
import Text from "../../atoms/Text/Text"
import BgGreenSVG from "../../../images/teal-bg-2.inline.svg"
import BgGreenSVG2 from "../../../images/teal-bg-5.inline.svg"
import BgRedSVG from "../../../images/red-bg-2.inline.svg"
import BgRedSVG2 from "../../../images/red-bg-5.inline.svg"
import Link from "../../atoms/Link/Link"
import Form from "../../organisms/Form/Form"

const Component = styled(Box)`
  .gatsby-image-wrapper {
    margin: 0 auto;

    img {
      object-fit: contain !important;
    }
  }
`

const Kontakt = ({ theme }) => (
  <Component
    grow="1"
    width="100%"
    backgroundColor="grey95"
    padding="32px 0 48px"
    paddingMD="84px 0 120px"
    position="relative"
  >
    <Box
      width="100px"
      widthSM="200px"
      widthMD="266px"
      position="absolute"
      top="0"
      right="0"
      zIndex="1"
    >
      {theme === "niepodleglosci" ? <BgRedSVG /> : <BgGreenSVG />}
    </Box>
    <Box
      width="80px"
      widthMD="160px"
      widthLG="304px"
      position="absolute"
      bottom="0"
      left="0"
    >
      {theme === "niepodleglosci" ? <BgRedSVG2 /> : <BgGreenSVG2 />}
    </Box>
    <Container position="relative" zIndex="1" margin="0 auto auto">
      <Box column directionLG="row" width="100%">
        <Box
          column
          width="100%"
          max="600px"
          //padding="0 0 24px"
          //paddingLG="0 130px 0 0"
        >
          <Heading
            size="h600"
            sizeMD="h700"
            sizeLG="h800"
            align="center"
            alignMD="left"
            margin="0 0 24px"
          >
            Kontakt
          </Heading>
          <Box column gap="24px">
            <Box column directionSM="row">
              <Box column width="100%" widthSM="50%">
                <Text size="contentL">Strony internetowe:</Text>
                <Link
                  variant={theme}
                  to="https://www.csir.gryfino.pl"
                  target="_blank"
                >
                  www.csir.gryfino.pl
                </Link>
                <Link
                  variant={theme}
                  to="https://www.gryfinobiega.pl"
                  target="_blank"
                  margin="0 0 24px"
                >
                  www.gryfinobiega.pl
                </Link>
              </Box>
              <Box column width="50%">
                <Text size="contentL">Adres e-mail:</Text>
                <Link
                  variant={theme}
                  to="mailto:sport@csir.gryfino.pl"
                  target="_blank"
                >
                  sport@csir.gryfino.pl
                </Link>
              </Box>
            </Box>
            <Box column directionSM="row">
              <Box column width="100%" widthSM="50%">
                <Text size="contentL">Telefon / Fax:</Text>
                <Link
                  variant={theme}
                  to="tel:48914163011"
                  target="_blank"
                  margin="0 0 24px"
                  marginSM="0"
                >
                  91 416 30 11
                </Link>
              </Box>
              <Box column width="50%">
                <Text size="contentL">Dyrektor biegu:</Text>
                <Text size="contentM">Jan Podleśny</Text>
                <Link variant={theme} to="tel:601205951" target="_blank">
                  601 205 951
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* <Box grow="1">
          <Form theme={theme} />
        </Box> */}
      </Box>
    </Container>
  </Component>
)

export default Kontakt
