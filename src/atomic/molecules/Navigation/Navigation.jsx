import * as React from "react"
import { Link } from "gatsby"
import Box from "../../atoms/Box/Box"
import Button from "../../atoms/Button/Button"
import NavItem from "../../molecules/NavItem/NavItem"

const Navigation = ({ items, active }) => (
    <Box as="nav" display={active ? "flex" : "none"} displayLG="flex" width="100%" widthSM="auto" column directionLG="row" backgroundColor="white" shadow="sm" shadowLG="none" position="absolute" positionLG="static" top="104px" right="0" padding="20px" paddingLG="0">
        <Box column directionLG="row" min="320px">
            {items.map(item => (
                <NavItem item={item} />
            ))}
        </Box>
        <Button as={Link} variant="green" margin="24px 0 0" marginLG="0">Zapisz się</Button>
    </Box>
)

export default Navigation