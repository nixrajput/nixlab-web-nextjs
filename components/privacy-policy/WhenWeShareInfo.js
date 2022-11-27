import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";

const list = [
    "We may share any information with our trusted partners or third parties who provide us with infrastructure support services, for meeting the obligations agreed to between you and us. We may also share aggregated, non-personally identifiable information publicly and with our partners, like publishers, advertisers or connected sites to show trends about the general use of our Services. We will seek your consent prior to using or sharing your personal information for any other purpose, if so, identified at a later stage.",
    "We may also use your information to perform analytics and conduct customer research, to determine your interest, for identifying content that generates sales and to analyse traffic patterns.",
    "We also use your information to market to you as per the laws of your country, and to the extent permissible.",
    "You have the ability to allow us to share your information to third parties so that you can avail their services. You may disable or limit such sharing at any time.",
];

const WhenWeShareInfo = () => {
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
                4. When We Share Your Information
            </h3>

            <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="stretch"
                ml="1rem"
            >
                {
                    list.map((text, index) => (
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

export default WhenWeShareInfo;