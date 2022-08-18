import { Box } from "@mui/material";
import { Container } from "@mui/system";
import { AppBar } from '../components/molecules/AppBar';

const Splash = ()=>{
    return (
        <Box>
            <AppBar />
            <Container maxWidth="md" sx={{paddingTop: '40px'}}>
                <img src="https://ltfowyvtpuhuazsxpcvn.supabase.co/storage/v1/object/public/public-images/GERS_Poster_11x17_2022_low_res.jpeg" />
            </Container>
        </Box>
    )
}

export default Splash;