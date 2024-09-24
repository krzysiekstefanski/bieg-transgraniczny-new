import React, { useEffect, useState } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
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

    &::after {
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
      ::after {
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

  div div > div {
    position: relative;

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
  const [currentIndex, setCurrentIndex] = useState(0)
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
      {console.log(images)}
      <Box width="100%" grow="1" gap="24px" wrap="wrap">
        {Array.isArray(images) ? (
          images.map((image, index) => (
            <Box
              key={index}
              onClick={() => handleClick(image, index)}
              width="100%"
              widthSM={columns > 1 ? `calc(50% - 12px)` : "100%"}
              widthMD={
                columns > 1
                  ? `calc((100% / ${columns}) - (${
                      columns - 1
                    } * 24px / ${columns}))`
                  : "100%"
              }
              backgroundColor="white"
              radius="8px"
              position="relative"
              borderWidth={imagesOptions?.borderWidth}
              borderColor={imagesOptions?.borderColor}
              padding={imagesOptions?.padding}
            >
              <Box width="100%">
                {/* <GatsbyImage
                  image={image.localFile.childrenImageSharp[0].gatsbyImageData}
                  alt={"hero image"}
                  objectPosition={"50% 50%"}
                /> */}
              </Box>
            </Box>
          ))
        ) : (
          <Box
            onClick={() => handleClick(images, 0)}
            width="100%"
            widthSM={columns > 1 ? `calc(50% - 12px)` : "100%"}
            widthMD={
              columns > 1
                ? `calc((100% / ${columns}) - (${
                    columns - 1
                  } * 24px / ${columns}))`
                : "100%"
            }
            backgroundColor="white"
            radius="8px"
            position="relative"
            borderWidth={imagesOptions?.borderWidth}
            borderColor={imagesOptions?.borderColor}
            padding={imagesOptions?.padding}
          >
            <Box width="100%">
              {/* <GatsbyImage
                image={images.localFile.childImageSharp.gatsbyImageData}
                alt={"hero image"}
                objectPosition={"50% 50%"}
              /> */}
            </Box>
          </Box>
        )}
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
              {/* <img
                src={images[currentIndex]}
                alt={clickedImage}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              /> */}
              {/* {Array.isArray(images) ? (
                <GatsbyImage
                  image={
                    images[currentIndex].localFile.childrenImageSharp[0]
                      .gatsbyImageData
                  }
                  alt={"hero image"}
                  objectPosition={"50% 50%"}
                />
              ) : (
                <GatsbyImage
                  image={images.localFile.childImageSharp.gatsbyImageData}
                  alt={"hero image"}
                  objectPosition={"50% 50%"}
                />
              )} */}
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
