import { LoadingButton } from "@mui/lab";
import { Box, Button, Card, CardContent, Paper, styled, Typography } from "@mui/material"
import { default as Grid } from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BasicPage from "../../components/layouts/BasicPage";
import { speakerFormURL } from "../../constants";

const types = ['attendee', 'speaker'] as const
type RegistrationType = typeof types[number]
type RouteMap = {
    [key in RegistrationType]: string
}
const typeRoutes: RouteMap = {
    'attendee': '/register',
    'speaker': speakerFormURL
}

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontSize: "1.75rem",
    lineHeight: '60px',
    padding: '10px 20px',
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
    const [selectedType, setSelectedType] = useState<RegistrationType | null>(null)
    const navigate = useNavigate();

    return (
        <BasicPage maxWidth='sm' sx={{
            mb: 2
        }}>
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
                        <Grid container spacing={2} sx={{width: '100%'}}>
                            {types.map((type) => {
                                const selected = type === selectedType
                                return (
                                    <Grid xs={12} sm={6}>
                                        <Item
                                            elevation={selected ? 3 : 9}
                                            square
                                            sx={{
                                                backgroundColor: selected ? 'primary.dark' : 'background.paper',
                                                top: selected ? '2px' : '0px',
                                               
                                            }}
                                            onClick={() => {
                                                setSelectedType(type)
                                                window.location.href = typeRoutes[type]
                                            }}
                                        >
                                            {type.toLocaleUpperCase()}
                                        </Item>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </CardContent>
                </Card>
            </Box>

        </BasicPage>
    )
}