import { Box, Button, Container, Paper, Typography } from "@mui/material";
import Link from '../../components/atoms/Link';
import Grid2 from "@mui/material/Unstable_Grid2";
import React from "react";
import BannerPage from "../../components/layouts/BannerPage";
import { WebGLGlobe } from "../../components/molecules/WebGLGlobe";
import { SpeakerGrid } from "../../components/molecules/SpeakerGrid";
import { speakerList } from "../Speakers/Speakers";
import { ColorButton } from "../../components/atoms/ColorButton";
import { volunteerFormURL } from "../../constants";

type BannerTextProps = { children: React.ReactNode }
const BannerText = ({ children }: BannerTextProps) => {
    return (
        <Typography
            fontFamily='Blackriver Bold, Roboto Condensed, "sans-serif"'
            fontSize={80}
            lineHeight={1.25}
            color='rgb(210,168,61)'
            sx={{
                " -webkit-text-stroke-width": "1px",
                "-webkit-text-stroke-color": "black"
            }}
        >{children}</Typography>
    )
}

const Banner = () => {
    return (
        <>
            <Box sx={{ position: 'relative', backgroundColor: 'background.default' }}>
                <WebGLGlobe boxProps={{ sx: { height: { xs: "400px", md: "800px" }, width: '100%' } }} />
                <Box
                    display='flex'
                    alignItems='center'
                    sx={{ position: 'absolute', top: 0, height: '100%', width: '100%', }}>
                    <Container sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <Box maxWidth="md">
                            <img src="https://ltfowyvtpuhuazsxpcvn.supabase.co/storage/v1/object/public/public-images/GERS%20Title%20and%20Date.png" />
                        </Box>
                        <Box textAlign="center">
                            <Button variant="contained" size="large" sx={{ px: 3, py: 2, mt: 2 }} >
                                <Typography fontSize="1.25rem">
                                    <Link to="/register-type">Register Now</Link>
                                </Typography>
                            </Button>

                            <Button href={volunteerFormURL} variant="contained" size="large" sx={{ px: 3, py: 2, mt: 2 }} >
                                <Typography fontSize="1.25rem">
                                    Volunteer
                                </Typography>
                            </Button>
                        </Box>
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
                    backgroundSize: "cover",
                    minHeight: "400px"
                }}>
                </Grid2>
                <Grid2 xs={12} sm={6} sx={{ pr: 10, pl: 6, py: 6 }}>
                    <Typography variant="h6" sx={{ mb: 4 }}>About the Event</Typography>
                    <Typography fontSize="1.75rem" lineHeight="1.75rem" fontWeight="400" fontFamily="Harabara Mais Demo" sx={{ mb: 3 }}>
                        Bringing together & serving the global grassroots eco-restoration movement
                    </Typography>
                    <Typography sx={{ color: "#000", mb: 2 }} variant="h6" fontFamily="Harabara Mais Demo" >
                        We invite you to join us for this 4-day hybrid event featuring online sessions and in-person actions
                    </Typography>
                    <Typography sx={{ color: "#000", mb: 2 }}>
                        <Typography display="inline" sx={{ fontWeight: 700 }}>October 21-22</Typography> Keynote speakers, workshops and small group sessions. All presentations and workshops will take place online.
                    </Typography>
                    <Typography sx={{ color: "#000", mb: 2 }}>
                        <Typography display="inline" sx={{ fontWeight: 700 }}>October 23</Typography> An in-person Day of Earth Repair Action will be taking place around the globe. We will broadcast live streams of these in-person events for you to follow along. Better yet, we encourage you to start your own!
                    </Typography>
                    <Typography sx={{ color: "#000", mb: 2 }}>
                        <Typography display="inline" sx={{ fontWeight: 700 }}>October 24</Typography> Coalescing and crafting an Global Earth Repair Action Plan to present to the world
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
            fontSize={32}
            fontFamily="Harabara Mais Demo"
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
            py: {
                xs: 1,
                sm: 10
            },
            px: {
                xs: 1,
                sm: 10
            }
        }}>
            <Paper sx={{
                p: {
                    xs: 2,
                    sm: 4
                }

            }}>
                <Grid2 container spacing={4}>
                    <Grid2 xs={12} md={7} sx={{
                        pr:{
                            xs: 0,
                            sm: 4
                        }
                    }}>
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
                        sx={{ 
                            pb: 4,
                            fontSize: {
                                xs: 60,
                                sm: 120
                            }
                        }}
                        textAlign="center"
                        fontFamily='Blackriver Bold, Roboto Condensed, "sans-serif"'
                    >
                        Speakers
                    </Typography>
                    <SpeakerGrid speakers={speakerList} />
                    <Typography variant="h3" fontWeight="300" textAlign="center" sx={{ pt: 8 }}>
                        <Link to="/speakers">
                            <ColorButton variant="contained" sx={{ p: 4 }}>
                                <Typography variant="h5">
                                    See All Speakers
                                </Typography>
                            </ColorButton>
                        </Link>
                    </Typography>
                </Container>
            </Box>

        </BannerPage>
    )
}

export default Splash;