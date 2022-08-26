import { useEffect, useState } from "react";
import { LoadingButton } from "@mui/lab";
import { Box, Typography, TextField, FormControl, FormControlLabel, Radio, RadioGroup, InputAdornment } from "@mui/material";
import { default as Grid } from "@mui/material/Unstable_Grid2";

export type OnSubmitProps = {
    amount: string
}
export type Props = {
    onSubmit: (props: OnSubmitProps) => any
}

const PaymentForm = ({ onSubmit }: Props) => {
    const [selection, setSelection] = useState<string>("25");
    const [showCustom, setShowCustom] = useState(false);
    const [customAmount, setCustomAmount] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmissionAttempt = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        await onSubmit({
            amount: selection === "custom" ? customAmount : selection
        })
        setLoading(false);
    }

    const handleCustomAmountChange = (e: any) => {
        e.preventDefault()
        const value = e.target.value;
        setCustomAmount(value.replace(/[^0-9.]/g, ''));
    }

    // Show hidden field for custom donations
    useEffect(() => {
        if (selection === "custom") {
            setShowCustom(true);
        } else {
            setShowCustom(false);
        }
    }, [selection])

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
                <Grid xs={12}>
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"                            
                            name="radio-buttons-group"
                            value={selection}
                            onChange={(e) => setSelection(e.target.value)}
                        >
                            <FormControlLabel value="25" control={<Radio />} label="25" />
                            <FormControlLabel value="50" control={<Radio />} label="50" />
                            <FormControlLabel value="100" control={<Radio />} label="100" />
                            <FormControlLabel value={'custom'} control={<Radio />} label="Custom" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid xs={12} sx={{ pb: 2 }}>
                    {showCustom ?
                        <TextField
                            id="customAmount"
                            label="Custom Amount"
                            required={showCustom}
                            fullWidth
                            variant="standard"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }}
                            inputProps={{
                                pattern: "^[0-9.]*$",
                            }}
                            onChange={handleCustomAmountChange}
                            value={customAmount}
                        />
                        : null}
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
export default PaymentForm;