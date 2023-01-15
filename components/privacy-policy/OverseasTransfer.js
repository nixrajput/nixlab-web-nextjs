import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";

const OverseasTransfer = () => {
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
                11. Overseas Transfer
            </h3>

            <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="stretch"
                ml="1rem"
            >
                {
                    [
                        "Your information may be transferred to and stored in locations outside laws of the territory in which the Company is registered and where the Application is registered on the app stores. We will do this only when the destination jurisdiction has an adequate and appropriate level of protection and where the transfer is lawful, and only when the same is required for us to meet our contractual and statutory obligations, and only where the laws of your country allow us to do so. For completeness, the information which may be transferred outside is such information which may be sent to foreign jurisdictions as per the applicable laws.",
                        "When we transfer your personal data from your Home Country (country, state and city in which you are present) to the Alternate Country (another country, state and city), we will comply with our legal and regulatory obligations in relation to your personal data, including having a lawful basis for transferring personal data and putting appropriate safeguards in place to ensure an adequate level of protection for the personal data. We will also ensure that the recipient in Alternate Country is obliged to protect your personal data at a standard of protection comparable to the protection under applicable laws.",
                        "Our lawful basis for such transfer will be either on the basis of content or one of the safeguards permissible by laws.",
                        "For transfer of data outside the EEA, we will follow adequate safeguards mandated under the GDPR. We ensure an adequate level of protection for the rights of data subjects based on the adequacy of the receiving country’s data protection laws, contractual obligations placed on the recipient of the data (model contractual clauses)."
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
                                {index + 1}.
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
        </Box>
    )
}

export default OverseasTransfer;