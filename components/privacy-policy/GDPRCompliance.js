import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";

const GDPRCompliance = () => {
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
                10. GDPR Compliance
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
                    }}
                >
                    {`The Application may be accessed and used by residents of the European Economic Area (EEA), who would be regulated by the Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data and repealing Directive 95/46/EC (General Data Protection Regulation) (GDPR). EU citizens may reach out to us at: nixlab.in@gmail.com with a subject line “GDPR compliance”. We respond to all requests we receive from individuals wishing to exercise their data protection rights in accordance with applicable data protection laws. Any transfer of data generated from EU citizens shall be subject to the data transfer compliances outlined in GDPR.`}
                </p>
            </Box>
        </Box>
    )
}

export default GDPRCompliance;