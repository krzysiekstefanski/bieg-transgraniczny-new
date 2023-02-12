import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Box from "../../atoms/Box/Box"
import Container from "../../molecules/Container/Container"

const Component = styled(Box)`
margin: ${(props) => props.margin ?? "auto 0 0"};

    .gatsby-image-wrapper {
        img {
            object-fit: contain !important;
        }
    }
`

const Footer = ({ margin }) => (
    <Component width="100%" backgroundColor="white" padding="0 16px" margin={margin}>
        <Container display="grid" displayMD="flex" columns="1fr 1fr 1fr" justify="space-between" gap="16px" position="relative" zIndex="1">
            <StaticImage src="../../../images/logobaner_transgr_m 1.jpg" placeholder="none" />
            <StaticImage src="../../../images/logobaner_transgr_m 3.jpg" placeholder="none" />
            <StaticImage src="../../../images/logobaner_transgr_m 4.jpg" placeholder="none" />
            <StaticImage src="../../../images/logobaner_transgr_m 5.jpg" placeholder="none" />
            <StaticImage src="../../../images/logobaner_transgr_m 6.jpg" placeholder="none" />
            <StaticImage src="../../../images/logobaner_transgr_m 7.jpg" placeholder="none" />
        </Container>
    </Component>
)

export default Footer