import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import loadable from "@loadable/component"
import Layout from "../components/layout-start"
import Seo from "../components/seo"
import Box from "../atomic/atoms/Box/Box"
import Heading from "../atomic/atoms/Heading/Heading"
import Button from "../atomic/atoms/Button/Button"
// import GreenBackgroundSVG from "../images/green-bg.inline.svg"
// import RedBackgroundSVG from "../images/red-bg.inline.svg"
const GreenBackgroundSVG = loadable(() =>
  import("../images/teal-bg.inline.svg")
)
const RedBackgroundSVG = loadable(() => import("../images/red-bg.inline.svg"))

const IndexPage = () => (
  <Layout>
    <Box
      column
      directionLG="row"
      justify="space-between"
      gap="16px"
      heightLG="calc(100vh - 101px)"
      max="1920px"
      padding="16px"
      paddingLG="32px 48px 0"
      margin="0 auto"
    >
      <Box
        column
        justify="flex-start"
        justifyLG="center"
        align="center"
        order="2"
        orderLG="1"
        radius="8px"
        maxHeight="280px"
        maxHeightSM="400px"
        maxHeightMD="760px"
        maxHeightLG="none"
        backgroundColorLG="transparent"
        borderWidth="1px"
        borderWidthLG="0"
        borderColor="grey90"
        padding="16px 16px 0"
        paddingLG="0"
        overflow="hidden"
        overflowLG="visible"
        position="relative"
      >
        <Box
          width="100%"
          justify="center"
          justifyLG="flex-start"
          minHeightLG="120px"
          margin="0 0 6px"
          marginMD="0 0 26px"
        >
          <Box
            //width="66px"
            //widthXS="40px"
            //widthMD="56px"
            //widthXL="336px"
            max="350px"
          >
            <StaticImage
              src="../images/8-gtfb-logo.jpg"
              placeholder="none"
              objectFit="contain"
            />
          </Box>
          {/* <Heading
            as="h2"
            size="h600"
            sizeXS="textHeading"
            sizeXXL="h700"
            sizeHD="h800"
            wrapLG="nowrap"
            margin="0 0 0 25px"
          >
            Bieg Transgraniczny
          </Heading> */}
        </Box>
        <Box
          justify="center"
          height="stretch"
          heightXL="calc(100vh - 305px)"
          width="100%"
          margin="auto 0"
          position="relative"
        >
          <Box
            heightXL="100%"
            max="230px"
            maxSM="400px"
            maxMD="514px"
            margin="auto 0"
            zIndex="1"
          >
            <StaticImage
              objectFit="contain"
              src="../images/bieg-transgraniczny-runner-p.png"
              placeholder="none"
            />
          </Box>
          <Box
            justify="center"
            height="100%"
            maxHeight="612px"
            width="100%"
            position="absolute"
            top="47%"
            zIndex="0"
            transform="translate(-21px,-49%)"
          >
            <GreenBackgroundSVG />
          </Box>
        </Box>
        <Box
          displayLG="none"
          justify="center"
          width="calc(100% - 32px)"
          position="absolute"
          bottom="8px"
          bottomSM="32px"
          zIndex="3"
        >
          <Button
            as={Link}
            to="biegtransgraniczny"
            size="big"
            variant="transgraniczny"
            width="100%"
            widthSM="60%"
            widthMD="auto"
          >
            Bieg Transgraniczny
          </Button>
        </Box>
      </Box>
      <Box column justify="center" align="center" order="1" orderLG="2">
        <Box display="none" displayLG="flex">
          <StaticImage src="../images/gryfino-logo.jpg" placeholder="none" />
        </Box>
        <Box displayLG="none">
          <StaticImage
            src="../images/gryfino-logo-horizontal.jpg"
            placeholder="none"
          />
        </Box>
        <Heading
          size="h700"
          sizeMD="h800"
          sizeHD="h900"
          margin="8px 0"
          marginMD="16px 0 32px"
          marginXXL="32px 0 76px"
        >
          Gryfinobiega.pl
        </Heading>
        {/* <Heading as="h3" size="TextHeading" align="center" marginLG="0 0 66px">
          Wybierz rodzaj biegu, w którym chcesz wziąć udział.
        </Heading> */}
        <Heading as="h3" size="TextHeading" align="center" marginLG="0 0 66px">
          Wybierz rodzaj biegu, w którym chcesz wziąć udział.
        </Heading>
        <Box
          display="none"
          displayLG="flex"
          gap="24px"
          gapLG="16px"
          gapXL="24px"
        >
          <Button
            as={Link}
            to="biegtransgraniczny"
            size="big"
            sizeLG="small"
            sizeHD="big"
            variant="transgraniczny"
          >
            Bieg Transgraniczny
          </Button>
          <Button
            as={Link}
            to="biegniepodleglosci"
            size="big"
            sizeLG="small"
            sizeHD="big"
            variant="niepodleglosci"
          >
            Bieg Niepodległości
          </Button>
        </Box>
      </Box>
      <Box
        column
        justify="flex-start"
        justifyLG="center"
        align="center"
        order="3"
        radius="8px"
        maxHeight="280px"
        maxHeightSM="400px"
        maxHeightMD="760px"
        maxHeightLG="none"
        backgroundColorLG="transparent"
        borderWidth="1px"
        borderWidthLG="0"
        borderColor="grey90"
        padding="16px 16px 0"
        paddingLG="0"
        overflow="hidden"
        overflowLG="visible"
        position="relative"
      >
        <Box
          align="center"
          minHeightLG="120px"
          margin="0 0 6px"
          marginMD="0 0 26px"
        >
          <Heading
            as="h2"
            size="h600"
            sizeXS="textHeading"
            sizeXXL="h700"
            sizeHD="h800"
            order="2"
            orderLG="1"
            align="right"
            wrapLG="nowrap"
            margin="0 0 0 25px"
            marginLG="0 25px 0 0"
          >
            Bieg Niepodległości
          </Heading>
          <Box
            order="1"
            orderLG="2"
            width="66px"
            widthXS="40px"
            widthMD="56px"
            widthXL="76px"
            widthXXL="146px"
          >
            <StaticImage
              src="../images/bieg-niepodleglosci-logo.png"
              placeholder="none"
            />
          </Box>
        </Box>
        <Box
          justify="center"
          height="stretch"
          heightXL="calc(100vh - 305px)"
          width="100%"
          margin="auto 0"
          position="relative"
        >
          <Box
            heightXL="100%"
            max="230px"
            maxSM="400px"
            maxMD="514px"
            transform="scale(-1, 1) translateX(18%)"
            transformLG="none"
            margin="auto 0"
            zIndex="1"
          >
            <StaticImage
              objectFit="contain"
              src="../images/bieg-niepodleglosci-runner.png"
              placeholder="none"
            />
          </Box>
          <Box
            justify="center"
            height="100%"
            maxHeight="617px"
            width="100%"
            position="absolute"
            top="47%"
            zIndex="0"
            transform="translate(-5px,-51%)"
          >
            <RedBackgroundSVG />
          </Box>
        </Box>
        <Box
          displayLG="none"
          justify="center"
          width="calc(100% - 32px)"
          position="absolute"
          bottom="8px"
          bottomSM="32px"
          zIndex="3"
        >
          <Button
            as={Link}
            to="biegniepodleglosci"
            variant="niepodleglosci"
            size="big"
            width="100%"
            widthSM="60%"
            widthMD="auto"
          >
            Bieg Niepodległości
          </Button>
        </Box>
      </Box>
    </Box>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
