import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Box from "../../atoms/Box/Box"
import Container from "../../molecules/Container/Container"
import Heading from "../../atoms/Heading/Heading"
import Text from "../../atoms/Text/Text"
import BgGreenSVG from "../../../images/green-bg-2.inline.svg"
import BgGreenSVG2 from "../../../images/green-bg-5.inline.svg"
import Link from "../../atoms/Link/Link"
import Form from "../../organisms/Form/Form"

const Component = styled(Box)`
    .gatsby-image-wrapper {
        margin: 0 auto;

        img {
            object-fit: contain !important;
        }
    }
`

const Kontakt = () => (
    <Component width="100%" backgroundColor="grey95" padding="0 0 48px" paddingMD="84px 0 120px" position="relative">
        <Box width="266px" position="absolute" top="0" right="0" zIndex="1">
            <BgGreenSVG />
        </Box>
        <Box width="280px" widthSM="304px" position="absolute" bottom="0" left="0">
            <BgGreenSVG2 />
        </Box>
        <Container position="relative" zIndex="1" margin="0 auto auto">
            <Box width="100%">
                <Box column width="100%" max="527px" padding="0 130px 0 0">
                    <Heading size="h600" sizeMD="h700" sizeLG="h800" align="center" alignMD="left" margin="0 0 24px">Kontakt</Heading>
                    <Box column gap="24px">
                        <Box>
                            <Box column width="50%">
                                <Text size="contentL">Strony internetowe:</Text>
                                <Link href="https://www.osir.gryfino.pl" target="_blank">www.osir.gryfino.pl</Link>
                                <Link href="https://www.gryfinobiega.pl" target="_blank" margin="0 0 24px">www.gryfinobiega.pl</Link>
                            </Box>
                            <Box column width="50%">
                                <Text size="contentL">Adres e-mail:</Text>
                                <Link href="mailto:sport.osir.gryfino.pl" target="_blank">sport.osir.gryfino.pl</Link>
                            </Box>
                        </Box>
                        <Box>
                            <Box column width="50%">
                                <Text size="contentL">Telefon / Fax:</Text>
                                <Link href="tel:48914163011" target="_blank">91 416 30 11</Link>
                            </Box>
                            <Box column width="50%">
                                <Text size="contentL">Dyrektor biegu:</Text>
                                <Text size="contentM">Jan Podleśny</Text>
                                <Link href="tel:601205951" target="_blank">601 205 951</Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box grow="1">
                    <Form />
                </Box>
            </Box>
        </Container>
    </Component >
)


export default Kontakt