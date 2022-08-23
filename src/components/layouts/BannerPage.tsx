import { Box, Container, ContainerProps } from "@mui/material";
import { AppBar } from '../molecules/AppBar';


type Props = {
    children?: React.ReactNode;
    banner: React.ReactNode
} & ContainerProps

const BannerPage = ({ children, banner, ...props }: Props) => (
    <Box>
        <AppBar />
        <Box>
            {banner}
        </Box>
        <Container {...props} sx={{ paddingTop: '40px' }}>
            {children}
        </Container>
    </Box>
)


export default BannerPage;

