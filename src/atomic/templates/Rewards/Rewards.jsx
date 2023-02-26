import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Box from "../../atoms/Box/Box"
import Container from "../../molecules/Container/Container"
import Heading from "../../atoms/Heading/Heading"
import Text from "../../atoms/Text/Text"
import Portal from "../../atoms/Portal/Portal"
import Modal from "../../atoms/Modal/Modal"
import BgGreenSVG from "../../../images/teal-bg-2.inline.svg"
import BgGreenSVG2 from "../../../images/teal-bg-3.inline.svg"
import BgRedSVG from "../../../images/red-bg-2.inline.svg"
import BgRedSVG2 from "../../../images/red-bg-3.inline.svg"

const Component = styled(Box)`
  .gatsby-image-wrapper {
    margin: 0 auto;

    img {
      object-fit: contain !important;
    }
  }
`

const Rewards = ({ theme }) => {
  const [clickedImage, setClickedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(null)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const body =
    typeof document !== `undefined` ? document.querySelector("body") : null

  const handleClick = (item, index) => {
    console.log(isOpenModal)
    setCurrentIndex(index)
    setClickedImage(item)
    setIsOpenModal(true)
    console.log(clickedImage)
    console.log(currentIndex)
    console.log(isOpenModal)
    body.classList.add("open-modal")
  }

  const handleCloseModal = () => {
    setIsOpenModal(false)
    body.classList.remove("open-modal")
  }

  return (
    <Component
      width="100%"
      padding="0 0 48px"
      paddingMD="120px 0"
      position="relative"
    >
      <Box
        width="266px"
        position="absolute"
        top="0"
        right="0"
        zIndex="1"
        opacity="0.2"
        opacityMD="1"
      >
        {theme === "niepodleglosci" ? <BgRedSVG /> : <BgGreenSVG />}
      </Box>
      <Box
        width="202px"
        position="absolute"
        bottom="0"
        left="0"
        zIndex="1"
        opacity="0.2"
        opacityMD="1"
      >
        {theme === "niepodleglosci" ? <BgRedSVG2 /> : <BgGreenSVG2 />}
      </Box>
      <Container position="relative" zIndex="1">
        <Box column width="100%">
          <Box column>
            <Heading
              size="h600"
              sizeMD="h700"
              sizeLG="h800"
              align="center"
              alignMD="left"
              margin="0 0 24px"
            >
              Medale i koszulki
            </Heading>
            <Text
              size="contentL"
              max="1031px"
              margin="0 0 40px"
              marginMD="0 0 80px"
            >
              Trwają zgłoszenia do 6 edycji gryfińskiego Transgranicznego
              Festiwalu Biegowego. Przy okazji „pęknięcia” pierwszej setki
              zgłoszeń mamy okazję zaprezentować projekty medali i koszulki
              jakie otrzymają uczestnicy naszych zawodów. Nie trudno się
              domyśleć, że projekty nawiązują do aktualnej sytuacji w
              bezpośrednim sąsiedztwie naszego kraju obok których jakże ciężko
              przejść obojętnie.
            </Text>
          </Box>
          <Box column margin="0 0 40px" marginMD="0 0 80px">
            <Heading
              size="h600"
              align="center"
              alignMD="left"
              margin="0 0 24px"
            >
              Medale podczas 6. Gryfińskiego Transgranicznego Festiwalu
              Biegowego
            </Heading>
            <Box gap="24px" wrap="wrap">
              <Box grow="1" gap="24px" wrap="wrap">
                <Box
                  grow="1"
                  padding="34px"
                  borderWidth="1px"
                  borderColor="grey90"
                  radius="8px"
                >
                  <StaticImage src="../../../images/medal-1.png" />
                </Box>
                <Box
                  grow="1"
                  padding="34px"
                  borderWidth="1px"
                  borderColor="grey90"
                  radius="8px"
                >
                  <StaticImage src="../../../images/medal-2.png" />
                </Box>
              </Box>
              <Box grow="1" gap="24px" wrap="wrap">
                <Box
                  grow="1"
                  padding="34px"
                  borderWidth="1px"
                  borderColor="grey90"
                  radius="8px"
                >
                  <StaticImage src="../../../images/medal-3.png" />
                </Box>
                <Box
                  grow="1"
                  padding="34px"
                  borderWidth="1px"
                  borderColor="grey90"
                  radius="8px"
                >
                  <StaticImage src="../../../images/medal-4.png" />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box column>
            <Heading
              size="h600"
              align="center"
              alignMD="left"
              margin="0 0 24px"
            >
              Koszulka
            </Heading>
            <Box grow="1" gap="24px" wrap="wrap">
              <Box
                grow="1"
                backgroundColor="white"
                borderWidth="1px"
                borderColor="grey90"
                radius="8px"
                padding="34px"
                onClick={() => handleClick("koszulka-przód", 1)}
              >
                <StaticImage src="../../../images/koszulka-przod.png" />
              </Box>
              <Box
                grow="1"
                backgroundColor="white"
                borderWidth="1px"
                borderColor="grey90"
                radius="8px"
                padding="34px"
                onClick={() => handleClick("koszulka-tył", 1)}
              >
                <StaticImage src="../../../images/koszulka-tyl.png" />
              </Box>
            </Box>
          </Box>
        </Box>
        <Portal>
          <Modal
            isOpenFromParent={isOpenModal}
            handleCloseModal={handleCloseModal}
          >
            <Box height="80%" width="80%">
              <StaticImage src="../../../images/koszulka-przod.png" />
            </Box>
          </Modal>
        </Portal>
      </Container>
    </Component>
  )
}

export default Rewards
