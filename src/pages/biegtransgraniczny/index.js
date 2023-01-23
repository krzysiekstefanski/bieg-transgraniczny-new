import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import loadable from '@loadable/component'
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Header from "../../atomic/templates/Header/Header"
import Box from "../../atomic/atoms/Box/Box"
import Heading from "../../atomic/atoms/Heading/Heading"
import Button from "../../atomic/atoms/Button/Button"
// import GreenBackgroundSVG from "../images/green-bg.inline.svg"
// import RedBackgroundSVG from "../images/red-bg.inline.svg"
const GreenBackgroundSVG = loadable(() => import('../../images/green-bg.inline.svg'))
const RedBackgroundSVG = loadable(() => import('../../images/red-bg.inline.svg'))

const TransgranicznyPage = () => (
  <Layout>
    <Header />
    <Box column directionLG="row" justify="space-between" gap="16px" height="calc(100vh - 101px)" max="1920px" padding="16px" paddingLG="32px 48px 0" margin="0 auto">

    </Box>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default TransgranicznyPage
