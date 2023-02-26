import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Box from "../../atoms/Box/Box"
import Container from "../../molecules/Container/Container"

const Component = styled(Box)`
  margin: ${props => props.margin ?? "auto 0 0"};

  .gatsby-image-wrapper {
    img {
      object-fit: contain !important;
    }
  }
`

const Footer = ({ margin }) => (
  <Component
    height="101px"
    width="100%"
    backgroundColor="white"
    padding="0 16px"
    margin={margin}
  >
    <Container
      display="grid"
      columns="1fr 1fr 1fr"
      columnsMD="auto auto auto auto auto auto"
      justify="space-between"
      gap="16px"
      position="relative"
      zIndex="1"
    >
      <Box justify="center" align="center">
        <StaticImage
          src="../../../images/logobaner_transgr_m 1.jpg"
          height="90"
          placeholder="none"
        />
      </Box>
      <Box justify="center" align="center">
        <StaticImage
          src="../../../images/logobaner_transgr_m 4.jpg"
          height="90"
          placeholder="none"
        />
      </Box>
      <Box justify="center" align="center">
        <StaticImage
          src="../../../images/logobaner_transgr_m-3.jpg"
          height="90"
          placeholder="none"
        />
      </Box>
      <Box justify="center" align="center">
        <StaticImage
          src="../../../images/fliegel_logo.png"
          height="90"
          placeholder="none"
        />
      </Box>
      <Box justify="center" align="center">
        <StaticImage
          src="../../../images/logobaner_transgr_m 7.jpg"
          height="90"
          placeholder="none"
        />
      </Box>
      <Box justify="center" align="center">
        <StaticImage
          src="../../../images/logobaner_transgr_m 6.jpg"
          placeholder="none"
        />
      </Box>
    </Container>
  </Component>
)

export default Footer
