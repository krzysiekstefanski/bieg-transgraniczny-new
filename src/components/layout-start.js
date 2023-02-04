import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"
import Footer from "../atomic/templates/Footer/Footer"
import Box from "../atomic/atoms/Box/Box"

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: Bai Jamjuree, sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  html,
  body {
    min-height: 100%;
    box-sizing: border-box;
  }

  * {
    box-sizing: inherit;
    margin: 0;
    padding: 0;

    &:focus {
      outline: none;
    }
  }

  *:before {
    box-sizing: inherit;
  }

  *:after {
    box-sizing: inherit;
  }

  [data-reach-dialog-overlay] {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
  
  @media only screen and (min-width: 769px) {
    [data-reach-dialog-overlay] {
      align-items: flex-start;
    }
  }
  
  [data-reach-dialog-content] {
    width: 100vw !important;
    background-color: transparent !important;
    position: relative;
    padding: 0 !important;
  }
  
  @media only screen and (min-width: 769px) {
    [data-reach-dialog-content] {
      width: 70vw !important;
      padding: 2rem !important;
    }
  }
  
  [data-reach-dialog-content] img {
    margin: 0;
  }

  main {
    overflow: hidden;
  }

  p {
    font-family: Urbanist, sans-serif;
  }
`

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Box column minHeight="100vh">
      <main>{children}</main>
      <Footer />
    </Box>
  </>
)

export default Layout
