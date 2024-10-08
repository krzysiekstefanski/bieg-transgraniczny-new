import React, { useEffect, useState } from "react"
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
    cursor: pointer;
  }
`

const ImageWrapper = styled(Box)`
  width: 100%;
  background-color: white;
  border-radius: 8px;
  position: relative;
  border-width: ${props =>
    props.imagesOptions ? props.imagesOptions.borderWidth : ""};
  border-color: ${props =>
    props.imagesOptions ? props.imagesOptions.borderColor : ""};
  padding: ${props => (props.imagesOptions ? props.imagesOptions.padding : "")};

  @media (min-width: 576px) {
    width: ${props => (props.columns > 1 ? `calc(50% - 12px)` : "100%")};
  }

  @media (min-width: 768px) {
    width: ${props =>
      props.columns > 1
        ? `calc((100% / ${props.columns}) - (${props.columns - 1} * 24px / ${
            props.columns
          }))`
        : "100%"};
  }
`

const InnerImageWrapper = styled(Box)`
  width: 100%;
  position: relative;

  &::after {
    content: "";
    background-color: transparent;
    background-position: center bottom;
    position: absolute;
    inset: 0px;
    z-index: 2;
    transition: background-color 0.3s, background-position 0.3s;
  }

  &::before {
    content: "";
    width: 100%;
    padding-top: 60%;
  }

  img {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }

  &:hover {
    &::after {
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

const ImagesGallery = ({ theme, images, imagesOptions, columns = 1 }) => {
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
    if (currentIndex !== images.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setCurrentIndex(0)
    }
  }

  const handleLeftArrowClick = () => {
    if (currentIndex !== 0) {
      setCurrentIndex(currentIndex - 1)
    } else {
      setCurrentIndex(images.length - 1)
    }
  }

  const handleKey = event => {
    if (event.key === "Escape") {
      handleCloseModal()
    }

    if (event.key === "ArrowLeft") {
      handleLeftArrowClick()
    }

    if (event.key === "ArrowRight") {
      handleRightArrowClick()
    }
  }

  useEffect(() => {
    if (isOpenModal) {
      document.addEventListener("keyup", handleKey)
    }

    return () => {
      document.removeEventListener("keyup", handleKey)
    }
  }, [isOpenModal, currentIndex])

  return (
    <Component theme={theme} width="100%">
      <Box width="100%" grow="1" gap="24px" wrap="wrap">
        {images.map((image, index) => (
          <ImageWrapper
            key={index}
            onClick={() => handleClick(image, index)}
            imagesOptions={imagesOptions}
            columns={columns}
          >
            <InnerImageWrapper theme={theme}>
              <img
                src={image}
                style={{ objectFit: imagesOptions?.imageFit ?? "contain" }}
              />
            </InnerImageWrapper>
          </ImageWrapper>
        ))}
      </Box>
      <Portal>
        <Modal
          isOpenFromParent={isOpenModal}
          handleCloseModal={handleCloseModal}
        >
          <Box
            maxHeight="100%"
            width="80%"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            padding="25px 0"
          >
            <Box width="100%" radius="8px" overflow="hidden">
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
          {images.length > 1 && (
            <>
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
            </>
          )}
          <CancelButton variant={theme} padding="0" onClick={handleCloseModal}>
            <CancelSVG />
          </CancelButton>
        </Modal>
      </Portal>
    </Component>
  )
}

export default ImagesGallery
