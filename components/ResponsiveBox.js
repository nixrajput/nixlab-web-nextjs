import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme/theme";

const ResponsiveBox = ({ children }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="100%"
            position="relative"
            bgcolor={colors.background}
        >
            {children}
        </Box>
    )
}

export default ResponsiveBox;