import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import parse from "html-react-parser"
import Box from "../../atoms/Box/Box"
import Container from "../../molecules/Container/Container"
import Button from "../../atoms/Button/Button"
import Heading from "../../atoms/Heading/Heading"
import Text from "../../atoms/Text/Text"
import TopBgSvg from "../../../images/teal-top.inline.svg"
import TopBgRedSvg from "../../../images/red-top.inline.svg"
import BgSVG from "../../../images/background-stripes-1.inline.svg"
import { colors } from "../../colors"
import { colorizeText } from "../../utils"

const Component = styled(Box)`
  .gatsby-image-wrapper {
    width: 100%;
    margin: 0 auto;

    img {
      object-fit: contain !important;
    }
  }
`

const BoxSVG = styled(Box)`
  svg {
    width: 100%;

    path {
      &:nth-child(1) {
        fill: ${props =>
          props.theme === "transgraniczny"
            ? colors.transgraniczny40
            : colors.niepodleglosci80};
      }
      &:nth-child(2) {
        fill: ${props =>
          props.theme === "transgraniczny"
            ? colors.transgraniczny60
            : colors.niepodleglosci60};
      }
      &:nth-child(3) {
        fill: ${props =>
          props.theme === "transgraniczny"
            ? colors.transgraniczny00
            : colors.niepodleglosci60};
      }
      &:nth-child(4) {
        fill: ${props =>
          props.theme === "transgraniczny"
            ? colors.transgraniczny20
            : colors.niepodleglosci60};
      }
      &:nth-child(5) {
        fill: ${props =>
          props.theme === "transgraniczny"
            ? colors.transgraniczny40
            : colors.niepodleglosci20};
      }
      &:nth-child(6) {
        fill: ${props =>
          props.theme === "transgraniczny"
            ? colors.transgraniczny20
            : colors.niepodleglosci00};
      }
      &:nth-child(7) {
        fill: ${props =>
          props.theme === "transgraniczny"
            ? colors.transgraniczny00
            : colors.niepodleglosci00};
      }
      &:nth-child(8) {
        fill: ${props =>
          props.theme === "transgraniczny"
            ? colors.transgraniczny80
            : colors.niepodleglosci00};
      }
      &:nth-child(9) {
        fill: ${props =>
          props.theme === "transgraniczny"
            ? colors.transgraniczny20
            : colors.niepodleglosci00};
      }
      &:nth-child(10) {
        fill: ${props =>
          props.theme === "transgraniczny"
            ? colors.transgraniczny20
            : colors.niepodleglosci00};
      }
      &:nth-child(11) {
        fill: ${props =>
          props.theme === "transgraniczny"
            ? colors.transgraniczny00
            : colors.niepodleglosci00};
      }
      &:nth-child(12) {
        fill: ${props =>
          props.theme === "transgraniczny"
            ? colors.transgraniczny80
            : colors.niepodleglosci00};
      }
      &:nth-child(13) {
        fill: ${props =>
          props.theme === "transgraniczny"
            ? colors.transgraniczny00
            : colors.niepodleglosci00};
      }
      &:nth-child(14) {
        fill: ${props =>
          props.theme === "transgraniczny"
            ? colors.transgraniczny40
            : colors.niepodleglosci00};
      }
      &:nth-child(15) {
        fill: ${props =>
          props.theme === "transgraniczny"
            ? colors.transgraniczny40
            : colors.niepodleglosci00};
      }
      &:nth-child(16) {
        fill: ${props =>
          props.theme === "transgraniczny"
            ? colors.transgraniczny00
            : colors.niepodleglosci00};
      }
      &:nth-child(17) {
        fill: ${props =>
          props.theme === "transgraniczny"
            ? colors.transgraniczny40
            : colors.niepodleglosci00};
      }
      &:nth-child(18) {
        fill: ${props =>
          props.theme === "transgraniczny"
            ? colors.transgraniczny00
            : colors.niepodleglosci00};
      }
      &:nth-child(19) {
        fill: ${props =>
          props.theme === "transgraniczny"
            ? colors.transgraniczny20
            : colors.niepodleglosci00};
      }
      &:nth-child(20) {
        fill: ${props =>
          props.theme === "transgraniczny"
            ? colors.transgraniczny60
            : colors.niepodleglosci00};
      }
      &:nth-child(21) {
        fill: ${props =>
          props.theme === "transgraniczny"
            ? colors.transgraniczny40
            : colors.niepodleglosci00};
      }
      &:nth-child(22) {
        fill: ${props =>
          props.theme === "transgraniczny"
            ? colors.transgraniczny60
            : colors.niepodleglosci00};
      }
      &:nth-child(23) {
        fill: ${props =>
          props.theme === "transgraniczny"
            ? colors.transgraniczny00
            : colors.niepodleglosci00};
      }
      &:nth-child(24) {
        fill: ${props =>
          props.theme === "transgraniczny"
            ? colors.transgraniczny20
            : colors.niepodleglosci00};
      }
      &:nth-child(25) {
        fill: ${props =>
          props.theme === "transgraniczny"
            ? colors.transgraniczny40
            : colors.niepodleglosci00};
      }
      &:nth-child(26) {
        fill: ${props =>
          props.theme === "transgraniczny"
            ? colors.transgraniczny20
            : colors.niepodleglosci00};
      }
      &:nth-child(27) {
        fill: ${props =>
          props.theme === "transgraniczny"
            ? colors.transgraniczny00
            : colors.niepodleglosci00};
      }
      &:nth-child(28) {
        fill: ${props =>
          props.theme === "transgraniczny"
            ? colors.transgraniczny80
            : colors.niepodleglosci00};
      }
      &:nth-child(29) {
        fill: ${props =>
          props.theme === "transgraniczny"
            ? colors.transgraniczny60
            : colors.niepodleglosci00};
      }
      &:nth-child(30) {
        fill: ${props =>
          props.theme === "transgraniczny"
            ? colors.transgraniczny20
            : colors.niepodleglosci00};
      }
      &:nth-child(31) {
        fill: ${props =>
          props.theme === "transgraniczny"
            ? colors.transgraniczny00
            : colors.niepodleglosci00};
      }
      &:nth-child(32) {
        fill: ${props =>
          props.theme === "transgraniczny"
            ? colors.transgraniczny20
            : colors.niepodleglosci00};
      }
      &:nth-child(33) {
        fill: ${props =>
          props.theme === "transgraniczny"
            ? colors.transgraniczny60
            : colors.niepodleglosci00};
      }
    }
  }
`

