import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Box from "../atomic/atoms/Box/Box"
import Heading from "../atomic/atoms/Heading/Heading"
import Button from "../atomic/atoms/Button/Button"
import GreenBackgroundSVG from "../images/green-bg.inline.svg"
import RedBackgroundSVG from "../images/red-bg.inline.svg"

const IndexPage = () => (
  <Layout>
    <Box column directionLG="row" justify="space-between" minHeight="calc(100vh - 101px)" padding="32px 48px 0">
      <Box column justify="center" align="center" order="2" orderLG="1">
        <Box align="center" minHeight="120px" margin="0 0 26px">
          <Box>
            <StaticImage src="../images/bieg-transgraniczny-logo.png"/>
          </Box>
          <Heading as="h2" size="h600" sizeXL="h700" sizeXXL="h800" wrap="nowrap" margin="0 0 0 25px">Bieg Transgraniczny</Heading>
        </Box>
        <Box justify="center" height="stretch" width="100%" margin="auto 0" position="relative">
          <Box max="514px" margin="auto 0">
            <StaticImage src="../images/bieg-transgraniczny-runner.png" />
          </Box>
          <Box justify="center" height="100%" maxHeight="612px" width="100%" position="absolute" top="47%" zIndex="-1" transform="translate(-21px,-49%)">
            <GreenBackgroundSVG />
          </Box>
        </Box>
      </Box>
      <Box column justify="center" align="center" order="1" orderLG="2">
        <StaticImage src="../images/gryfino-logo.jpg" />
        <Heading size="h900" margin="32px 0 76px">Gryfinobiega.pl</Heading>
        <Heading as="h3" size="TextHeading" align="center" margin="0 0 66px">Wybierz rodzaj biegu, w którym chcesz wziąć udział.</Heading>
        <Box display="none" displayLG="flex" gap="24px">
          <Button variant="green">Bieg Transgraniczny</Button>
          <Button>Bieg Niepodległości</Button>
        </Box>
      </Box>
      <Box column justify="center" align="center" order="3">
        <Box align="center" minHeight="120px" margin="0 0 26px">
          <Heading as="h2" size="h600" sizeXL="h700" sizeXXL="h800" order="2" orderLG="1" align="right" wrap="nowrap" margin="0 0 0 25px" marginLG="0 25px 0 0">Bieg Niepodleglości</Heading>
          <Box order="1" orderLG="2">
            <StaticImage src="../images/bieg-niepodleglosci-logo.png" />
          </Box>
        </Box>
        <Box justify="center" height="stretch" width="100%" margin="auto 0" position="relative">
          <Box max="514px" margin="auto 0">
            <StaticImage src="../images/bieg-niepodleglosci-runner.png" />
          </Box>
          <Box justify="center" height="100%" maxHeight="617px" width="100%" position="absolute" top="47%" zIndex="-1" transform="translate(-5px,-51%)">
              <RedBackgroundSVG />
          </Box>
        </Box>
      </Box>
    </Box>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
