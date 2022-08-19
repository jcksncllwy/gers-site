import { Box } from "@mui/material";

export type Props = {
    donationAmount: number
}

const Review = ({ donationAmount }: Props) => {
    return (
        <Box>
            <h1>REVIEW COMING SOON</h1>
            <h2>{donationAmount}</h2>
        </Box>
    )
}

export default Review;