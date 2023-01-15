import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Box from "../../atoms/Box/Box"

const Footer = () => (
    <Box width="100%" backgroundColor="white" margin="auto 0 0">
        <Box justify="space-between" width="100%" max="1240px" margin="0 auto">
            <StaticImage src="../../../images/logobaner_transgr_m 1.jpg" alt="A dinosaur" />
            <StaticImage src="../../../images/logobaner_transgr_m 3.jpg" alt="A dinosaur" />
            <StaticImage src="../../../images/logobaner_transgr_m 4.jpg" alt="A dinosaur" />
            <StaticImage src="../../../images/logobaner_transgr_m 5.jpg" alt="A dinosaur" />
            <StaticImage src="../../../images/logobaner_transgr_m 6.jpg" alt="A dinosaur" />
            <StaticImage src="../../../images/logobaner_transgr_m 7.jpg" alt="A dinosaur" />
        </Box>
    </Box>
)

export default Footer