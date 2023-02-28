import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Box from "../../atoms/Box/Box"
import Heading from "../../atoms/Heading/Heading"
import { Link } from "gatsby"

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
        <Box
          as={Link}
          to={`/bieg${theme}`}
          height="72px"
          width="270px"
          margin="0 16px 0 0"
        >
          <StaticImage src="../../../images/7-gtfb-logo.jpg" />
        </Box>
        {/* <Heading size="h500" sizeXL="h600" wrap="nowrap">
          Bieg Transgraniczny
        </Heading> */}
      </>
    )}
  </Box>
)

export default Logo
