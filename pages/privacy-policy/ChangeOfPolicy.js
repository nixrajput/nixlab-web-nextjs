import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";

const ChangeOfPolicy = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="stretch"
        >
            <h3
                style={{
                    color: colors.primary[100],
                }}
            >
                14. Changes to this Privacy Policy
            </h3>

            <Box

                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="stretch"
                ml="1rem"
            >
                <p>
                    {`We Rippl make periodical changes to the Privacy Policy. Any significant changes we may make to our Privacy Policy in the future will be promptly notified to Users by posting the relevant terms in a prominent position on the webpage. The new terms may be displayed on the webpage, and you will be required to read and accept them to continue your use of the Services.`}
                </p>

            </Box>

        </Box>
    )
}

export default ChangeOfPolicy;