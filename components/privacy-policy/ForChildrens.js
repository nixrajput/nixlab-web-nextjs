import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";

const ForChildrens = () => {
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
                12. Children
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
                        "You must have attained the age of majority to be able to use and access our Services. If you are a minor in your jurisdiction, your registration and use of our Services must be with the supervision of an adult.",
                        "As a parent or legal guardian, please do not allow your minors under your care to submit Personal Information to us. In the event that such personal data of a minor is disclosed to us, you hereby consent to the processing of the minor’s personal data and accept and agree to be bound by this Privacy Policy and take responsibility for his or her actions."
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

export default ForChildrens;