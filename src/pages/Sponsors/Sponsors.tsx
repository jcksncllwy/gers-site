import { Box, Button, Container, Link, Paper, Typography } from "@mui/material"
import { amber, green, lightGreen, lime, yellow } from "@mui/material/colors"
import Grid2 from "@mui/material/Unstable_Grid2"
import BasicPage from "../../components/layouts/BasicPage"
import { sponsorFormURL } from "../../constants"
import { theme } from "../../styling/theme"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdownLetter = `Dear Prospective Sponsor

We invite you to partner with an historic gathering, the first Global Earth Repair Summit on October 21-24, 2022. This event will bring together thousands of people from around the world for four days of education, networking, and collective action. We are gathering a wide diversity of eco-restoration practitioners, indigenous people, farmers, activists, and enthusiasts. Together we will draft a Global Repair Action Plan to present to the world.

Programming will be presented in three regional time zones, non-stop for three days. This event features many small-group sessions. Everyone has a voice. The Summit will foster a synergistic exchange of earth repair strategies and generate physical outcomes to rehydrate, and re-carbonize the planet. There will be alliances and action plans that will serve society at large and the Earth.

A sponsorship is a great way to support this event and the earth repair movement. Sponsorship funds expands our ability to bring in impactful presenters, do more documentation and reach individuals and communities around the world via Zoom, live streaming, and in-person work events. In exchange for your financial or in-kind contribution, you will receive benefits that include promotion, acknowledgement, and space in our Trade Show. Please review the “Sponsor Levels and Benefits” information page below.

TRADE SHOW: The Trade Show is a virtual space where sponsors can meet people, set up appointments, respond to inquiries, and have a presence. It will include organizations and companies related to earth repair such as tools, products, books, nursery stock, seed, software, consulting services and information about educational programs and organizations. Sponsors are entitled to a space to promote their goods, services, etc.

IN-KIND SPONSORS: We can accept in-kind donations in lieu of cash for needed services or items. Please reach us to inquire.

The Global Earth Repair Summit is a team effort coordinated by Michael Pilarski, Director of Friends of the Trees Society since 1978, and the Global Earth Repair Foundation since 2019. Michael has organized many large events, including: the 2005 Inland Northwest Restoration Conference at Washington State University, Pullman; and the 2019 Global Earth Repair Conference at Fort Worden, Port Townsend, Washington State.

Your support of the Global Earth Repair Summit will greatly assist our ability to powerfully and effectively influence the world.

Please reach out to me with any questions.

Thank you for your consideration and support!

Michael Pilarski, Event Coordinator

(360) 643-9178

friendsofthetrees@yahoo.com

https://globalearthrepairfoundation.org/`


const PageTitle = ({ children, sx }: any) => {
    return (
        <Typography
            sx={{
                pb: 4,
                "-webkit-text-stroke-width": "4px",
                "-webkit-text-stroke-color": theme.palette.secondary.main,
                ...sx
            }}
            textAlign="center"
            fontSize={120}
            fontFamily='Blackriver Bold, Roboto Condensed, "sans-serif"'
        >{children}</Typography>
    )
}

const SponsorTitle = ({ children }: any) => {
    return (
        <Typography fontFamily="Harabara Mais Demo" fontSize="1.5rem">
            {children}
        </Typography>
    )
}

const SponsorBenefits = ({ children }: any) => {
    return (
        <Typography>
            - {children}
        </Typography>
    )
}

const SponsorOption = ({ children, color }: any) => {
    return (
        <Grid2 xs={12} sm={6} md={3} >
            <Link href={sponsorFormURL} underline="none">
                <Paper elevation={8} sx={{
                    backgroundColor: color,
                    color: theme.palette.getContrastText(color),
                    px: 4,
                    py: 4,
                    height: "100%",
                    position: "relative",
                    top: 0,
                    transition: "top 0.2s ease",
                    "&:hover": {
                        top: -5,
                    }
                }}>
                    {children}
                </Paper>
            </Link>
        </Grid2>
    )
}

