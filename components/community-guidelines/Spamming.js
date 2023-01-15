import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";

const Spamming = () => {
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
                12. Spamming, Scamming and Phishing
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
                    Do not use Rippl to spam or scam others.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.1rem",
                }}
                >
                    Do not use this platform to manipulate others
                    or negatively affect their experience on the
                    platform. Do not message other users in bulk
                    from multiple accounts to amplify content or
                    disrupt conversations. This platform must not
                    be used to control prices or publish information
                    intended to manipulate other users for your
                    own financial gain.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.1rem",
                }}
                >
                    You must not try to deceive others whether on
                    this platform or not, by sharing patently false
                    and untrue information, luring other persons to
                    share sensitive information or requiring them to
                    engage in any other activities with the intention
                    of misleading or harassing users for financial
                    gain or causing them any other harm.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.1rem",
                }}
                >
                    You must not pose as someone else and induce people to
                    share their personal information with you. Do not
                    deprive others of money, property, inheritance by
                    fraudulent schemes. You must not intend to deprive
                    others of money, property, inheritance by fraudulent
                    schemes.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.1rem",
                }}
                >
                    Do not send people unsolicited communications.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    marginBottom: "0.5rem",
                    fontSize: "1.1rem",
                }}
                >
                    Please note that this is not a complete list,
                    and there could be other instances which could
                    violate this guideline.
                </p>
            </Box>
        </Box>
    )
}

export default Spamming;