import { Box, BoxProps, Container, ContainerProps } from "@mui/material";
import { AppBar } from '../molecules/AppBar';


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
        </Box>
    )
}


export default BannerPage;

