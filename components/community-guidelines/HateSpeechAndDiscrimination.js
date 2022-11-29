import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";
import { communityGuidelines } from "../../data";

const HateSpeechAndDiscrimination = () => {
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
                1. Hate Speech and Discrimination
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
                    fontSize: "1.15rem",
                }}
                >
                    Do not post hateful or discriminatory content on Rippl.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.15rem",
                }}
                >
                    Treat others on Rippl with dignity, respect, and a sense
                    of empathy. We encourage valid and well-intentioned
                    expressions of healthy disagreement on the platform.
                    We do not allow any content that is hateful, contains
                    personal attacks and ad hominem speech. Any form of
                    discourteous, impolite, rude statements made to express
                    disagreement that are intended to harm another user or
                    induce them mental stress or suffering is prohibited.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.15rem",
                }}
                >
                    You are not permitted to use hateful images or symbols
                    in your profile image or profile header. You must not
                    alter your username, display name, or profile bio in a
                    manner that it appears you are engaging in abusive
                    behaviour or which could be reasonably construed as
                    causing harassment to other users (s) or expressing
                    hate towards a person or group.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.15rem",
                }}
                >
                    Examples of hateful or discriminatory speech include
                    comments which encourage violence; are racially or
                    ethnically objectionable; attempts to disparage anyone
                    based on their nationality; sex/gender; sexual orientation;
                    religious affiliation; political affiliation; any disability;
                    or any disease they might be suffering from.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.15rem",
                }}
                >
                    Please note that this is not a complete list, and there could
                    be other instances that could violate this guideline.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.15rem",
                }}
                >
                    Read more about the law on Hate Speech & Discrimination below:
                </p>

                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="stretch"
                    ml="0.5rem"
                >
                    {
                        communityGuidelines.hateSpeechAndDiscrimination
                            .map((item, index) => (
                                <Box
                                    key={`hate-speech-and-discrimination-${index}`}
                                    display='flex'
                                    flexDirection='row'
                                    alignItems='flex-start'
                                    justifyContent='flex-start'
                                    m='0.5rem 0'
                                >
                                    <p
                                        style={{
                                            color: colors.primary[100],
                                            marginRight: '0.5rem',
                                        }}
                                    >
                                        •
                                    </p>

                                    <p style={{
                                        color: colors.primary[100],
                                    }}
                                    >
                                        <span
                                            style={{
                                                color: colors.primary[100],
                                                fontWeight: 700,
                                            }}
                                        >{item.title}:</span> {item.description}
                                    </p>
                                </Box>
                            ))
                    }
                </Box>
            </Box>
        </Box>
    )
}

export default HateSpeechAndDiscrimination;