import * as React from "react"
import Box from "../../atoms/Box/Box"

const Container = ({ children }) => (
    <Box justify="space-between" align="center" width="100%" max="1272px" padding="0 16px" margin="0 auto">
        {children}
    </Box>
)

export default Container