export const Sponsors = () => {
    return (
        <BasicPage>
            <PageTitle>
                Sponsorship
            </PageTitle>
            <PageTitle sx={{ mt: -10 }}>
                Tiers
            </PageTitle>
            <Container sx={{ mb: 20 }}>
                <Grid2 container spacing={2}>

                    <SponsorOption color={green[500]}>
                        <SponsorTitle>
                            Grassroots $500
                        </SponsorTitle>
                        <SponsorBenefits>
                            Sponsor's name included on our website's Sponsor Page for one year.
                        </SponsorBenefits>
                    </SponsorOption>

                    <SponsorOption color={lime[500]}>
                        <SponsorTitle>
                            Supporting $1,000
                        </SponsorTitle>
                        <SponsorBenefits>
                            Lower tier benefits plus:
                        </SponsorBenefits>
                        <SponsorBenefits>
                            Sponsor's logo, website link, and bio included on our website's Sponsor Page for one year.
                        </SponsorBenefits>
                    </SponsorOption>

                    <SponsorOption color={yellow[500]}>
                        <SponsorTitle>
                            Champion $2000
                        </SponsorTitle>
                        <SponsorBenefits>
                            Lower tier benefits plus:
                        </SponsorBenefits>
                        <SponsorBenefits>
                            A space in the Trade Show.
                        </SponsorBenefits>
                        <SponsorBenefits>
                            Verbal recognition at plenary Sessions
                        </SponsorBenefits>
                        <SponsorBenefits>
                            Special sessions for sponsors to meet each other and dialogue during and after the summit
                        </SponsorBenefits>
                    </SponsorOption>

                    <SponsorOption color={amber[500]}>
                        <SponsorTitle>
                            Patron $5000
                        </SponsorTitle>
                        <SponsorBenefits>
                            Special sessions with presenters.
                        </SponsorBenefits>
                        <SponsorBenefits>
                            Invitation to have input on the Global Earth Repair Foundation's next steps.
                        </SponsorBenefits>
                    </SponsorOption>

                    <Grid2 xs={12} textAlign="center">
                        <Button variant="outlined" sx={{
                            fontSize: "1.5rem"

                        }}>
                            Become a Sponsor
                        </Button>
                    </Grid2>
                    <Grid2 xs={12}>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {markdownLetter}
                    </ReactMarkdown>
                    </Grid2>
                    <Grid2 xs={12} textAlign="center">
                        <Button variant="outlined" sx={{
                            fontSize: "1.5rem"

                        }}>
                            Become a Sponsor
                        </Button>
                    </Grid2>
                </Grid2>
            </Container>
        </BasicPage>
    )
}

/**
 * <Box sx={{pb: 6}}>
                        Dear Prospective Sponsor,
                    </Box>
                    <Box>We invite you to partner with an historic gathering, the first Global Earth Repair Summit on October 21-24, 2022. This event will bring together thousands of people from around the world for four days of education, networking, and collective action. We are gathering a wide diversity of eco-restoration practitioners, indigenous people, farmers, activists, and enthusiasts. Together we will draft a Global Repair Action Plan to present to the world. </Box>
                    <Box>Programming will be presented in three regional time zones, non-stop for three days. This event features many small-group sessions. Everyone has a voice. The Summit will foster a synergistic exchange of earth repair strategies and generate physical outcomes to rehydrate, and re-carbonize the planet. There will be alliances and action plans that will serve society at large and the Earth.</Box>
                    <Box>A sponsorship is a great way to support this event and the earth repair movement. Sponsorship funds expands our ability to bring in impactful presenters, do more documentation and reach individuals and communities around the world via Zoom, live streaming, and in-person work events. In exchange for your financial or in-kind contribution, you will receive benefits that include promotion, acknowledgement, and space in our Trade Show. Please review the “Sponsor Levels and Benefits” information page below.</Box>
                    <Box>TRADE SHOW: The Trade Show is a virtual space where sponsors can meet people, set up appointments, respond to inquiries, and have a presence. It will include organizations and companies related to earth repair such as tools, products, books, nursery stock, seed, software, consulting services and information about educational programs and organizations. Sponsors are entitled to a space to promote their goods, services, etc.</Box>
                    <Box>IN-KIND SPONSORS: We can accept in-kind donations in lieu of cash for needed services or items. Please reach us to inquire.</Box>
                    <Box>The Global Earth Repair Summit is a team effort coordinated by Michael Pilarski, Director of Friends of the Trees Society since 1978, and the Global Earth Repair Foundation since 2019. Michael has organized many large events, including: the 2005 Inland Northwest Restoration Conference at Washington State University, Pullman; and the 2019 Global Earth Repair Conference at Fort Worden, Port Townsend, Washington State.</Box>
                    <Box>Your support of the Global Earth Repair Summit will greatly assist our ability to powerfully and effectively influence the world.</Box>
                    <Box>Please reach out to me with any questions.</Box>
                    <Box>Thank you for your consideration and support!</Box>
                    <Box>Michael Pilarski, Event Coordinator</Box>
                    <Box>friendsofthetrees@yahoo.com # 360-643-9178</Box>
                    <Box>https://globalearthrepairfoundation.org/</Box>
 */