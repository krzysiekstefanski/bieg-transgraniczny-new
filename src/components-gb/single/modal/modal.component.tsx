import React, { useState, useEffect, useRef } from "react";
import { Component, Overlay } from "./modal.styled";

export const Modal = ({ children, isOpenFromParent, handleCloseModal }) => {
	const [isOpen, setIsOpen] = useState(false);
	const modalRef = useRef();

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	useEffect(() => {
		if (isOpenFromParent) {
			openModal();
		} else {
			closeModal();
		}
	}, [isOpenFromParent]);

	return isOpen ? (
		<Component ref={modalRef}>
			<Overlay />
			{children}
		</Component>
	) : null;
};
