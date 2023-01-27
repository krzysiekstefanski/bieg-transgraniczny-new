import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Box from "../../atoms/Box/Box"
import Heading from "../../atoms/Heading/Heading"
import Text from "../../atoms/Text/Text"
import List from "../../atoms/List/List"
import ListItem from "../../atoms/ListItem/ListItem"
import Button from "../../atoms/Button/Button"
import Container from "../../molecules/Container/Container"

const Component = styled(Box)`
    .gatsby-image-wrapper {
        margin: 0 auto;

        img {
            object-fit: contain !important;
        }
    }
`

const Banner = () => (
    <Component width="100%" backgroundColor="white" padding="0 16px" margin="auto 0 0">
        <Container>
            <Box width="100%" gap="24px" margin="120px 0 240px">
                <Box column width="calc(50% - 12px)">
                    <Heading size="h800" margin="0 0 24px">Weryfikacja uczestników</Heading>
                    <Text size="contentL" margin="0 0 40px">
                        Przypominamy, że weryfikacja do biegu odbywać się będzie w Liceum Ogólnokształcącym ul. Niepodległości.
                    </Text>
                    <Text weight="700" margin="0 0 4px">
                        Z regulaminu:
                    </Text>
                    <Text margin="0 0 8px">
                        „W celu weryfikacji każdy zawodnik musi zgłosić się osobiście w biurze zawodów (nie ma możliwości odebrania pakietu startowego w imieniu innej osoby), w budynku I Liceum Ogólnokształcącego w Gryfinie, ul. Niepodległości 16 (400 m od miejsca startu)
                    </Text>
                    <List>
                        <ListItem>W przeddzień zawodów - 2.05.2022 r. w godz. 16:30 – 19:00</ListItem>
                        <ListItem>W dniu zawodów - 3.05.2022 r. od godz. 8:30 – 11:00</ListItem>
                        <ListItem>Zawodnicy powyżej 18 roku życia podpisują oświadczenie o biegu na własną odpowiedzialność.”</ListItem>
                    </List>
                </Box>
                <Box width="calc(50% - 12px)">
                    <StaticImage src="../../../images/transgraniczny-mapa.png" />
                </Box>
            </Box>
        </Container>
    </Component>
)

export default Banner