import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Box from "../../atoms/Box/Box"
import Heading from "../../atoms/Heading/Heading"

const Logo = ({ theme }) => (
  <Box align="center">
    {theme === "niepodleglosci" ? (
      <>
        <Box height="72px" width="64px" margin="0 16px 0 0">
          <StaticImage src="../../../images/bieg-niepodleglosci-logo.png" />
        </Box>
        <Heading size="h500" sizeXL="h600" wrap="nowrap">
          Bieg Niepodległości
        </Heading>
      </>
    ) : (
      <>
        <Box height="72px" width="64px" margin="0 16px 0 0">
          <StaticImage src="../../../images/bieg-transgraniczny-logo.png" />
        </Box>
        <Heading size="h500" sizeXL="h600" wrap="nowrap">
          Bieg Transgraniczny
        </Heading>
      </>
    )}
  </Box>
)

export default Logo
