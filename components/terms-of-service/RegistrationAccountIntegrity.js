import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";

const RegistrationAccountIntegrity = () => {
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
                3. REGISTRATION AND ACCOUNT INTEGRITY
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
                        We provide you with a free account, however,
                        you are required to be registered with us,
                        to avail full functionalities of our Services.
                        You are prohibited from buying or selling or
                        exchanging accounts for cash or kind or any other
                        value or for no value.
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
                        As part of the registration process for creating your
                        account, you will need to provide us with your
                        phone number and/or email address, (which will be
                        verified via a one-time password verification
                        mechanism). You can then create an account
                        username/handle and password for yourself.
                        You must use original and distinct credentials
                        to create an account on our App, which do not
                        infringe any applicable laws and third-party rights.
                        Username/handles must not contain derogatory,
                        demeaning or misleading language or messages or
                        identity or images.
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
                        You undertake that the information you provide to
                        us is accurate, secure, and is not misleading.
                        For all intents and purposes User accounts and
                        handles are the property of the Company and have
                        been licensed for use to you in accordance with
                        these Terms. Usernames or handles are the property
                        of the Company and cannot be sold or commercially
                        dealt with in any manner.
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
                        Please note that if a username has been used by a
                        verified user on another platform, in order to
                        avoid risk of impersonation, the username will
                        not be allotted to anyone else and, if already
                        allotted, may be cancelled at the discretion of
                        Rippl without any notice. Please review our policies
                        related to Eminence in this regard.
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
                        5.
                    </p>

                    <p style={{
                        color: colors.primary[100],
                    }}
                    >
                        We reserve the right to suspend or terminate or
                        remove any account or take any other actions we
                        deem fit with or without notice, if you are in
                        breach of these Terms. In case you have any
                        concern regarding an action taken on your account
                        you can file an appeal by filling this form.
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
                        6.
                    </p>

                    <p style={{
                        color: colors.primary[100],
                    }}
                    >
                        In case of any discrepancy in access to your
                        account, please reach out to us as per the
                        account terms.
                    </p>
                </Box>
            </Box>
        </Box>
    )
}

export default RegistrationAccountIntegrity;