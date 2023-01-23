import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Box from "../../atoms/Box/Box"

const Logo = () => (
    <Box height="72px" width="64px">
        <StaticImage src="../../../images/bieg-transgraniczny-logo.png" />
    </Box>
)

export default Logo