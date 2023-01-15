import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";
import { communityGuidelines } from "../../data";

const IdentityTheft = () => {
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
                10. Identity Theft and Impersonation
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
                    Identity theft is serious. Don’t impersonate any
                    other person.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.1rem",
                }}
                >
                    Rippl account that pose as another person, brand or
                    organisation in a confusing or deceptive manner is
                    liable to be permanently suspended. Identity theft
                    includes your usage of another person’s electronic
                    signature, password or any other unique identification
                    feature in a dishonest manner. As your association with
                    the platform is based on the representations made by you,
                    we reserve the right to terminate your account based on
                    such false representations made by you.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.1rem",
                }}
                >
                    You must not impersonate or pose as another person,
                    brand, or organization to deceive or mislead users
                    about the origin of the content. Thus, you are
                    encouraged to voluntarily verify yourself and ensure
                    that all the details provided in your profile are
                    accurate and do not, in any manner, constitute
                    misrepresentation.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.1rem",
                }}
                >
                    You must not use the platform to offer access to
                    lotteries, gambling or encourage money laundering,
                    prostitution, human or child trafficking, organised
                    violence or any other criminal activity. You must
                    not post content that threatens public order or
                    incites other users to commit an offence or prevents
                    investigation of any offence.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.1rem",
                }}
                >
                    Please note that this is not a complete list, and there
                    could be other instances which could violate this guideline.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.1rem",
                }}
                >
                    Read more about the law on Identity Theft and Impersonation:
                </p>

                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="stretch"
                    ml="0.5rem"
                >
                    {
                        communityGuidelines.identityTheft
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

export default IdentityTheft;