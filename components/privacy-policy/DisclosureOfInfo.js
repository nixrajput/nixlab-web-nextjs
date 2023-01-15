import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";

const DisclosureOfInfo = () => {
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
                5. Disclosure Of Information
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
                        {`We may also disclose your Personal Information only:`}
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
                            "As required by law, such as to comply with a judicial order, executive orders, requirement by a law enforcement authority, or by other legal processes.",
                            "When your desired products and services can only be provided if your personal information is disclosed.\nWhen we believe, in good faith, that disclosure is necessary to protect our rights, protect your safety or the safety of others, or, investigate fraud or crime.",
                            "If we (or our affiliates) are involved in a merger, acquisition, or sale of all or substantially all of its assets or equity. Such information shall be disaggregated to the extent possible and shall be subject to execution of appropriate non disclosure agreements and binding privacy undertakings."
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
                        {`We will never rent or sell your personally identifiable information to others.`}
                    </p>
                </Box>
            </Box>
        </Box>
    )
}

export default DisclosureOfInfo;