import { Box, Typography } from "@mui/material"
import BasicPage from "../../components/layouts/BasicPage"

export const collaboratorList = [
    { name: 'Abundant Earth Foundation, Hawaii' },
    { name: "Alaska Institute for Climate & Energy" },
    { name: "Community Resiliency Project, Seattle, USA" },
    { name: "Dry-land Solutions, Puntland, Somalia" },
    { name: "EcoRestoration Alliance" },
    { name: "Ecosystem Restoration Camps," },
    { name: "Ecosystem Restoration Corps, Manitou Foundation, Colorado, USA" },
    { name: "Envisionation, Ltd. U.K." },
    { name: "Gaia University, Mexico, UK, International" },
    { name: "Global Earth Repair Foundation, USA" },
    { name: "Grow Permaculture, Florida, USA" },
    { name: "Hotlum Ecosystem Restoration Camp, California, USA" },
    { name: "Human Nature Projects, Uganda," },
    { name: "International Permaculture CoLab" },
    { name: "Jenga /UMOJA Project, Nakivale Refugee Camp, Uganda" },
    { name: "Kootenay Permaculture, British Columbia, Canada" },
    { name: "Northland Climate Change, New Zealand" },
    { name: "Open Future Coalition, USA" },
    { name: "Permaculture Institute of North America" },
    { name: "Regeneration International" },
    { name: "Sustainable Obtainable Solutions, Washington, USA" },
    { name: "The Source Directory, Northern California" },
    { name: "Trees for Life, Findhorn, Scotland" },
]

export const Collaborators = () => {
    return (
        <BasicPage>
            <Typography
                sx={{ pb: 4 }}
                textAlign="center"
                fontSize={120}
                fontFamily='Six Caps, Roboto Condensed, "sans-serif"'
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
                {collaboratorList.map((collaborator) => {
                    return (
                        <Typography variant="h4" sx={{pb:1}}>
                            {collaborator.name}
                        </Typography>
                    )
                })}
            </Box>
        </BasicPage>
    )
}