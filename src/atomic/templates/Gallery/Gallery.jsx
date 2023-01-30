import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Box from "../../atoms/Box/Box"
import Container from "../../molecules/Container/Container"
import Heading from "../../atoms/Heading/Heading"
import Text from "../../atoms/Text/Text"

const Component = styled(Box)`
    .gatsby-image-wrapper {
        margin: 0 auto;

        img {
            object-fit: contain !important;
        }
    }
`

const Gallery = () => (
    <Component width="100%" backgroundColor="grey95" padding="0 0 48px" paddingMD="120px 0">
        <Container>
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