import Link from "next/link";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";

const Reference = () => {
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
                10. REFERENCE
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

                    <p
                        style={{
                            color: colors.primary[100],
                        }}
                    >
                        If you have any questions regarding the Service,
                        please contact Rippl at <a href="mailto:nixlab.in@gmail.com" target='_blank'
                            rel="noreferrer"> nixlab.in@gmail.com</a>.
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

                    <p
                        style={{
                            color: colors.primary[100],
                        }}
                    >
                        Please note that for the purpose of validation,
                        you shall be required to provide information
                        (including, but not limited to your email address,
                        contact number, or, registered mobile number, etc.)
                        for the purpose of sufficient identification,
                        and authentication, and taking Your service
                        request. Please refer to our <Link href='/privacy-policy'>
                            Privacy Policy</Link> on how we deal with
                        information.
                    </p>
                </Box>
            </Box>
        </Box>
    )
}

export default Reference;