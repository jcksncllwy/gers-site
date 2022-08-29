import { LoadingButton } from "@mui/lab";
import { Box, Button, Card, CardContent, Paper, styled, Typography } from "@mui/material"
import { default as Grid } from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import BasicPage from "../../components/layouts/BasicPage";

type RegistrationType = 'attendee' | 'speaker' | 'sponsor'
type TypeSelection = {
    [key in RegistrationType]: boolean
}

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
    border: `1px solid transparent`,
    position: 'relative',
    top: 0,
    transition: 'top 0.2s',
    ":hover": {
        cursor: 'pointer',
        border: `1px solid ${theme.palette.primary.main}`,
        top: '2px'
    },
  }));

export const RegistrationType = () => {
    const [loading, setLoading] = useState(false)
    const [types, setTypes] = useState<TypeSelection>({
        attendee: false,
        speaker: false,
        sponsor: false,
    })

    const toggleType = (type: RegistrationType) => {
        const deselectedTypes: TypeSelection = Object.keys(types).reduce((prev, curr) => {
            return { ...prev, [curr]: false }
        }, types)
        setTypes({
            ...deselectedTypes,
            [type]: !types[type]
        })
    }

    return (
        <BasicPage maxWidth='sm'>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Card variant='elevation' sx={{ width: '100%' }}>
                    <CardContent sx={{
                        p: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <Typography variant="h6" gutterBottom sx={{ pb: 2 }}>
                            How will you be registering?
                        </Typography>
                        <Grid container spacing={2}>
                            {Object.entries(types).map(([name, selected]) => {
                                return (
                                    <Grid xs={12} sm={4}>
                                        <Item
                                            elevation={selected?3:9}
                                            square
                                            sx={{
                                                backgroundColor: selected?'primary.dark':'background.paper',
                                                top: selected?'2px':'0px'
                                            }}
                                            onClick={() => {
                                                toggleType(name as RegistrationType)
                                            }}
                                        >
                                            {name.toLocaleUpperCase()}
                                        </Item>
                                    </Grid>
                                )
                            })}
                            <Grid xs={12} sx={{ mt: 2, textAlign: 'right' }}>
                                <LoadingButton
                                    type="submit"
                                    variant="contained"
                                    loading={loading}
                                >
                                    Next
                                </LoadingButton>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Box>

        </BasicPage>
    )
}