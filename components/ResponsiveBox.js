import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme/theme";

const ResponsiveBox = ({ children, ...props }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="stretch"
            width="100%"
            borderRadius="8px"
            position="relative"
            bgcolor={colors.dialog}
            p="1rem"
            boxshadow="0 0.1rem 0.5rem rgba(0, 0, 0, 0.08)"
            {...props}
        >
            {children}
        </Box>
    )
}

export default ResponsiveBox;