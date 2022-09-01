import { Box, Container, ContainerProps, SxProps } from "@mui/material";
import { AppBar } from '../molecules/AppBar';
import Footer from "../molecules/Footer";


type Props = {
    children?: React.ReactNode;
    sx?: SxProps;
} & ContainerProps

const BasicPage = ({ children, sx, ...props }: Props) => (
    <Box sx={{height: "100vh", display: 'flex', flexDirection: 'column'}}>
        <AppBar />
        <Container {...props} sx={{ paddingTop: '40px', ...sx }}>
            {children}
        </Container>
        <Footer />
    </Box>
)


export default BasicPage;

