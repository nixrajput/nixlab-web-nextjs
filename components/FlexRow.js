import { Box } from "@mui/material";

const FlexRow = ({ children, ...props }) => {

    return (
        <Box
            display="flex"
            flexDirection={{
                xs: "column",
                sm: "column",
                md: "column",
                lg: "row",
                xl: "row",
            }}
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            position="relative"
            {...props}
        >
            {children}
        </Box>
    )
}

export default FlexRow;