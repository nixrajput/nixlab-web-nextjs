import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme/theme";

const FlexColumn = ({ children, ...props }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box
            display="flex"
            flexDirection={{
                xs: "row",
                sm: "row",
                md: "row",
                lg: "column",
                xl: "column",
            }}
            justifyContent="center"
            alignItems="center"
            width="100%"
            position="relative"
            bgcolor={colors.background}
            {...props}
        >
            {children}
        </Box>
    )
}

export default FlexColumn;