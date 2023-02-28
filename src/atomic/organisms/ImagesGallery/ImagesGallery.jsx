import React, { useRef, useEffect, useCallback, useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { checkColor } from "../../utils"
import Box from "../../atoms/Box/Box"
import Button from "../../atoms/Button/Button"
import Portal from "../../atoms/Portal/Portal"
import Modal from "../../atoms/Modal/Modal"
import ArrowRightSVG from "../../../images/arrow-right.inline.svg"
import ArrowLeftSVG from "../../../images/arrow-left.inline.svg"
import CancelSVG from "../../../images/cancel.inline.svg"
import { colors } from "../../colors"

const Component = styled(Box)`
  div > div {
    overflow: hidden;
    border-radius: 8px;
    position: relative;
    cursor: pointer;

    ::before {
      content: "";
      background-color: transparent;
      background-position: bottom center;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 2;
      transition: background-color 0.3s ease, background-position 0.3s ease;
    }

    &:hover {
      ::before {
        background-color: rgba(
          ${props =>
            props.theme
              ? checkColor(props.theme + "00", true)
              : checkColor("transgraniczny00", true)},
          0.7
        );
        background-image: url("/images/magnifying-glass.svg");
        background-position: center center;
        background-repeat: no-repeat;
      }
    }
  }
`

const CancelButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 4px;
  position: absolute;
  top: 2%;
  right: 2%;
  cursor: pointer;
  apperance: none;

  svg g {
    stroke: ${colors.white};
  }
`

const ArrowLeftButton = styled(Button)`
  width: 60px;
  height: 60px;
  border-radius: 4px;
  position: absolute;
  top: calc(50% - 30px);
  left: 2%;
  cursor: pointer;
  apperance: none;

  svg path {
    stroke: ${colors.white};
  }
`

const ArrowRightButton = styled(Button)`
  width: 60px;
  height: 60px;
  border-radius: 4px;
  position: absolute;
  top: calc(50% - 30px);
  right: 2%;
  cursor: pointer;
  apperance: none;

  svg path {
    stroke: ${colors.white};
  }
`

const ImagesGallery = ({ theme, images }) => {
  const [clickedImage, setClickedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(null)
  const [isOpenModal, setIsOpenModal] = useState(false)
  //const body =
  //typeof document !== `undefined` ? document.querySelector("body") : null

  const handleClick = (item, index) => {
    setCurrentIndex(index)
    setClickedImage(item)
    setIsOpenModal(true)
    //body.classList.add("open-modal")
  }

  const handleCloseModal = () => {
    setIsOpenModal(false)
    //body.classList.remove("open-modal")
  }

  const handleRightArrowClick = () => {
    if (currentIndex !== images.length) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setCurrentIndex(0)
    }
  }

  const handleLeftArrowClick = () => {
    if (currentIndex !== 0) {
      setCurrentIndex(currentIndex - 1)
    } else {
      setCurrentIndex(images.length)
    }
  }

  const useEscapeKey = () => {
    const handleEscKey = useCallback(
      event => {
        if (event.key === "Escape") {
          handleCloseModal()
        }
      },
      [handleCloseModal]
    )

    useEffect(() => {
      if (isOpenModal) {
        document.addEventListener("keyup", handleEscKey, false)
      }

      return () => {
        document.removeEventListener("keyup", handleEscKey, false)
      }
    }, [isOpenModal])
  }

  useEscapeKey()

  return (
    <Component theme={theme}>
      <Box width="100%" grow="1" gap="24px" wrap="wrap">
        {images.map((image, index) => (
          <Box
            key={index}
            onClick={() => handleClick(image, index)}
            width="100%"
            widthSM="calc(50% - 12px)"
            widthMD="calc(33% - 14px)"
            widthXL="calc(33% - 12px)"
            style={{ aspectRatio: "16/10" }}
          >
            <img src={image} style={{ objectFit: "contain" }} />
          </Box>
        ))}
      </Box>
      <Portal>
        <Modal
          isOpenFromParent={isOpenModal}
          handleCloseModal={handleCloseModal}
        >
          <Box
            maxHeight="80%"
            width="80%"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
          >
            <Box
              width="100%"
              backgroundColor="black"
              radius="8px"
              overflow="hidden"
            >
              <img
                src={images[currentIndex]}
                alt={clickedImage}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>
          <ArrowRightButton
            variant={theme}
            padding="0"
            onClick={handleRightArrowClick}
          >
            <ArrowRightSVG />
          </ArrowRightButton>
          <ArrowLeftButton
            variant={theme}
            padding="0"
            onClick={handleLeftArrowClick}
          >
            <ArrowLeftSVG />
          </ArrowLeftButton>
          <CancelButton variant={theme} padding="0" onClick={handleCloseModal}>
            <CancelSVG />
          </CancelButton>
        </Modal>
      </Portal>
    </Component>
  )
}

export default ImagesGallery
