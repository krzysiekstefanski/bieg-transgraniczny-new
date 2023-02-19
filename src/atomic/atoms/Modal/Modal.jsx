import React, { useState, useEffect, useRef } from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"
import Box from "../../atoms/Box/Box"

const Modal = ({ children, isOpenFromParent, handleCloseModal }) => {
  const [isOpen, setIsOpen] = useState(true)
  const modalRef = useRef()

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = e => {
    setIsOpen(false)
    if (handleCloseModal) {
      handleCloseModal()
    }
  }

  useEffect(() => {
    if (isOpenFromParent) {
      openModal()
    } else {
      closeModal()
    }
  }, [isOpenFromParent])

  return isOpen ? (
    <Box
      ref={modalRef}
      justify="center"
      align="center"
      height="100vh"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="999"
    >
      <Box
        height="100vh"
        width="100%"
        backgroundColor="rgba(255,255,255,0.5)"
        onClick={e => closeModal(e)}
      />

      {children}
    </Box>
  ) : null
}

export default Modal
