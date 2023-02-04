import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Box from "../../atoms/Box/Box"
import Container from "../../molecules/Container/Container"
import Heading from "../../atoms/Heading/Heading"
import Text from "../../atoms/Text/Text"
import BgSVG from "../../../images/background-stripes-3.inline.svg"
import BgGreenSVG from "../../../images/green-bg-4.inline.svg"
import BgGreenSVG2 from "../../../images/green-bg-5.inline.svg"

const Component = styled(Box)`
    .gatsby-image-wrapper {
        margin: 0 auto;

        img {
            object-fit: contain !important;
        }
    }
`

const Gallery = () => (
    <Component width="100%" backgroundColor="grey95" padding="0 0 48px" paddingMD="120px 0" position="relative">
        <Box justify="flex-end" widthMD="100%" width="70%" position="absolute" bottom="0" right="0">
            <BgSVG />
        </Box>
        <Box width="280px" widthSM="168px" position="absolute" top="30%" right="0">
            <BgGreenSVG />
        </Box>
        <Box width="280px" widthSM="304px" position="absolute" bottom="0" left="0">
            <BgGreenSVG2 />
        </Box>
        <Container position="relative" zIndex="1">
            <Box column width="100%">
                <Heading size="h600" sizeMD="h700" sizeLG="h800" align="center" alignMD="left" margin="0 0 24px">Galeria</Heading>
                <Box column margin="0 0 40px" marginMD="0 0 80px">
                    <Box gap="24px" wrap="wrap">
                        <Box grow="1" gap="24px" wrap="wrap">
                            <Box width="100%" widthSM="calc(50% - 12px)" widthMD="calc(33% - 16px)" radius="8px" overflow="hidden">
                                <StaticImage src="../../../images/gallery/gallery-1.jpg" />
                            </Box>
                            <Box width="100%" widthSM="calc(50% - 12px)" widthMD="calc(33% - 16px)" radius="8px" overflow="hidden">
                                <StaticImage src="../../../images/gallery/gallery-2.jpg" />
                            </Box>
                            <Box width="100%" widthSM="calc(50% - 12px)" widthMD="calc(33% - 16px)" radius="8px" overflow="hidden">
                                <StaticImage src="../../../images/gallery/gallery-3.jpg" />
                            </Box>
                            <Box width="100%" widthSM="calc(50% - 12px)" widthMD="calc(33% - 16px)" radius="8px" overflow="hidden">
                                <StaticImage src="../../../images/gallery/gallery-4.jpg" />
                            </Box>
                            <Box width="100%" widthSM="calc(50% - 12px)" widthMD="calc(33% - 16px)" radius="8px" overflow="hidden">
                                <StaticImage src="../../../images/gallery/gallery-5.jpg" />
                            </Box>
                            <Box width="100%" widthSM="calc(50% - 12px)" widthMD="calc(33% - 16px)" radius="8px" overflow="hidden">
                                <StaticImage src="../../../images/gallery/gallery-6.jpg" />
                            </Box>
                            <Box width="100%" widthSM="calc(50% - 12px)" widthMD="calc(33% - 16px)" radius="8px" overflow="hidden">
                                <StaticImage src="../../../images/gallery/gallery-7.jpg" />
                            </Box>
                            <Box width="100%" widthSM="calc(50% - 12px)" widthMD="calc(33% - 16px)" radius="8px" overflow="hidden">
                                <StaticImage src="../../../images/gallery/gallery-8.jpg" />
                            </Box>
                            <Box width="100%" widthSM="calc(50% - 12px)" widthMD="calc(33% - 16px)" radius="8px" overflow="hidden">
                                <StaticImage src="../../../images/gallery/gallery-9.jpg" />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    </Component>
)

export default Gallery