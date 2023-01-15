import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";
import { communityGuidelines } from "../../data";

const MaliciousPrograms = () => {
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
                14. Malicious Programs
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
                    Do not share malicious programs.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.1rem",
                }}
                >
                    Do not violate the Intellectual Property Rights
                    of others.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.1rem",
                }}
                >
                    You must not share any content that contains a
                    program with any virus or code capable of causing
                    harm, loss to users on the platform. You must not
                    share, upload or publish any program that could
                    disrupt, cause harm, limit the functionality of
                    the platform. Following this guideline while
                    posting content or messaging other users will
                    contribute to a safe and enjoyable experience for
                    you, other users and the larger community.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.1rem",
                }}
                >
                    As a user you must note that the law does not
                    allow anyone to gain unauthorized access or
                    restrain the original owner from being able to
                    access their own resources, owing to some action
                    on your part. You must ensure that you do not
                    upload any content that can potentially interfere
                    with the communication services which are available
                    to our other users.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.1rem",
                }}
                >
                    Please note that this is not a complete list, and
                    there could be other instances which could violate
                    this guideline.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.1rem",
                }}
                >
                    Read more on the law on Malicious Programs below:
                </p>

                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="stretch"
                    ml="0.5rem"
                >
                    {
                        communityGuidelines.maliciousSoftware
                            .map((item, index) => (
                                <Box
                                    key={`item-${index}`}
                                    display='flex'
                                    flexDirection='column'
                                    alignItems='flex-start'
                                    justifyContent='flex-start'
                                >
                                    <Box
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

                                    <Box
                                        key={`item-${index}`}
                                        display='flex'
                                        flexDirection='column'
                                        alignItems='flex-start'
                                        justifyContent='flex-start'
                                        ml='1.5rem'
                                    >

                                        {
                                            item.children ?
                                                item.children.map((child, index) => (
                                                    <Box
                                                        key={`child-${index}`}
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
                                                            ○
                                                        </p>

                                                        <p style={{
                                                            color: colors.primary[100],
                                                        }}
                                                        >
                                                            {child}
                                                        </p>
                                                    </Box>
                                                ))
                                                :
                                                null
                                        }

                                    </Box>
                                </Box>
                            ))
                    }
                </Box>
            </Box>
        </Box>
    )
}

export default MaliciousPrograms;