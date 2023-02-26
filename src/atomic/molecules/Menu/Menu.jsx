import React, { useState, useEffect } from "react"
import Box from "../../atoms/Box/Box"
import Hamburger from "../../atoms/Hamburger/Hamburger"
import Navigation from "../../molecules/Navigation/Navigation"
import { colors } from "../../colors"

const menu = [
  {
    icon: "home",
    text: "Home",
    link: "",
  },
  {
    icon: "zapisy",
    text: "Zapisy",
    link: "zapisy",
  },
  {
    icon: "lista-startowa",
    text: "Lista Startowa",
    link: "lista-startowa",
  },
  {
    icon: "regulamin",
    text: "Regulamin",
    link: "regulamin",
  },
  {
    icon: "kontakt",
    text: "Kontakt",
    link: "kontakt",
  },
]

const Menu = ({ theme }) => {
  const [hamburgerIsActive, setHamburgerIsActive] = useState(false)

  const handleClick = () => {
    setHamburgerIsActive(!hamburgerIsActive)
  }

  console.log(colors.transgraniczny00)
  console.log(colors.transgraniczny20)
  console.log(colors.transgraniczny40)
  console.log(colors.transgraniczny60)
  console.log(colors.transgraniczny80)
  console.log(colors.transgraniczny100)

  return (
    <Box>
      <Hamburger
        theme={theme}
        hamburgerClick={handleClick}
        active={hamburgerIsActive}
      />
      <Navigation theme={theme} items={menu} active={hamburgerIsActive} />
    </Box>
  )
}

export default Menu
