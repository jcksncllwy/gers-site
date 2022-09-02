import { Typography, Paper } from "@mui/material"
import BasicPage from "../../components/layouts/BasicPage"
import { SpeakerGrid } from "../../components/molecules/SpeakerGrid"
import Grid2 from "@mui/material/Unstable_Grid2";
import { theme } from "../../styling/theme"
import { PageTitle } from "../../components/atoms/PageTitle";

export type SpeakerType = {
    imageURL: string,
    name: string,
    title: string,
    subtitle: string,
}

export const speakerList: SpeakerType[] = [
    {
        imageURL: "https://regenerationinternational.org/wp-content/uploads/2016/03/JDLHeadshot_HighRes.jpg",
        name: "John D. Liu",
        title: "Film Maker & Ecologist",
        subtitle: "Ecosystem Restoration Camps",
    },
    {
        imageURL: "https://festival.artseverywhere.ca/wp-content/uploads/2019/05/Jeannette-ArmstrongSQ.png",
        name: "Jeannette Armstrong",
        title: "Author, Educator, Artist, Activist",
        subtitle: "Okanagan Nation",
    },
    {
        imageURL: "https://returntoearth.land/wp-content/uploads/formidable/5/IMG_2893.jpg",
        name: "Michael Pilarski",
        title: "Wildcrafter & Founder",
        subtitle: "Global Earth Repair Foundation",
    },
    {
        imageURL: "https://www.worldagroforestry.org/sites/agroforestry/files/styles/staff_image_style/public/staff/Garrity.png?itok=OxZ3takJ",
        name: "Dennis Garrity",
        title: "Senior Research Fellow",
        subtitle: "World Agroforestry (ICRAF)",
    },
    {
        imageURL: "https://s3.amazonaws.com/heysummit-production/media/thumbnails/uploads/events/pina-north-american-leadership-summit/QcKP8NhrE8bAtKVPLp4aM3_square_large.jpg",
        name: "Koreen Brennan",
        title: "Permaculture Educator & Designer",
        subtitle: "Grow Permaculture",
    },
    {
        imageURL: "https://regenerationinternational.org/wp-content/uploads/bb-plugin/cache/andrecircle-circle.png",
        name: "André Leu",
        title: "International Director",
        subtitle: "Regeneration International",
    },
    {
        imageURL: "https://www.arabworldbooks.com/uploads/2020/05/1588366794_thumb.jpg",
        name: "Mazin Qumsiyeh",
        title: "Founder & Director",
        subtitle: "Palestine Institute for Biodiversity and Sustainability",
    },
    {
        imageURL: "https://springprize.org/wp-content/uploads/2016/08/Precious-Phiri-400-e1616865365373.jpg",
        name: "Precious Phiri",
        title: "Training Coordinator",
        subtitle: "Africa Centre for Holistic Management",
    }
]

const remainingSpeakers = [
    "Glenn Albrecht, Australia",
    "Owen Allen, Phoenix Functions, Australia",
    "Jeannette  Armstrong, Okanagan Nation, British Columbia, Canada",
    "An Okanagan worldview of society.",
    "Koreen Brennan, Grow Permaculture, Florida ",
    "Joe Brewer, Earth Regenerators, Center for Applied Cultural Evolution, Barichara, Colombia",
    "Rob de Laet, Brazil, The Netherlands,",
    "Cedar Drake, Fire Ecologist, USA",
    "Summer Fawn, Singer of Earth Songs.",
    "Alan Watson Featherstone, Trees for Life, Scotland",
    "Mahala Frye, Kitsap Peninsula, Washington",
    "Dennis Garrity, EverGreening Alliance, Global",
    "Paul Hawken, Author of Drawdown (2017) and Regeneration: Ending the Climate Crisis in One Generation.  (2021)",
    "Minni Jain, India and UK.",
    "Gregoire Lameureux, Kootenay Pemaculture, Canada",
    "Andre Leu, Regeneration International, Australia",
    "Nathan Lou, Mongol Tribe, California",
    "Ilarion Merculieff , Alaska",
    "Andrew Millison, Earth Repair Radio, Permaculture Rising, Oregon State University. Corvallis, Oregon ",
    "Deborah Milton, Bainbridge Island, Washington",
    "Art for Gaia",
    "Yasmin Mohamud, Dry-land Solutions, Puntland, Somalia",
    "Mazin Qumsiyeh, Institute for Biodiversity & Sustainability, Palestine",
    "Issues of environmental justice and threats to our planet",
    "Jim O’Donnell, Texas,",
    "Peter Bruce-Iri, New Zealand",
    "Precious Phiri, Regeneration International, Zimbabwe",
    "Michael Pilarski, Global Earth Repair Foundation, Olympic Peninsula, Washington. Using Medicinal Plants in Restoration Plantings.",
    "Margo Robbins, President, Cultural Fire Management Council, Yurok tribe, California",
    "Ercilia Sahores, Regeneration International, Mexico, Chile",
    "Datu Lanelio T. Sangcoan, Tribes and Natures Defenders, Philippines.",
    "Jon Schull, EcoRestoration Alliance,",
    "Judith Schwartz, Vermont, restoration author,",
    "Brenda Selgado. Toltec healer. California and Nicaragua",
    "Alex Slakie, Restorationist, Flora Northwest, Oregon",
    "Michael G. Smith, Emerald Earth, Earth regeneration through natural building. California",
    "Russ Speer, California, New Mexico.",
    "Jan Spencer, Suburban Permaculture, Oregon",
    "Colin Sternagel, Washington State,",
    "Paul Cheoketen Wagner, Salish Sea,",
    "Zachary Weiss, Elemental Ecosystems, USA",
    "Marius Iragi Ziganiria, Jenga Project, Nakivale Refugee Camp, Uganda"
]

export const Speakers = () => {
    return (
        <BasicPage sx={{mb: 8}}>
            <PageTitle>
                Speakers
            </PageTitle>
            <SpeakerGrid speakers={speakerList} />
            <PageTitle>
                And more
            </PageTitle>
            <Grid2 container spacing={6}>
                {remainingSpeakers.map((speaker) => {
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
                                <Typography variant="h6" sx={{ pb: 1, color: "secondary.main" }} textAlign="center">
                                    {speaker}
                                </Typography>
                            </Paper>
                        </Grid2>
                    )
                })}

            </Grid2>
        </BasicPage>
    )
}