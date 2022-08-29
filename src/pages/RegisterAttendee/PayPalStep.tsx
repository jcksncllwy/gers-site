import { LoadingButton } from "@mui/lab";
import { Box, Typography, FormControl, RadioGroup, FormControlLabel, Radio, TextField, InputAdornment, Button } from "@mui/material";
import { default as Grid } from "@mui/material/Unstable_Grid2";
import { useState } from "react";

const payPalDonationLink = "https://www.paypal.com/donate/?hosted_button_id=3JYNMMVYD9KC6"

export type Props = {
    onSubmit: () => any
}

export const PayPalStep = ({ onSubmit }: Props) => {
    const [loading, setLoading] = useState(false);
    const handleSubmissionAttempt = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        await onSubmit()
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
                Contribution
            </Typography>
            <Grid container spacing={2}>
                <Grid xs={12} sx={{ pb: 2 }}>
                    <Typography>Please contribute what you can, No one is turned away for lack of funds.</Typography>
                </Grid>
                <Grid xs={12} sx={{ pb: 2 }}>
                    <Button
                        href={payPalDonationLink}
                        variant="outlined">
                        Donate with PayPal
                    </Button>
                </Grid>
                <Grid xs={12} sx={{ textAlign: 'right' }}>
                    <LoadingButton
                        type="submit"
                        variant="contained"
                        loading={loading}
                    >
                        Next
                    </LoadingButton>
                </Grid>
            </Grid>

        </Box>
    )
}