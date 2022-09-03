import { Typography } from "@mui/material"
import { theme } from "../../styling/theme"

export const PageTitle = ({ children, sx }: any) => {
    return (
        <Typography
            sx={{
                pb: 4,
                fontSize:{
                    xs: 60,
                    sm: 120
                },
                "-webkit-text-stroke-width": "4px",
                "-webkit-text-stroke-color": theme.palette.secondary.main,
                ...sx
            }}
            textAlign="center"
            fontFamily='Blackriver Bold, Roboto Condensed, "sans-serif"'
        >{children}</Typography>
    )
}