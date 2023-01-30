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

const Rewards = () => (
    <Component width="100%" padding="0 0 48px" paddingMD="120px 0">
        <Container>
            <Box column width="100%">
                <Box column>
                    <Heading size="h600" sizeMD="h700" sizeLG="h800" align="center" alignMD="left" margin="0 0 24px">Medale i koszulki</Heading>
                    <Text size="contentL" max="1031px" margin="0 0 40px" marginMD="0 0 80px">
                        Trwają zgłoszenia do 6 edycji gryfińskiego Transgranicznego Festiwalu Biegowego. Przy okazji „pęknięcia” pierwszej setki zgłoszeń mamy okazję zaprezentować projekty medali i koszulki jakie otrzymają uczestnicy naszych zawodów. Nie trudno się domyśleć, że projekty nawiązują do aktualnej sytuacji w bezpośrednim sąsiedztwie naszego kraju obok których jakże ciężko przejść obojętnie.
                    </Text>
                </Box>
                <Box column margin="0 0 40px" marginMD="0 0 80px">
                    <Heading size="h600" align="center" alignMD="left" margin="0 0 24px">Medale podczas 6. Gryfińskiego Transgranicznego Festiwalu Biegowego</Heading>
                    <Box gap="24px" wrap="wrap">
                        <Box grow="1" gap="24px" wrap="wrap">
                            <Box grow="1" padding="34px" borderWidth="1px" borderColor="grey90" radius="8px">
                                <StaticImage src="../../../images/medal-1.png" />
                            </Box>
                            <Box grow="1" padding="34px" borderWidth="1px" borderColor="grey90" radius="8px">
                                <StaticImage src="../../../images/medal-2.png" />
                            </Box>
                        </Box>
                        <Box grow="1" gap="24px" wrap="wrap">
                            <Box grow="1" padding="34px" borderWidth="1px" borderColor="grey90" radius="8px">
                                <StaticImage src="../../../images/medal-3.png" />
                            </Box>
                            <Box grow="1" padding="34px" borderWidth="1px" borderColor="grey90" radius="8px">
                                <StaticImage src="../../../images/medal-4.png" />
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box column>
                    <Heading size="h600" align="center" alignMD="left" margin="0 0 24px">Koszulka</Heading>
                    <Box grow="1" gap="24px" wrap="wrap">
                        <Box grow="1" padding="34px" borderWidth="1px" borderColor="grey90" radius="8px">
                            <StaticImage src="../../../images/koszulka-przod.png" />
                        </Box>
                        <Box grow="1" padding="34px" borderWidth="1px" borderColor="grey90" radius="8px">
                            <StaticImage src="../../../images/koszulka-tyl.png" />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    </Component>
)

export default Rewards