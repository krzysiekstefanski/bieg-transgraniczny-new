import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Box from "../../atoms/Box/Box"

const Logo = ({ theme }) => (
  <Box height="72px" width="64px">
    {theme === "niepodleglosci" ? (
      <StaticImage src="../../../images/bieg-niepodleglosci-logo.png" />
    ) : (
      <StaticImage src="../../../images/bieg-transgraniczny-logo.png" />
    )}
  </Box>
)

export default Logo
