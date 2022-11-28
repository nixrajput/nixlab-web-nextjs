import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";


const HowLongWeKeepData = () => {
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
                7. How Long Will Your Personal Information Be Stored With Us?
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
                        {`In relation to other Personal Information, 
                        we store them for certain predetermined periods 
                        on the basis of`}
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
                            "statutory and legal requirements",
                            "industry guidelines",
                            "de-identified or pseudonymised data sets to be used in an aggregated format for scientific, statistical or historical purposes."
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
                        {`We retain the information which we have 
                        collected for a period no longer than is necessary, 
                        and as may be required in law. If we need to retain 
                        your Personal Information for a longer period, 
                        we will inform you prior to the extension of the 
                        storage period and seek your explicit consent to 
                        extend the retention period. We will delete your 
                        information whenever you request us to do so. 
                        However, we may archive and/or retain some information 
                        for legal purposes. Any other information which is 
                        processed by us for analytical purposes, will only 
                        be processed in an aggregated or non-identifiable 
                        basis.`}
                    </p>
                </Box>
            </Box>
        </Box>
    )
}

export default HowLongWeKeepData;