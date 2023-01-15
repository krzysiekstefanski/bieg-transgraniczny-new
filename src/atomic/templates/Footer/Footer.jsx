import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Box from "../../atoms/Box/Box"

const Wrapper = styled(Box)`
    .gatsby-image-wrapper {
        margin: 0 auto;

        img {
            object-fit: contain !important;
        }
    }
`

const Footer = () => (
    <Wrapper width="100%" backgroundColor="white" padding="0 16px" margin="auto 0 0">
        <Box display="grid" displayMD="flex" columns="1fr 1fr 1fr" justify="space-between" gap="16px" width="100%" max="1240px" margin="0 auto">
            <StaticImage src="../../../images/logobaner_transgr_m 1.jpg" placeholder="none" />
            <StaticImage src="../../../images/logobaner_transgr_m 3.jpg" placeholder="none" />
            <StaticImage src="../../../images/logobaner_transgr_m 4.jpg" placeholder="none" />
            <StaticImage src="../../../images/logobaner_transgr_m 5.jpg" placeholder="none" />
            <StaticImage src="../../../images/logobaner_transgr_m 6.jpg" placeholder="none" />
            <StaticImage src="../../../images/logobaner_transgr_m 7.jpg" placeholder="none" />
        </Box>
    </Wrapper>
)

export default Footer