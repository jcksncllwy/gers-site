import { Box, TextField, Typography } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import { default as Grid } from "@mui/material/Unstable_Grid2";
import { FormEvent, useState } from "react";


export type Props = {
    onSubmit: (fields: Fields) => any
}

export type Fields = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    orgName: string,
    title: string
}

const ContactForm = ({ onSubmit }: Props) => {
    const [loading, setLoading] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [orgName, setOrgName] = useState('')
    const [title, setTitle] = useState('')

    const handleSubmissionAttempt = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        await onSubmit({
            firstName,
            lastName,
            email,
            password,
            orgName,
            title
        })
        setLoading(false);
    }

    return (
        <Box
            component="form"
            autoComplete="off"
            onSubmit={handleSubmissionAttempt}
        >
            <Typography variant="h6" gutterBottom>
                Contact Info
            </Typography>
            <Grid container spacing={2}>
                <Grid xs={12} sm={6}>
                    <TextField
                        id="firstname"
                        label="First name"
                        required
                        fullWidth
                        variant="standard"
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                    />
                </Grid>
                <Grid xs={12} sm={6}>
                    <TextField
                        id="lastname"
                        label="Last name"
                        required
                        fullWidth
                        variant="standard"
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                    />
                </Grid>
                <Grid xs={12} sm={6}>
                    <TextField
                        id="email"
                        label="Email"
                        required
                        fullWidth
                        variant="standard"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </Grid>
                <Grid xs={12} sm={6}>
                    <TextField
                        id="password"
                        label="Password"
                        type="password"
                        inputProps={{ pattern: ".{6,}" }}
                        required
                        fullWidth
                        variant="standard"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </Grid>
                <Grid xs={12}>
                    <TextField
                        id="organization"
                        label="Organization"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setOrgName(e.target.value)}
                        value={orgName}
                    />
                </Grid>
                <Grid xs={12}>
                    <TextField
                        id="title"
                        label="Title"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
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

export default ContactForm;