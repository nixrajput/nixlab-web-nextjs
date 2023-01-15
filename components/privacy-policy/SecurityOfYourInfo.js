import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";

const SecurityOfYourInfo = () => {
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
                9. Security Of Your Information
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
                        "Your personal data is maintained by us in electronic form. We shall take all necessary precautions to protect your personal data and implement reasonable security practices and measures including certain managerial, technical, operational and physical security control measures that are commensurate with respect to the information being collected and the nature of our business. Specifically, we will ensure that the security infrastructure put in place by us to safeguard your Personal Information against loss, unauthorised access, destruction, use, processing, storage, modification or de-anonymisation, will at all times be adherent to the best industry standards.",
                        "We restrict access to personal information to Company employees, contractors, and agents who need that information in order to process it. Anyone with this access is subject to strict contractual confidentiality obligations and may be disciplined or terminated if they fail to meet these obligations."
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

export default SecurityOfYourInfo;