const Top = ({ className, theme, display, data }) => {
  const { herotitle, herosubtitle, herotext } = data

  return (
    <Component
      className={className}
      display={display}
      backgroundColor="grey95"
      position="relative"
      padding="0 0 48px"
      paddingMD="0"
    >
      <Box
        justify="flex-end"
        width="100%"
        widthMD="80%"
        position="absolute"
        top="0"
        right="0"
        zIndex="1"
      >
        <BgSVG />
      </Box>
      <Container position="relative" zIndex="1">
        <Box width="100%" gap="48px" gapLG="100px">
          <Box
            column
            maxMD="42%"
            maxLG="540px"
            width="100%"
            padding="32px 0 0"
            paddingMD="88px 0 0"
          >
            {herotitle && (
              <Heading
                size="h700"
                sizeLG="h800"
                sizeXL="h900"
                margin={herosubtitle ? "0" : "0 0 24px"}
                marginMD={herosubtitle ? "0" : "0 0 32px"}
              >
                {parse(colorizeText(herotitle, theme))}
              </Heading>
            )}
            {herosubtitle && (
              <Heading
                as="h2"
                size="h600"
                sizeXL="h700"
                margin="0 0 24px"
                marginMD="0 0 32px"
              >
                {parse(colorizeText(herosubtitle, theme))}
              </Heading>
            )}
            {herotext && (
              <Text
                size="contentL"
                color="grey20"
                margin="0 0 24px"
                marginMD="0 0 80px"
              >
                {parse(colorizeText(herotext, theme))}
              </Text>
            )}
            <Button
              variant={theme}
              as={"a"}
              href="#bieg"
              size="big"
              margin="0 auto"
              marginMD="0 auto 0 0"
            >
              Zobacz więcej
            </Button>
          </Box>
          <Box
            display="none"
            displayMD="flex"
            maxHeight="480px"
            maxHeightLG="none"
            width="100%"
            max="60%"
            position="relative"
          >
            <BoxSVG theme={theme} justify="center" width="100%">
              {theme === "niepodleglosci" ? <TopBgRedSvg /> : <TopBgSvg />}
            </BoxSVG>
            <Box
              maxHeight="480px"
              maxHeightLG="none"
              width="111.8%"
              padding={theme === "niepodleglosci" ? "8px 0 0" : "56px 0 0"}
              position="absolute"
              top="0"
              right="0"
            >
              {theme === "niepodleglosci" ? (
                <StaticImage src="../../../images/bieg-niepodleglosci-runner-2x.png" />
              ) : (
                <StaticImage src="../../../images/bieg-transgraniczny-runner-2p.png" />
              )}
            </Box>
          </Box>
        </Box>
      </Container>
    </Component>
  )
}

export default Top
