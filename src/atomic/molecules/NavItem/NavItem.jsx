import * as React from "react"
import { Link } from "gatsby"
import Box from "../../atoms/Box/Box"
import Text from "../../atoms/Text/Text"
import Icon from "../../atoms/Icon/Icon"

const NavItem = ({ theme, item }) => (
  <Box
    as={Link}
    to={"/bieg" + theme + "/" + item.link}
    align="center"
    padding="8px 0"
    paddingLG="4px 0"
    marginXL="0 40px 0 0"
    margin="0 24px 0 0"
  >
    <Icon name={item.icon} fill={theme + "00"} />
    <Text family="Bai Jamjuree" weight="500" margin="0 0 0 8px">
      {item.text}
    </Text>
  </Box>
)

export default NavItem
