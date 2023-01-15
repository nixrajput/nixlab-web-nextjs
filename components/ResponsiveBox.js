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
            alignItems="flex-start"
            width="100%"
            maxWidth="1024px"
            borderRadius="8px"
            position="relative"
            bgcolor={colors.dialog}
            p="1rem"
            m="0 auto"
            boxshadow="0 0.1rem 0.5rem rgba(0, 0, 0, 0.1)"
            {...props}
        >
            {children}
        </Box>
    )
}

export default ResponsiveBox;