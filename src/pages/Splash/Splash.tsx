import { Box, Button, Container, ThemeProvider, Typography } from "@mui/material";
import Link from '../../components/atoms/Link';
import Grid2 from "@mui/material/Unstable_Grid2";
import React from "react";
import BannerPage from "../../components/layouts/BannerPage";
import StarField from "../../components/molecules/StarField";
import { WebGLGlobe } from "../../components/molecules/WebGLGlobe";
import Ticker from "react-ticker";
import { Speaker } from "./Speaker";

type BannerTextProps = { children: React.ReactNode }
const BannerText = ({ children }: BannerTextProps) => {
    return (
        <Typography
            fontFamily='Six Caps, Roboto Condensed, "sans-serif"'
            fontSize={120}
            lineHeight={1}
        >{children}</Typography>
    )
}

const Banner = () => {
    return (
        <Box sx={{ position: 'relative' }}>
            <StarField sx={{ height: { sm: "200px", md: "800px" } }} />
            <WebGLGlobe boxProps={{ sx: { position: 'absolute', top: 0, height: { sm: "200px", md: "800px" } } }} />
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
                        <Grid2 xs={12} sm={6} textAlign="right">
                            <BannerText>Heal</BannerText>
                            <BannerText>Earth</BannerText>
                            <BannerText>Together</BannerText>
                            <Typography variant="h5" fontWeight="300" sx={{ mt: 2 }}>Oct 21 - 24, Online</Typography>
                            <Button variant="contained" size="large" sx={{ px: 3, py: 2, mt: 2 }} >
                                <Typography fontSize="1.25rem">
                                    <Link to="/register">Register Now</Link>
                                </Typography>
                            </Button>
                        </Grid2>
                    </Grid2>
                    <Box sx={{
                        position: "absolute",
                        left: 0,
                        bottom: 0,
                        py: 2,
                        borderTop: "1px solid white",
                        width: '100vw'
                    }}>
                        <Container>
                            <Typography variant="caption">
                                An Online Ecosystem Restoration Conference by <Link underline to="https://globalearthrepairfoundation.org">GERF</Link>
                            </Typography>
                        </Container>
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}

const marqueeItems = ["Interactive Sessions", "Livestream restoration projects from around the globe", "Live Q&A", "Engaging workshops & applicable sessions", "Breakout groups for focused discussion", "Learn from world leaders in ecosystem restoration"]

const Splash = () => {
    return (
        <BannerPage banner={<Banner />} sx={{
            backgroundColor: "#fff",
        }}>
            <Box sx={{ color: "#3187DE" }}>
                <Box display="flex" alignItems="center">
                    <img src="https://www.smwllc.com/wp-content/uploads/2020/04/Zoom-Video-Call-on-Computer-Screen-Cartoon-825x550.jpg" />
                    <Container maxWidth="sm">
                        <Typography variant="h6" sx={{ mb: 4 }}>About the Event</Typography>
                        <Typography fontSize="1.75rem" lineHeight="1.75rem" fontWeight="400" sx={{ mb: 3 }}>
                            Convening restoration practitioners to network, share practical information, collaborate, celebrate our work, scale up local action, and build the global movement.
                        </Typography>
                        <Typography sx={{ color: "#000", mb: 2 }} variant="h6" fontWeight="700" >
                            We want to restore ecosystems. And you're invited to join us.
                        </Typography>
                        <Typography sx={{ color: "#000" }}>
                            We will meet October 21 - 24, 2022. The first two days will be dedicated to keynote speakers, workshops and small group sessions. All presentations and workshops will take place on Zoom.
                            On October 23, in-person actions will be taking place around the globe. We will be broadcasting livestreams of these in-person events for you to watch along. Or, you can start your own!
                        </Typography>
                    </Container>
                </Box>
            </Box>
            <Box sx={{
                backgroundColor: "rgb(0,30,60)",
                color: "#fff",
                py: 3
            }}>
                <Ticker>
                    {() => (
                        <>
                            <Typography variant="h5" fontWeight="300" noWrap>
                                {marqueeItems.map((item) => {
                                    return (
                                        <>
                                            <Box display="inline" sx={{ px: 4 }}>{item}</Box>
                                            <Box display="inline" sx={{ px: 4 }}>—</Box>
                                        </>
                                    )
                                })}
                            </Typography>
                        </>
                    )}
                </Ticker>
            </Box>
            <Box sx={{ backgroundColor: "#3187DE", py: 10 }}>
                <Container sx={{ pb: 4 }}>
                    <Typography sx={{pb: 4}} textAlign="center" fontSize={120} fontFamily='Six Caps, Roboto Condensed, "sans-serif"'>Speakers</Typography>
                    <Grid2 container spacing={4}>
                        <Grid2 xs={12} sm={4}>
                            <Speaker
                                imageURL="https://regenerationinternational.org/wp-content/uploads/2016/03/JDLHeadshot_HighRes.jpg"
                                name="John D. Liu"
                                title="Film Maker & Ecologist"
                                subtitle="Ecosystem Restoration Camps"
                            />
                        </Grid2>
                        <Grid2 xs={12} sm={4}>
                            <Speaker
                                imageURL="https://festival.artseverywhere.ca/wp-content/uploads/2019/05/Jeannette-ArmstrongSQ.png"
                                name="Jeannette Armstrong"
                                title="Author, Educator, Artist, Activist"
                                subtitle="Okanagan Nation, Canada"
                            />
                        </Grid2>
                        <Grid2 xs={12} sm={4}>
                            <Speaker
                                imageURL="https://returntoearth.land/wp-content/uploads/formidable/5/IMG_2893.jpg"
                                name={`Michael Pilarski`}
                                title="Wildcrafter & Founder"
                                subtitle="Global Earth Repair Foundation"
                            />
                        </Grid2>
                    </Grid2>
                </Container>
            </Box>

        </BannerPage>
    )
}

export default Splash;