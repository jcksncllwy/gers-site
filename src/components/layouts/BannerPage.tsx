import { Box, BoxProps, Container, ContainerProps } from "@mui/material";
import { AppBar } from '../molecules/AppBar';
import Footer from "../molecules/Footer";


type Props = {
    children?: React.ReactNode;
    banner: React.ReactNode
} & BoxProps

const BannerPage = ({ children, banner, ...props }: Props) => {
    return (
        <Box {...props}>
            <AppBar />
            <Box>
                {banner}
            </Box>
            <Box>
                {children}
            </Box>
            <Footer />
        </Box>
    )
}


export default BannerPage;

