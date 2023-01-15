import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";

const OptingOut = () => {
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
                8. Opting Out
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
                        {`You can always opt out of our Services or 
                        choose not to disclose information to us at any time. 
                        However, keep in mind that some information may be 
                        needed to register with us or to take advantage of 
                        some of our special features. By providing limited 
                        information, or by availing the opt-out provision, 
                        you may not be able to access full functionalities 
                        of our Services and Application, and some features 
                        may be disabled for your access.`}
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
                        {`We reserve the right to continue to keep a copy of 
                        any of your Personal Information if required by law. 
                        We may use any aggregated/anonymised data derived from 
                        your account, in a matter which shall not infringe upon 
                        your privacy.`}
                    </p>
                </Box>
            </Box>
        </Box>
    )
}

export default OptingOut;