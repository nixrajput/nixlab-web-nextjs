import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";

const Idemnity = () => {
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
                9. INDEMNITY
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
                            fontWeight: 600
                        }}
                    >
                        You shall defend, indemnify, and hold harmless
                        the Company, its affiliates, subsidiaries,
                        joint venture partners and each of its, and
                        its affiliates, subsidiaries, join venture
                        partners’ employees, contractors, directors,
                        suppliers and representatives from all
                        liabilities, losses, claims, and expenses,
                        including reasonable attorneys’ fees, that
                        arise from or relate to:
                    </p>
                </Box>

                {/* ------------------ */}

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
                        Your use or misuse of, or access to, the
                        Service; or,
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
                        Your violation of the Terms of Service
                        or any applicable law, contract, policy,
                        regulation or other obligation. We reserve
                        the right to assume the exclusive defense
                        and control of any matter otherwise subject
                        to indemnification by You, in which event
                        You will assist and cooperate with us in
                        connection therewith.
                    </p>
                </Box>

                {/* ------------------ */}
            </Box>
        </Box>
    )
}

export default Idemnity;