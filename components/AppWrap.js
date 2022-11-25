import { Box, useTheme } from "@mui/material";
import Navbar from "./NavBar";

const AppWrap = (WrappedComponent) => {
    return (props) => {
        return (
            <>
                <Navbar />
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
            </>
        );
    };
}

export default AppWrap;