import * as React from "react"
import styled from "styled-components"
import Box from "../../atoms/Box/Box"
import Logo from "../../molecules/Logo/Logo"
import Menu from "../../molecules/Menu/Menu"

const Component = styled(Box)`
    .gatsby-image-wrapper {
        margin: 0 auto;

        img {
            object-fit: contain !important;
        }
    }
`

const Header = () => (
    <Component width="100%" backgroundColor="white" shadow="md" padding="16px" margin="auto 0 0" position="relative" zIndex="100">
        <Box justify="space-between" align="center" width="100%" max="1240px" margin="0 auto">
            <Logo />
            <Menu />
        </Box>
    </Component>
)

export default Header