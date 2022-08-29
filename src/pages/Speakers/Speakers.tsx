import { Typography } from "@mui/material"
import BasicPage from "../../components/layouts/BasicPage"
import { SpeakerGrid } from "../../components/molecules/SpeakerGrid"

export type SpeakerType = {
    imageURL: string,
    name: string,
    title: string,
    subtitle: string,
}

export const speakers: SpeakerType[] = [
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
    },


]

export const Speakers = () => {
    return (
        <BasicPage>
            <Typography
                sx={{ pb: 4 }}
                textAlign="center"
                fontSize={120}
                fontFamily='Six Caps, Roboto Condensed, "sans-serif"'
            >
                Speakers
            </Typography>
            <SpeakerGrid speakers={speakers} />
        </BasicPage>
    )
}