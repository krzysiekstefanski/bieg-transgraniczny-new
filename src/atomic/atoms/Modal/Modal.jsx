import React, { useState, useEffect, useRef } from "react"
import Box from "../../atoms/Box/Box"

const Modal = ({ children, isOpenFromParent, handleCloseModal }) => {
  const [isOpen, setIsOpen] = useState(false)
  const modalRef = useRef()

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = e => {
    setIsOpen(false)
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
      display="none"
      displaySM="flex"
      justify="center"
      align="center"
      height="100vh"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="999"
    >
      <Box height="100vh" width="100%" backgroundColor="white" />

      {children}
    </Box>
  ) : null
}

export default Modal
