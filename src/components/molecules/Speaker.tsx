import { Box, Typography } from "@mui/material"

export type Props = {
    imageURL: string,
    name: string,
    title: string,
    subtitle: string
}

export const Speaker = ({ imageURL, name, title, subtitle }: Props) => {
    const rotation = Math.random() * 180;
    return (
        <>
            <Box sx={{
                paddingTop: '100%',
                position: "relative"
            }}>
                <Box sx={{
                    position: "absolute",
                    top: 0, left: 0,
                    width: "100%", height: "100%",
                    backgroundImage: `url(${imageURL})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    borderRadius: "50%",
                    zIndex: '1'
                }}>
                </Box>
            </Box>
            <Box sx={{ position: "relative", zIndex: '3' }}>
                <Typography textAlign="center" sx={{ pt: 2 }} fontSize="1.5rem" fontWeight={700}>{name}</Typography>
                <Typography textAlign="center" variant="h6">{title}</Typography>
                <Typography textAlign="center" variant="h6">{subtitle}</Typography>
            </Box>
        </>
    )
}