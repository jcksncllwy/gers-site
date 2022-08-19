import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useState } from "react";
import { default as Grid } from "@mui/material/Unstable_Grid2";
import { CventContactInfo } from "./Register";
import { LoadingButton } from "@mui/lab";

export type Props = {
    onSubmit: () => any,
    donationAmount: number,
    contactInfo: CventContactInfo | null
}

const Review = ({ onSubmit, donationAmount, contactInfo }: Props) => {
    if(!contactInfo) throw new Error("Missing Contact Info");
    const [loading, setLoading] = useState(false);
    var currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    const formattedDonation = currencyFormatter.format(donationAmount);

    const handleSubmissionAttempt = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        await onSubmit();
        setLoading(false);
    }

    return (
        <Box
            component="form"
            autoComplete="off"
            onSubmit={handleSubmissionAttempt}
            sx={{ width: '100%', px: 10 }}
        >
            <Typography variant="h6" gutterBottom>
                Review
            </Typography>
            <List disablePadding>
                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Contribution" secondary="Thank you for your support" />
                    <Typography variant="body2">{formattedDonation}</Typography>
                </ListItem>
                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        {formattedDonation}
                    </Typography>
                </ListItem>
            </List>
            <Grid container spacing={2}>
                <Grid xs={12}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Contact Info
                    </Typography>
                    <Typography gutterBottom>{contactInfo.firstName} {contactInfo.lastName}</Typography>
                    <Typography gutterBottom>{contactInfo.title} at {contactInfo.company}</Typography>
                    <Typography gutterBottom>{contactInfo.email}</Typography>
                </Grid>
                <Grid xs={12} sx={{ textAlign: 'right' }}>
                    <LoadingButton
                        type="submit"
                        variant="contained"
                        loading={loading}
                    >
                        {donationAmount > 0? 'Complete Order with PayPal': 'Submit'}
                    </LoadingButton>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Review;