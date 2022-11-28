import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";

const ChangesInTerms = () => {
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
                11. CHANGES
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
                    mb='0'
                >
                    <p
                        style={{
                            color: colors.primary[100],
                        }}
                    >
                        We may from time to time change these Terms
                        of Service. We may assign or transfer our
                        agreement with you including our associated
                        rights and obligations at any time and you
                        agree to cooperate with us in connection with
                        such an assignment or transfer. We recommend
                        that you periodically check this page for any
                        revised terms. Your continued use of the
                        Services will be deemed to constitute your
                        acceptance of all such revised terms.
                        You may request for earlier versions of
                        these Terms by writing to <a
                            href="mailto:nixlab.in@gmail.com" target='_blank'
                            rel="noreferrer"> nixlab.in@gmail.com</a>.
                    </p>
                </Box>
            </Box>
        </Box >
    )
}

export default ChangesInTerms;