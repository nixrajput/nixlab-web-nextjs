import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme/theme";

const ExpandedBox = ({ children, ...props }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="100%"
            minWidth="100vw"
            minHeight="calc(100vh - 80px)"
            position="relative"
            bgcolor={colors.background}
            p={{
                xs: '2rem 1rem',
                sm: '2rem 1rem',
                md: '2rem 2rem',
                lg: '3rem 2rem',
                xl: '3rem 2rem'
            }}
            {...props}
        >
            {children}
        </Box>
    )
}

export default ExpandedBox;