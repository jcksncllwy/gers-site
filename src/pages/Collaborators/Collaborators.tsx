import { Box, Paper, Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2"
import BasicPage from "../../components/layouts/BasicPage"
import { theme } from "../../styling/theme"

export const collaboratorList = [
    {
        name: 'Abundant Earth Foundation',
        region: ' Hawaii, United States'
    },
    {
        name: "Alaska Institute for Climate & Energy",
        region: 'United States'
    },
    {
        name: "Community Resiliency Project",
        region: 'United States'
    },
    {
        name: "Dry-land Solutions, Puntland",
        region: 'Somalia, Africa'
    },
    {
        name: "EcoRestoration Alliance",
        region: 'United States'
    },
    {
        name: "Ecosystem Restoration Camps",
        region: 'Global'
    },
    {
        name: "Ecosystem Restoration Corps, Manitou Foundation",
        region: 'Colorado, United States'
    },
    {
        name: "Envisionation, Ltd.",
        region: "UK"
    },
    {
        name: "Gaia University",
        region: "Mexico, UK, International"
    },
    {
        name: "Global Earth Repair Foundation",
        region: 'United States'
    },
    {
        name: "Grow Permaculture",
        region: 'Florida, United States'
    },
    {
        name: "Hotlum Ecosystem Restoration Camp",
        region: 'California, United States'
    },
    {
        name: "Human Nature Projects",
        region: "Uganda, Africa"
    },
    {
        name: "International Permaculture CoLab",
        region: "Global"
    },
    {
        name: "Jenga /UMOJA Project, Nakivale Refugee Camp",
        region: "Uganda, Africa"
    },
    {
        name: "Kootenay Permaculture",
        region: "British Columbia, Canada"
    },
    {
        name: "Northland Climate Change",
        region: "New Zealand"
    },
    {
        name: "Open Future Coalition",
        region: 'United States'
    },
    {
        name: "Permaculture Institute of North America",
        region: 'United States'
    },
    {
        name: "Regeneration International",
        region: "Global"
    },
    {
        name: "Sustainable Obtainable Solutions",
        region: 'Washington, United States'
    },
    {
        name: "The Source Directory",
        region: 'Northern California, United States'
    },
    {
        name: "Trees for Life",
        region: "Findhorn, Scotland"
    },
]

const collaboratorsByRegion: any = {}
collaboratorList.forEach((collaborator) => {
    const region = collaborator.region
    if (region) {
        if (collaboratorsByRegion[collaborator.region]?.length) {
            collaboratorsByRegion[collaborator.region].push(collaborator)
        } else {
            collaboratorsByRegion[collaborator.region] = [collaborator]
        }
    }
})


const goldColor = theme.palette.secondary.main

export const Collaborators = () => {
    return (
        <BasicPage sx={{mb:4}}>
            <Typography
                sx={{
                    pb: 4,
                    "-webkit-text-stroke-width": "4px",
                    "-webkit-text-stroke-color": goldColor
                }}
                textAlign="center"
                fontSize={120}
                fontFamily='Blackriver Bold, Roboto Condensed, "sans-serif"'
            >
                Collaborators
            </Typography>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{
                    mb: 10
                }}
            >
                <Grid2 container spacing={2}>
                    {collaboratorList.map((collaborator) => {
                        return (
                            <Grid2 xs={12} sm={4}>
                                <Paper sx={{
                                    height: "100%",
                                    p: 2,
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                    <Typography variant="h4" sx={{ pb: 1, color: "secondary.main" }} textAlign="center">
                                        {collaborator.name}
                                    </Typography>
                                    <Typography variant="h6" sx={{ pb: 1 }} textAlign="center">
                                        {collaborator.region}
                                    </Typography>
                                </Paper>
                            </Grid2>
                        )
                    })}
                </Grid2>
            </Box>
        </BasicPage>
    )
}