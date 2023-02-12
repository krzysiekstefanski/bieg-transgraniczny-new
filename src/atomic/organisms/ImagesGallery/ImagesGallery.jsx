import React, { useRef, useEffect, useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components";
import { checkColor } from "../../utils";
import Box from "../../atoms/Box/Box"
import Portal from "../../atoms/Portal/Portal"
import Modal from "../../atoms/Modal/Modal"
import ArrowRightSVG from "../../../images/arrow-right.inline.svg"

const Component = styled(Box)`
    div > div {
        overflow: hidden;
        border-radius: 8px;
        position: relative;
        cursor: pointer;

        ::before {
            content: '';
            background-color: transparent;
            background-position: bottom center;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 2;
            transition: background-color .3s ease, background-position .3s ease;
        }

       &:hover {
        ::before {
            background-color: rgba(${checkColor('transgraniczny00', true)}, 0.7);
            background-image: url('/images/magnifying-glass.svg');
            background-position: center center;
            background-repeat: no-repeat;
        }
       }
    }
`

const ImagesGallery = ({ images }) => {
    const [clickedImage, setClickedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const galleryRef = useRef();
    const body = typeof document !== `undefined` ? document.querySelector('body') : null;

    const handleClick = (item, index) => {
        console.log(isOpenModal)
        setCurrentIndex(index);
        setClickedImage(item);
        setIsOpenModal(true);
        console.log(clickedImage)
        console.log(currentIndex)
        console.log(isOpenModal)
        body.classList.add('open-modal');
    }

    const handleCloseModal = () => {
        setIsOpenModal(false);
        body.classList.remove('open-modal');
    }

    useEffect(() => {
        console.log(galleryRef.current)
    }, [])

    return (
        <Component>
            <Box ref={galleryRef} grow="1" gap="24px" wrap="wrap">
                {images.map((image, index) => (
                    <Box key={index} onClick={() => handleClick(image, index)} width="100%" widthSM="calc(50% - 12px)" widthMD="calc(33% - 14px)" widthXL="calc(33% - 12px)">
                        <img src={`https://picsum.photos/id/${index}/400/200`} />
                    </Box>
                ))}
                {/* <Box width="100%" widthSM="calc(50% - 12px)" widthMD="calc(33% - 16px)" radius="8px" overflow="hidden">
                    <StaticImage src="../../../images/gallery/gallery-1.jpg" />
                </Box>
                <Box width="100%" widthSM="calc(50% - 12px)" widthMD="calc(33% - 16px)" radius="8px" overflow="hidden">
                    <StaticImage src="../../../images/gallery/gallery-2.jpg" />
                </Box>
                <Box width="100%" widthSM="calc(50% - 12px)" widthMD="calc(33% - 16px)" radius="8px" overflow="hidden">
                    <StaticImage src="../../../images/gallery/gallery-3.jpg" />
                </Box>
                <Box width="100%" widthSM="calc(50% - 12px)" widthMD="calc(33% - 16px)" radius="8px" overflow="hidden">
                    <StaticImage src="../../../images/gallery/gallery-4.jpg" />
                </Box>
                <Box width="100%" widthSM="calc(50% - 12px)" widthMD="calc(33% - 16px)" radius="8px" overflow="hidden">
                    <StaticImage src="../../../images/gallery/gallery-5.jpg" />
                </Box>
                <Box width="100%" widthSM="calc(50% - 12px)" widthMD="calc(33% - 16px)" radius="8px" overflow="hidden">
                    <StaticImage src="../../../images/gallery/gallery-6.jpg" />
                </Box>
                <Box width="100%" widthSM="calc(50% - 12px)" widthMD="calc(33% - 16px)" radius="8px" overflow="hidden">
                    <StaticImage src="../../../images/gallery/gallery-7.jpg" />
                </Box>
                <Box width="100%" widthSM="calc(50% - 12px)" widthMD="calc(33% - 16px)" radius="8px" overflow="hidden">
                    <StaticImage src="../../../images/gallery/gallery-8.jpg" />
                </Box>
                <Box width="100%" widthSM="calc(50% - 12px)" widthMD="calc(33% - 16px)" radius="8px" overflow="hidden">
                    <StaticImage src="../../../images/gallery/gallery-9.jpg" />
                </Box> */}
            </Box>
            <Portal>
                <Modal isOpenFromParent={isOpenModal} handleCloseModal={handleCloseModal}>
                    <Box justify="center" align="center" width="100%" height="100%" position="relative">
                        <Box height="80%" width="80%">
                            <Box backgroundColor="black" radius="8px" overflow="hidden">
                                <img src={`https://picsum.photos/id/${currentIndex}/800/400`} alt={clickedImage} style={{ width: "100%", height: "auto", objectFit: "contain" }} />
                            </Box>
                        </Box>
                        <Box as="button"
                            width="44px"
                            height="60px" position="absolute" top="calc(50% - 30px)" right="2%" cursor="pointer">
                            <ArrowRightSVG />
                        </Box>
                        <Box as="button"
                            width="44px"
                            height="60px" position="absolute" top="calc(50% - 30px)" left="2%" cursor="pointer">
                            <ArrowRightSVG />
                        </Box>
                        <Box as="button"
                            width="44px"
                            height="60px" position="absolute" top="2%" right="2%" cursor="pointer">
                            <ArrowRightSVG />
                        </Box>
                    </Box>
                </Modal>
            </Portal>
        </Component>
    )
}

export default ImagesGallery