import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import styled from "styled-components"
import Box from "../../atoms/Box/Box"
import Container from "../../molecules/Container/Container"
import Text from "../../atoms/Text/Text"
import LinkInternal from "../../atoms/Link/Link"
import Button from "../../atoms/Button/Button"

const Component = styled(Box)`
    .gatsby-image-wrapper {
        margin: 0 auto;

        img {
            object-fit: contain !important;
        }
    }
`

const Banner = () => (
    <Component width="100%" backgroundColor="grey95" padding="0 0 48px" paddingMD="0">
        <Container>
            <Box column align="center" width="100%" max="1030px" backgroundColor="white" shadowMD="md" paddingMD="40px" margin="0 auto" position="relative" zIndex="1">
                <StaticImage src="../../../images/6-transgraniczny.png" />
                <Box column width="100%" max="664px" margin="32px 0 24px">
                    <Text size="contentM" align="center" margin="0 0 16px" marginMD="0 0 32px">
                        Na chętnych czekać będą dwie trasy biegowe - 10 km i 21,097 km, obie z atestem. Razem z biegaczami na 10 kilometrową trasę wyruszą zawodnicy Nordic Walking.
                    </Text>
                    <Text size="contentM" align="center" margin="0 0 16px" marginMD="0 0 32px">
                        Zapisy rozpoczynamy w poniedziałek 14 lutego i tradycyjnie im szybciej tym taniej. Zgłaszając się do końca marca zapłacicie 90 zł. za półmaraton i 80 zł. z 10 km. Potem cena rośnie.
                    </Text>
                    <Text size="contentM" align="center">
                        Zanim się zapiszecie koniecznie przeczytajcie <LinkInternal to="/regulamin">regulamin</LinkInternal>.
                    </Text>
                </Box>
                <Button as={Link} to="/zapisz-sie" variant="green">Zapisz się</Button>
            </Box>
        </Container>
    </Component>
)

export default Banner