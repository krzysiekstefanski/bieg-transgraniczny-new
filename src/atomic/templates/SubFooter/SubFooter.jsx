import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Box from "../../atoms/Box/Box"
import Text from "../../atoms/Text/Text"
import Link from "../../atoms/Link/Link"
import Container from "../../molecules/Container/Container"
import MailSVG from "../../../images/mail.inline.svg"
import PhoneSVG from "../../../images/phone.inline.svg"
import FbSVG from "../../../images/fb.inline.svg"

const Social = styled(Box)`
  a {
    font-family: Urbanist, sans-serif;

    svg {
      margin: 0 16px 0 0;
    }
  }
`

const SubFooter = ({ theme }) => (
  <Box
    width="100%"
    backgroundColor={theme + "00"}
    padding="24px 16px"
    margin="auto 0 8px"
  >
    <Container
      wrap="wrap"
      directionSM="column"
      directionLG="row"
      justify="space-between"
      gap="16px"
      position="relative"
      zIndex="1"
    >
      <Box column directionSM="row">
        <Box column directionSM="row">
          <Link
            to={`/bieg${theme}`}
            color="white"
            hover="grey95"
            margin="0 0 12px"
            marginSM="0 24px 0 0"
          >
            Home
          </Link>
          <Link
            to={`/bieg${theme}/lista-startowa`}
            color="white"
            hover="grey95"
            margin="0 0 12px"
            marginSM="0 24px 0 0"
          >
            Lista startowa
          </Link>
          <Link
            to={`/bieg${theme}/regulamin`}
            color="white"
            hover="grey95"
            margin="0 0 12px"
            marginSM="0 24px 0 0"
          >
            Regulamin
          </Link>
          <Link to={`/bieg${theme}/kontakt`} color="white" hover="grey95">
            Kontakt
          </Link>
        </Box>
      </Box>
      <Social column directionSM="row">
        <Box
          as="a"
          href="mailto:sport@csir.gryfino.pl"
          align="center"
          color="white"
          hover="grey95"
          margin="0 0 12px"
          marginSM="0 24px 0 0"
        >
          <MailSVG />
          sport@csir.gryfino.pl
        </Box>
        <Box
          as="a"
          href="tel:48601205951"
          align="center"
          color="white"
          hover="grey95"
          margin="0 0 12px"
          marginSM="0 24px 0 0"
        >
          <PhoneSVG />
          601 205 951
        </Box>
        <Box
          as="a"
          href="https://facebook.com/profile.php?id=100064551137640"
          target="_blank"
          align="center"
          color="white"
          hover="grey95"
        >
          <FbSVG />
          facebook
        </Box>
      </Social>
    </Container>
  </Box>
)

export default SubFooter
