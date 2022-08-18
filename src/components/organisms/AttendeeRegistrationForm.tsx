import { Box, Button, TextField } from "@mui/material";
import { default as Grid } from "@mui/material/Unstable_Grid2";
import { FormEvent, FormEventHandler, useState } from "react";


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

const AttendeeRegistrationForm = ({ onSubmit }: Props) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [orgName, setOrgName] = useState('')
    const [title, setTitle] = useState('')

    const handleSubmissionAttempt = (e: FormEvent) => {
        onSubmit({
            firstName,
            lastName,
            email,
            password,
            orgName,
            title
        })
    }

    return (
        <Box
            component="form"
            autoComplete="off"
            onSubmit={handleSubmissionAttempt}
        >
            <Grid container spacing={2}>
                <Grid xs={12} sm={6}>
                    <TextField
                        id="firstname"
                        label="First name"
                        required
                        fullWidth
                        variant="standard"
                        onChange={(e)=>setFirstName(e.target.value)}
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
                        onChange={(e)=>setLastName(e.target.value)}
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
                        onChange={(e)=>setEmail(e.target.value)}
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
                        onChange={(e)=>setPassword(e.target.value)}
                        value={password}
                    />
                </Grid>
                <Grid xs={12}>
                    <TextField
                        id="organization"
                        label="Organization"
                        fullWidth
                        variant="standard"
                        onChange={(e)=>setOrgName(e.target.value)}
                        value={orgName}
                    />
                </Grid>
                <Grid xs={12}>
                    <TextField
                        id="title"
                        label="Title"
                        fullWidth
                        variant="standard"
                        onChange={(e)=>setTitle(e.target.value)}
                        value={title}
                    />
                </Grid>
                <Grid xs={12} sx={{textAlign: 'right'}}>
                    <Button type="submit" variant="contained">Next</Button>
                </Grid>
            </Grid>

        </Box>
    )
}

export default AttendeeRegistrationForm;