import * as React from "react"
import styled from "styled-components"
import Box from "../../atoms/Box/Box"
import Container from "../../molecules/Container/Container"
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

const Header = ({ className, theme }) => (
  <Component
    className={className}
    width="100%"
    backgroundColor="white"
    shadow="md"
    padding="16px 0"
    position="relative"
    zIndex="100"
  >
    <Container>
      <Logo theme={theme} />
      <Menu theme={theme} />
    </Container>
  </Component>
)

export default Header
