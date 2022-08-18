import { Box, Container, ContainerProps } from "@mui/material";
import { AppBar } from '../molecules/AppBar';


type Props = {
    children?: React.ReactNode;
} & ContainerProps

const BasicPage = ({ children, ...props }: Props) => (
    <Box>
        <AppBar />
        <Container {...props} sx={{ paddingTop: '40px' }}>
            {children}
        </Container>
    </Box>
)


export default BasicPage;

