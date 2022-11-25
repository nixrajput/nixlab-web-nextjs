import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme/theme";

const ExpandedBox = ({ children }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="100%"
            height="calc(100vh - 80px)"
            position="relative"
            bgcolor={colors.background}
        >
            {children}
        </Box>
    )
}

export default ExpandedBox;