import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Box from "../../atoms/Box/Box"



const Modal = ({ children, isOpenFromParent, handleCloseModal }) => {
    const [isOpen, setIsOpen] = useState(true);

    const openModal = () => {
        console.log("openModal")
        setIsOpen(true);
        console.log(isOpen)
    }

    const closeModal = () => {
        console.log("closeModal")
        setIsOpen(false);
        console.log(isOpen)
        console.log(handleCloseModal)
        if (handleCloseModal) {
            handleCloseModal();
        }

    }

    useEffect(() => {
        console.log("useEffect");
        console.log(isOpenFromParent)
        if (isOpenFromParent) {
            openModal();
        } else {
            closeModal();
        }
    }, [isOpenFromParent])

    console.log(isOpen);
    return (
        isOpen ?
            <Box justify="center" align="center" height="100vh" backgroundColor="rgba(255,255,255,0.5)" position="fixed" top="0" left="0" right="0" zIndex="999" onClick={closeModal}>{children}</Box>
            : null
    )
}

export default Modal