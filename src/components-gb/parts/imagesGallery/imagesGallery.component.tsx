import React, { useEffect, useState } from "react";

import {
	Component,
	Wrapper,
	ImageWrapper,
	InnerImageWrapper,
	ModalImageWrapper,
	ModalInnerImageWrapper,
	ArrowRightButton,
	ArrowLeftButton,
	CancelButton,
	Button,
} from "./imagesGallery.styled";
import { ImagesGalleryProps } from "./imagesGallery.types";
import { Icon, Modal, Portal } from "../../single";
import { GatsbyImage } from "gatsby-plugin-image";

export const ImagesGallery: React.FC<ImagesGalleryProps> = (
	props: ImagesGalleryProps
): JSX.Element => {
	const {
		className,
		images,
		columns,
		eventTheme,
		isImageContain = false,
	}: ImagesGalleryProps = props;
	const initialMaxShowImages = 9;
	const [clickedImage, setClickedImage] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);
	const [maxShowImages, setMaxShowImages] = useState(initialMaxShowImages);
	const [isOpenModal, setIsOpenModal] = useState(false);

	const handleClick = (item: string, index: number) => {
		setCurrentIndex(index);
		setClickedImage(item);
		setIsOpenModal(true);
	};

	const handleCloseModal = () => {
		setIsOpenModal(false);
	};

	const handleRightArrowClick = () => {
		if (currentIndex !== images.length - 1) {
			setCurrentIndex(currentIndex + 1);
		} else {
			setCurrentIndex(0);
		}
	};

	const handleLeftArrowClick = () => {
		if (currentIndex !== 0) {
			setCurrentIndex(currentIndex - 1);
		} else {
			setCurrentIndex(images.length - 1);
		}
	};

	const handleKey = (event) => {
		if (event.key === "Escape") {
			handleCloseModal();
		}

		if (event.key === "ArrowLeft") {
			handleLeftArrowClick();
		}

		if (event.key === "ArrowRight") {
			handleRightArrowClick();
		}
	};

	useEffect(() => {
		if (isOpenModal) {
			document.addEventListener("keyup", handleKey);
		}

		return () => {
			document.removeEventListener("keyup", handleKey);
		};
	}, [isOpenModal, currentIndex]);

	const maxImages = images.length;

	return (
		<Component className={className} eventTheme={eventTheme}>
			<Wrapper>
				{images.map(
					(image: any, index: number) =>
						index < maxShowImages && (
							<ImageWrapper
								key={index}
								onClick={() => handleClick(image, index)}
								$columns={columns}
								$eventTheme={eventTheme}
							>
								<InnerImageWrapper>
									<GatsbyImage
										image={
											image.localFile.childrenImageSharp[0].gatsbyImageData
										}
										alt={"hero image"}
										objectPosition={"50% 50%"}
										objectFit={isImageContain ? "contain" : "cover"}
									/>
								</InnerImageWrapper>
							</ImageWrapper>
						)
				)}
			</Wrapper>
			<Portal>
				<Modal
					isOpenFromParent={isOpenModal}
					handleCloseModal={handleCloseModal}
				>
					<ModalImageWrapper>
						<ModalInnerImageWrapper>
							<GatsbyImage
								image={
									images[currentIndex].localFile.childrenImageSharp[0]
										.gatsbyImageData
								}
								alt={"hero image"}
								objectPosition={"50% 50%"}
								objectFit={"contain"}
							/>
						</ModalInnerImageWrapper>
					</ModalImageWrapper>
					{images.length > 1 && (
						<>
							<ArrowRightButton
								onClick={handleRightArrowClick}
								$eventTheme={eventTheme}
							>
								<Icon
									icon={"arrow-right-1"}
									height={60}
									width={44}
									animation='none'
								/>
							</ArrowRightButton>
							<ArrowLeftButton
								onClick={handleLeftArrowClick}
								$eventTheme={eventTheme}
							>
								<Icon
									icon={"arrow-left-1"}
									height={60}
									width={44}
									animation='none'
								/>
							</ArrowLeftButton>
						</>
					)}
					<CancelButton onClick={handleCloseModal} $eventTheme={eventTheme}>
						<Icon icon={"close-1"} size={30} animation='none' />
					</CancelButton>
				</Modal>
			</Portal>
			{maxImages > 9 && (
				<Button
					onClick={() =>
						maxShowImages >= maxImages
							? setMaxShowImages(9)
							: setMaxShowImages(maxShowImages + 9)
					}
				>
					{maxShowImages >= maxImages ? "Mniej zdjęć" : "Więcej zdjęć"}
				</Button>
			)}
		</Component>
	);
};

export default ImagesGallery;
