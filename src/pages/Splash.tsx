import { Box, Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import React from "react";
import BannerPage from "../components/layouts/BannerPage";
import StarField from "../components/molecules/StarField";
import { WebGLGlobe } from "../components/molecules/WebGLGlobe";

type BannerTextProps = { children: React.ReactNode }
const BannerText = ({ children }: BannerTextProps) => {
    return (
        <Typography
            fontFamily='Six Caps, Roboto Condensed, "sans-serif"'
            fontSize={140}
            lineHeight={1}
        >{children}</Typography>
    )
}

const Banner = () => {
    return (
        <Box sx={{ position: 'relative' }}>
            <StarField sx={{ height: { sm: "200px", md: "600px" } }} />
            <WebGLGlobe boxProps={{ sx: { position: 'absolute', top: 0, height: { sm: "200px", md: "600px" } } }} />
            <Box
                display='flex'
                alignItems='center'
                sx={{ position: 'absolute', top: 0, width: '100%', height: '100%' }}>
                <Container>
                    <Grid2 container spacing={2}>
                        <Grid2 xs={12} sm={6}>
                            <BannerText>Global</BannerText>
                            <BannerText>Earth</BannerText>
                            <BannerText>Repair</BannerText>
                            <BannerText>Summit</BannerText>
                        </Grid2>
                    </Grid2>
                </Container>
            </Box>
        </Box>
    )
}

const Splash = () => {
    return (
        <BannerPage banner={<Banner />}>
        </BannerPage>
    )
}

export default Splash;