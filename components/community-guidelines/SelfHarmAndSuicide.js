import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";
import { communityGuidelines } from "../../data";

const SelfHarmAndSuicide = () => {
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
                4. Self-harm and Suicide
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
                    At Rippl, mental health and well-being of our users
                    matters. We understand that issues related to mental
                    health and well-being need awareness. That is why we
                    support our users, who wish to relate their
                    experiences, which may relate to self-harm,
                    suicidal thoughts, depression, or any other
                    mental health concerns.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.1rem",
                }}
                >
                    While we support people who intend to relate their
                    stories, we do not want users to promote suicide,
                    self-harm or content that poses risk to other users
                    of Rippl. In the event where you believe that a user is
                    at risk, we request that you get in touch with local
                    emergency services available in your area.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.1rem",
                }}
                >
                    If you are depressed, have thoughts of self-harm or
                    suicide, we want you to know that you are not alone
                    in this struggle, and we encourage you to reach out
                    to organisations adept at providing the necessary support.
                    Please see the information relating to helplines
                    published by the Government of India’s Mental Health
                    Rehabilitation Helpline can be reached at 1800-599-0019.
                    You may also connect with many other organisations in
                    your local areas.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.1rem",
                }}
                >
                    Read more about the law on mental health, self-harm
                    and suicide below:
                </p>

                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="stretch"
                    ml="0.5rem"
                >
                    {
                        communityGuidelines.selfHarmAndSuicide
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

export default SelfHarmAndSuicide;