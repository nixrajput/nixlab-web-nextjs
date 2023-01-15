import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";

const UserRights = () => {
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
                6. User Rights On Rippl
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
                        {`We want to ensure that you are fully empowered on the 
                        Rippl platform and are completely aware of the rights 
                        that you are entitled to in the course of using our 
                        platform. You have a number of rights in relation to 
                        the information we hold about you.`}
                    </p>
                </Box>

                {/* ---------------------- */}

                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="stretch"
                    ml="1rem"
                >
                    {
                        [
                            "Access – The right to access the information we hold about you, and to obtain details of the processing. You also have the right to access a list of all the third parties that have your Personal Information through us.",
                            "Rectification – The right to seek, correct, update and modify the information available with us, to ensure accuracy.",
                            "Cancellation – The right to seek to cancel or erase, free of charge, your personal data when it is inadequate, excessive, or unnecessary. This shall be subject to lawful processing measures and any legal prescriptions.",
                            "Objection – The right to withdraw your consent to our continued processing of the information, at any point of time, subject only to any legitimate reason for continued processing in certain circumstances.",
                            "Portability – The right to seek from us your personal data to be provided to another service provider, in a machine-readable format that we use at the time the request was made.",
                            "Restriction – The right to seek restriction of processing of your personal data, in certain circumstances.",
                        ].map((text, index) => (
                            <Box
                                key={`text-${index}`}
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
                                    {text}
                                </p>
                            </Box>
                        ))
                    }
                </Box>

                {/* ---------------------- */}

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
                        {`You may exercise any of these rights by filling out 
                        the request form at our Reporting and Redressal page. 
                        This shall be subject to the legal requirements, and our 
                        internal procedure.`}
                    </p>
                </Box>
            </Box>
        </Box>
    )
}

export default UserRights;