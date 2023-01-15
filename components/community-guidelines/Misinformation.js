import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";

const Misinformation = () => {
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
                11. Misinformation and Fake News
            </h3>

            <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="stretch"
                ml="1rem"
            >
                <p style={{
                    color: colors.primary[100],
                    marginTop: "0.5rem",
                    fontSize: "1.1rem",
                }}
                >
                    Be truthful and verify information.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.1rem",
                }}
                >
                    Rippl strives to encourage healthy discussions,
                    foster creativity of thought and enable exchange
                    of views and opinions. To achieve this, do not
                    knowingly share false, misleading or unverified
                    information. You must not share morphed or
                    manipulated images, videos or any media that is
                    false. Sharing false or misleading information
                    has the potential to defame a third party. That
                    is why, use your discretion to share comments
                    and other information that are authentic and
                    accurate. You must, to the extent possible,
                    ensure that content that you post on Rippl is
                    authentic and from a reliable and verifiable
                    source.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.1rem",
                }}
                >
                    Rippl does not condone content that may affect
                    citizen-centric processes. However, any content
                    that may interfere with the results of political
                    elections will not be permitted.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    marginBottom: "0.5rem",
                    fontSize: "1.1rem",
                }}
                >
                    Please note that this is not a complete list, and
                    there could be other instances which could violate
                    this guideline.
                </p>
            </Box>
        </Box>
    )
}

export default Misinformation;