import { Box, Button, Container, Paper, Typography } from "@mui/material";
import Link from '../../components/atoms/Link';
import Grid2 from "@mui/material/Unstable_Grid2";
import React from "react";
import BannerPage from "../../components/layouts/BannerPage";
import { WebGLGlobe } from "../../components/molecules/WebGLGlobe";
import Ticker from "react-ticker";
import { SpeakerGrid } from "../../components/molecules/SpeakerGrid";
import { speakerList } from "../Speakers/Speakers";

type BannerTextProps = { children: React.ReactNode }
const BannerText = ({ children }: BannerTextProps) => {
    return (
        <Typography
            fontFamily='Six Caps, Roboto Condensed, "sans-serif"'
            fontSize={120}
            lineHeight={1}
            color='rgb(210,168,61)'
        >{children}</Typography>
    )
}

const Banner = () => {
    return (
        <>
            <Box sx={{ position: 'relative', backgroundColor: 'background.default' }}>
                <WebGLGlobe boxProps={{ sx: { height: { sm: "200px", md: "800px" }, width: '100%' } }} />
                <Box
                    display='flex'
                    alignItems='center'
                    sx={{ position: 'absolute', top: 0, height: '100%', width: '100%', }}>
                    <Container>
                        <Grid2 container spacing={2} sx={{ px: 15 }}>
                            <Grid2 xs={12} sm={6}>
                                <BannerText>Global</BannerText>
                                <BannerText>Earth</BannerText>
                                <BannerText>Repair</BannerText>
                                <BannerText>Summit</BannerText>
                            </Grid2>
                            <Grid2 xs={12} sm={6} textAlign="right">
                                <BannerText>Restore</BannerText>
                                <BannerText>Rewild</BannerText>
                                <BannerText>Renew</BannerText>
                                <Typography variant="h5" fontWeight="300" sx={{ mt: 2 }}>Oct 21 - 24, Online</Typography>
                                <Box>
                                    <Button variant="contained" size="large" sx={{ px: 3, py: 2, mt: 2 }} >
                                        <Typography fontSize="1.25rem">
                                            <Link to="/register-type">Register Now</Link>
                                        </Typography>
                                    </Button>
                                </Box>
                                <Box>
                                    <Button variant="contained" size="large" sx={{ px: 3, py: 2, mt: 2 }} >
                                        <Typography fontSize="1.25rem">
                                            <Link to="/register-type">Volunteer</Link>
                                        </Typography>
                                    </Button>
                                </Box>
                            </Grid2>
                        </Grid2>
                    </Container>
                </Box>
            </Box>
            <Box sx={{
                py: 2,
                borderTop: "1px solid white",
                width: '100vw',
                backgroundColor: 'background.default'
            }}>
                <Container>
                    <Typography variant="caption">
                        An Online Ecosystem Restoration Conference by <Link underline to="https://globalearthrepairfoundation.org">GERF</Link>
                    </Typography>
                </Container>
            </Box>
        </>
    )
}




/**
 * Alternate Copy
 * Convening restoration practitioners to network, share practical information, collaborate, celebrate our work, scale up local action, and build the global movement.
 */

const About = () => {
    return (
        <Box sx={{ color: "#3187DE" }}>
            <Grid2 container spacing={2}>
                <Grid2 xs={12} sm={6} sx={{
                    backgroundImage: 'url("https://ltfowyvtpuhuazsxpcvn.supabase.co/storage/v1/object/public/public-images/newforestfarm.jpeg")',
                    backgroundPosition: "center",
                    minHeight: "400px"
                }}>
                </Grid2>
                <Grid2 xs={12} sm={6} sx={{ pr: 10, pl: 6, py: 6 }}>
                    <Typography variant="h6" sx={{ mb: 4 }}>About the Event</Typography>
                    <Typography fontSize="1.75rem" lineHeight="1.75rem" fontWeight="400" sx={{ mb: 3 }}>
                        BRINGING TOGETHER & SERVING THE GLOBAL GRASSROOTS ECO-RESTORATION MOVEMENT
                    </Typography>
                    <Typography sx={{ color: "#000", mb: 2 }} variant="h6" fontWeight="700" >
                        We want to restore ecosystems. And you're invited to join us.
                    </Typography>
                    <Typography sx={{ color: "#000", mb: 2 }}>
                        <Typography display="inline" sx={{ fontWeight: 700 }}>October 21-22</Typography> will be dedicated to keynote speakers, workshops and small group sessions. All presentations and workshops will take place on Zoom.
                    </Typography>
                    <Typography sx={{ color: "#000", mb: 2 }}>
                        <Typography display="inline" sx={{ fontWeight: 700 }}>October 23</Typography> in-person actions will be taking place around the globe. We will be broadcasting livestreams of these in-person events for you to watch along. Or, you can start your own!
                    </Typography>
                    <Typography sx={{ color: "#000", mb: 2 }}>
                        <Typography display="inline" sx={{ fontWeight: 700 }}>October 24</Typography> is dedicated to crafting an International Plan of Action to present to the world.
                    </Typography>
                </Grid2>
            </Grid2>
        </Box>
    )
}

const features = ["Live Q&A", "Interactive Sessions", "Livestream restoration projects from around the globe", "Engaging workshops & applicable sessions", "Breakout groups for focused discussion", "Learn from world leaders in ecosystem restoration"]
type FeatureProps = { children: React.ReactNode }
const FeatureItem = ({ children }: FeatureProps) => {
    return (
        <Typography
            variant="h5"
            fontWeight="300"
            sx={{ mb: 2 }}
        >
            {children}
        </Typography>
    )
}

const Features = () => {
    return (
        <Box sx={{
            backgroundColor: "rgb(0,30,60)",
            color: "#fff",
            py: 10,
            px: 10
        }}>
            <Paper sx={{ p: 4 }}>
                <Grid2 container spacing={4}>
                    <Grid2 xs={12} md={7} sx={{pr:4}}>
                        <ul>
                            {
                                features.map((feature) => {
                                    return (
                                        <li><FeatureItem>{feature}</FeatureItem></li>
                                    )
                                })
                            }
                        </ul>
                    </Grid2>
                    <Grid2 xs={12} md={5} sx={{
                        backgroundImage: "url('https://globalearthrepairfoundation.org/wp-content/uploads/2022/03/navivillage-galeria-02a.jpg')",
                        backgroundPosition: 'center',
                        minHeight: "400px",
                        borderRadius: "3px"
                    }}>
                    </Grid2>
                </Grid2>
            </Paper>
        </Box>
    )
}

const Splash = () => {
    return (
        <BannerPage banner={<Banner />} sx={{
            backgroundColor: "#fff",
        }}>
            <About />
            <Features />
            <Box sx={{ backgroundColor: "#3187DE", py: 10 }}>
                <Container sx={{ pb: 4 }}>
                    <Typography
                        sx={{ pb: 4 }}
                        textAlign="center"
                        fontSize={120}
                        fontFamily='Six Caps, Roboto Condensed, "sans-serif"'
                    >
                        Speakers
                    </Typography>
                    <SpeakerGrid speakers={speakerList} />
                    <Typography variant="h3" fontWeight="300" textAlign="center" sx={{ pt: 2 }}>
                        <Link underline to="/speakers">And many more</Link>
                    </Typography>
                </Container>
            </Box>

        </BannerPage>
    )
}

export default Splash;