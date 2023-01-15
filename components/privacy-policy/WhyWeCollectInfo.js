import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";

const whyWeCollect = [
    "To help us identify you when you log onto the Application and when you register an account with us, and, to validate, authorize and map a specific profile with an authorized user.",
    "To enhance the quality of the Services that we provide and improve your experience during browsing.",
    "For providing location-based services, as and where requested by you.",
    "For the performance of legal obligations.",
    "To communicate with you.",
    "To provide you with news, special offers, general information about other products and services along with marketing information and surveys, as agreed to by you.",
    "To provide and process service requests initiated by you.",
];

const WhyWeCollectInfo = () => {
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
                3. Why We Collect This Information
            </h3>

            <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="stretch"
                ml="1rem"
            >
                {
                    whyWeCollect.map((text, index) => (
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

export default WhyWeCollectInfo;