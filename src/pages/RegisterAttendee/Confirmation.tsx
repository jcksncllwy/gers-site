import { Box, Typography } from "@mui/material"

export const Confirmation = () => {
    return(
    <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h4">Thanks for registering!</Typography>
        <Typography variant="h6">We look forward to seeing you</Typography>
    </Box>
    )
}