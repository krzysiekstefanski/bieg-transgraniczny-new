import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import styled from "styled-components"
import Box from "../../atoms/Box/Box"
import Container from "../../molecules/Container/Container"
import Button from "../../atoms/Button/Button"
import Heading from "../../atoms/Heading/Heading"
import Text from "../../atoms/Text/Text"
import TopBgSvg from "../../../images/green-top.inline.svg"
import BgSVG from "../../../images/background-stripes-1.inline.svg"

const Component = styled(Box)`
    .gatsby-image-wrapper {
        margin: 0 auto;

        img {
            object-fit: contain !important;
        }
    }
`

const Top = () => (
    <Component backgroundColor="grey95" position="relative" padding="0 0 48px" paddingMD="0">
        <Box justify="flex-end" width="100%" widthMD="80%" position="absolute" top="0" right="0" zIndex="1">
            <BgSVG />
        </Box>
        <Container position="relative" zIndex="1">
            <Box width="100%" gap="48px" gapLG="100px">
                <Box column maxMD="42%" maxLG="540px" padding="24px 0 0" paddingMD="88px 0 0">
                    <Heading size="h700" sizeLG="h800" sizeXL="h900" margin="0 0 24px" marginMD="0 0 32px">6. Gryfiński <Heading as="span" size="h700" sizeLG="h800" sizeXL="h900" color="transgraniczny20">Transgraniczny</Heading> Festiwal Biegowy</Heading>
                    <Text size="contentL" color="grey20" margin="0 0 24px" marginMD="0 0 80px">Po 3 latach wracamy na gryfińskie Nabrzeże Miejskie aby podczas
                        6. edycji Gryfińskiego Transgranicznego Festiwalu Biegowego uczcić
                        rocznicę Konstytucji 3 Maja.</Text>
                    <Button variant="green" size="big" margin="0 auto" marginMD="0 auto 0 0">Zobacz więcej</Button>
                </Box>
                <Box display="none" displayMD="flex" maxHeight="480px" maxHeightLG="none" width="100%" max="60%" position="relative">
                    <Box justify="center" width="100%">
                        <TopBgSvg />
                    </Box>
                    <Box maxHeight="480px" maxHeightLG="none" width="111.8%" padding="56px 0 0" position="absolute" top="0" right="0">
                        <StaticImage src="../../../images/bieg-transgraniczny-runner-2.png" />
                    </Box>
                </Box>
            </Box>
        </Container>
    </Component>
)

export default Top