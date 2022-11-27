import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";

const PersonalDataOfOthers = () => {
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
                13. Personal Data Of Others
            </h3>

            <Box

                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="stretch"
                ml="1rem"
            >
                <p>
                    {`In some situations, you may provide personal data of other individuals (family, friends, likewise) to us. If you provide us with such personal data, you represent and warrant that you have obtained their consent for their Personal Information to be collected, used and disclosed as set out in this Privacy Policy.`}
                </p>

            </Box>

        </Box>
    )
}

export default PersonalDataOfOthers;