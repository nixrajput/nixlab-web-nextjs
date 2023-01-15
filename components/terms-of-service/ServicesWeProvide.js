import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";

const ServicesWeProvide = () => {
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
                2. SERVICES
            </h3>

            <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="stretch"
                ml="1rem"
            >
                <p
                    style={{
                        color: colors.primary[100],
                        marginRight: '0.5rem',
                    }}
                >
                    The Application provides you with the ability to:
                </p>

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
                        1.
                    </p>

                    <p style={{
                        color: colors.primary[100],
                    }}
                    >
                        Create and maintain your own profile on the
                        Application after registration.
                    </p>
                </Box>

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
                        2.
                    </p>

                    <p style={{
                        color: colors.primary[100],
                    }}
                    >
                        Share your Content; re-share Content shared by
                        others; connect, follow and communicate with
                        other Users.
                    </p>
                </Box>

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
                        3.
                    </p>

                    <p style={{
                        color: colors.primary[100],
                    }}
                    >
                        Remove, edit, modify your own Posts, and
                        comments made on your’s or others’ Posts.
                    </p>
                </Box>

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
                        4.
                    </p>

                    <p style={{
                        color: colors.primary[100],
                    }}
                    >
                        Control your own privacy, as per the Privacy Policy
                        of the Company, right from your own account.
                        This gives you the ability to determine which
                        other Users can view your profile and/or any
                        other Content uploaded by you on the Application.
                        From time to time we may introduce additional
                        features which will assist you in safeguarding
                        your privacy.
                    </p>
                </Box>
            </Box>
        </Box>
    )
}

export default ServicesWeProvide;