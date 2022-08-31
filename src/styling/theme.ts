import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: 'rgb(0, 30, 60)',
            paper: 'rgb(0, 30, 60)'
        },
        secondary:{
            light: "#dbb963",
            main: "rgb(210,168,61)",
            dark: "#af8928",
        }
    },
});