import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";

const Termination = () => {
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
                7. TERMINATION
            </h3>

            <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="stretch"
                ml="1rem"
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
                        1.
                    </p>

                    <p style={{
                        color: colors.primary[100],
                    }}
                    >
                        The Company reserves the right to suspend or
                        terminate your access to the Application and
                        the Services with or without notice and to exercise
                        any other remedy available under law, in cases where:
                    </p>
                </Box>

                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="stretch"
                    ml="1rem"
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
                            You are in breach of any terms and conditions
                            of these Terms.
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
                            •
                        </p>

                        <p style={{
                            color: colors.primary[100],
                        }}
                        >
                            The Company is unable to verify or authenticate
                            any information provided to Company by you.
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
                            •
                        </p>

                        <p style={{
                            color: colors.primary[100],
                        }}
                        >
                            The Company has reasonable grounds for
                            suspecting any illegal, fraudulent, spammy
                            or abusive activity on your part.
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
                            •
                        </p>

                        <p style={{
                            color: colors.primary[100],
                        }}
                        >
                            The Company believes in its sole discretion
                            that your actions may cause legal liability
                            for you, other Users or for the Company, or
                            are contrary to the interests of the
                            Application or the Company; or
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
                            •
                        </p>

                        <p style={{
                            color: colors.primary[100],
                        }}
                        >
                            directed by law enforcement.
                        </p>
                    </Box>
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
                        Once temporarily or permanently suspended, or
                        terminated, the User may not continue to use the
                        Application under the same account, a different
                        account or re-register under a new account,
                        unless approved by the Company. On termination
                        of an account due to the reasons mentioned herein,
                        such User shall no longer have access to Content by
                        such User on the Application , to the extent
                        permissible in law.
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
                        The User has the provision to appeal the
                        suspension or termination of the account by
                        contacting <a href="mailto:nixlab.in@gmail.com" target='_blank'
                            rel="noreferrer"> nixlab.in@gmail.com</a> or by
                        submitting this appeal form.
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
                        All provisions of these Terms, which by their
                        nature should survive termination, shall
                        survive termination, including, without
                        limitation, disclaimers, indemnity, and
                        limitations of liability.
                    </p>
                </Box>
            </Box>
        </Box>
    )
}

export default Termination;