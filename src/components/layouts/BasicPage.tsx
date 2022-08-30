import { Box, Container, ContainerProps } from "@mui/material";
import { AppBar } from '../molecules/AppBar';
import Footer from "../molecules/Footer";


type Props = {
    children?: React.ReactNode;
} & ContainerProps

const BasicPage = ({ children, ...props }: Props) => (
    <Box sx={{height: "100vh", display: 'flex', flexDirection: 'column'}}>
        <AppBar />
        <Container {...props} sx={{ paddingTop: '40px' }}>
            {children}
        </Container>
        <Footer />
    </Box>
)


export default BasicPage;

