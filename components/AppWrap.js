import { Box } from "@mui/material";

const AppWrap = (WrappedComponent) => {
    const App = (props) => {
        return (
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                width="100%"
                minWidth="100%"
                mt={{ xs: "80px", sm: "80px", md: "80px", lg: "80px" }}
            >
                <WrappedComponent {...props} />
            </Box>
        );
    };

    return App;
}

export default AppWrap;