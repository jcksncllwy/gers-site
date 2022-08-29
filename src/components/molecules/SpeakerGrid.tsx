import { Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2"
import { SpeakerType } from "../../pages/Speakers/Speakers"
import { Speaker } from "./Speaker"


export type Props = {
    speakers: SpeakerType[]
}
export const SpeakerGrid = ({speakers}: Props) => {
    return (
        <Grid2 container spacing={10}>
            {speakers.map(({ imageURL, name, title, subtitle }) => {
                return (
                    <Grid2 xs={12} sm={6} md={3}>
                        <Speaker
                            imageURL={imageURL}
                            name={name}
                            title={title}
                            subtitle={subtitle}
                        />
                    </Grid2>
                )
            })}
        </Grid2>
    )
}