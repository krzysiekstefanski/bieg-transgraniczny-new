import React, { useState, useEffect } from "react"
import Box from "../../atoms/Box/Box"
import Hamburger from "../../atoms/Hamburger/Hamburger"
import Navigation from "../../molecules/Navigation/Navigation"

const menu = [
    {
        icon: 'home',
        text: 'Home',
        link: '/',
    },
    {
        icon: 'zapisy',
        text: 'Zapisy',
        link: 'zapisy',
    },
    {
        icon: 'lista-startowa',
        text: 'Lista Startowa',
        link: 'lista-startowa',
    },
    {
        icon: 'regulamin',
        text: 'Regulamin',
        link: 'regulamin',
    },
    {
        icon: 'kontakt',
        text: 'Kontakt',
        link: 'kontakt',
    },
]

const Menu = () => {
    const [hamburgerIsActive, setHamburgerIsActive] = useState(false)

    const handleClick = () => {
        console.log(hamburgerIsActive)
        setHamburgerIsActive(!hamburgerIsActive)
        console.log(hamburgerIsActive)
    }

    return (
        <Box>
            <Hamburger hamburgerClick={handleClick} active={hamburgerIsActive} />
            <Navigation items={menu} active={hamburgerIsActive} />
        </Box>
    )
}

export default Menu