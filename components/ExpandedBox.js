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
                xs: '4rem 1rem',
                sm: '4rem 1.5rem',
                md: '4rem 2rem',
                lg: '6rem 2rem',
                xl: '6rem 2rem'
            }}
            {...props}
        >
            {children}
        </Box>
    )
}

export default ExpandedBox;