import { FacebookRounded, Instagram, Twitter, YouTube } from "@mui/icons-material";
import { Box, Button, Card, CardContent, Container, styled, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { facebookURL, instagramURL, payPalDonationLink, twitterURL, youtubeURL } from "../../constants";
import Link from "../atoms/Link";

const FooterBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.default
}));

type SMProps = { imageURL: string, linkURL: string }
const SocialMediaIcon = ({ imageURL, linkURL }: SMProps) => {
    return (
        <Box sx={{ maxWidth: '100px', display: "flex", alignItems: "center" }}>
            <a href={linkURL} target="_blank">
                <img src={imageURL} />
            </a>
        </Box>
    )
}

type Props = {
    children?: React.ReactNode;
}

const Footer = ({ children }: Props) => {
    return (
        <FooterBox display="flex" flexDirection="column" alignItems="center" sx={{ p: 10 }}>
            <Grid2 container spacing={2}>
                <Grid2 xs={12} sm={6}>
                    <Card sx={{ height: "100%" }}>
                        <CardContent sx={{ textAlign: "center" }}>
                            <Typography variant="h5" sx={{ mb: 2 }}>Contact</Typography>
                            <Typography>
                                Michael Pilarski, Founder
                            </Typography>
                            <Typography>
                                friendsofthetrees@yahoo.com
                            </Typography>
                            <Typography sx={{ mt: 2 }}>
                                PO Box 1133
                            </Typography>
                            <Typography>
                                Port Hadlock, WA 98339
                            </Typography>
                        </CardContent>
                    </Card>

                </Grid2>
                <Grid2 xs={12} sm={6} >
                    <Card sx={{ height: "100%" }}>
                        <CardContent>
                            <Grid2 container spacing={4}>
                                <Grid2 xs={12} sm={3} sx={{ display: "flex", justifyContent: "center" }}>
                                    <SocialMediaIcon
                                        imageURL="https://www.facebook.com/images/fb_icon_325x325.png"
                                        linkURL={facebookURL}
                                    />
                                </Grid2>
                                <Grid2 xs={12} sm={3} sx={{ display: "flex", justifyContent: "center" }}>
                                    <SocialMediaIcon
                                        imageURL="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1200px-Twitter-logo.svg.png"
                                        linkURL={twitterURL}
                                    />
                                </Grid2>
                                <Grid2 xs={12} sm={3} sx={{ display: "flex", justifyContent: "center" }}>
                                    <SocialMediaIcon
                                        imageURL="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
                                        linkURL={instagramURL}
                                    />
                                </Grid2>
                                <Grid2 xs={12} sm={3} sx={{ display: "flex", justifyContent: "center" }}>
                                    <SocialMediaIcon
                                        imageURL="https://cdn2.hubspot.net/hubfs/521324/youtube%20icon.png"
                                        linkURL={youtubeURL}
                                    />
                                </Grid2>
                                <Grid2 xs={12} sx={{ display: "flex", justifyContent: "center" }}>

                                    <Button sx={{ px: 10 }} variant="contained" href={payPalDonationLink}>
                                        <Typography variant="h6">
                                            Donate
                                        </Typography>
                                    </Button>
                                </Grid2>
                            </Grid2>
                        </CardContent>
                    </Card>
                </Grid2>
            </Grid2>
        </FooterBox>
    )
}

export default Footer;