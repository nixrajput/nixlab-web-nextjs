import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";

const Support = () => {
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
                6. SUPPORT
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
                        The Company offers email based, and online
                        support tools. You may access support resources
                        at the Reporting and Redressal Forms page or or
                        contact our support by emailing
                        at <a href="mailto:nixlab.in@gmail.com" target='_blank'
                            rel="noreferrer"> nixlab.in@gmail.com</a> Under certain
                        exceptional circumstances, we may also request you to
                        reach out to other authorized, appointed contact persons
                        for resolution of your queries or support requests.
                        The Company does not make any promises regarding
                        how quickly we will respond to your request for
                        support, or that we will be able to fix any problems
                        you may be having. Any suggestions by the Company
                        regarding use of the Services shall not be construed
                        as a warranty.
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
                        We are an intermediary enabling online interaction
                        between two or more users and allowing them to create,
                        upload, share, disseminate, modify or access
                        information using our services. Koo does not
                        undertake any obligation to monitor user
                        generated content, except where specifically
                        mandated under applicable law. Resolution of
                        grievances or disputes or claims relating to
                        violation of legal or personal or public or
                        community rights (collectively known as grievances)
                        is solely within the domain of legal or judicial
                        authorities. We do not adjudicate any personal
                        grievances.
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
                        3.
                    </p>

                    <p style={{
                        color: colors.primary[100],
                    }}
                    >
                        If a post or its contents are contested or disputed,
                        reporters have the option to use the “Report Post” or
                        “Report User” option within the Rippl App. Reporters
                        may also submit to Rippl, orders from judicial or
                        other authorities to take down any contested or
                        disputed content at this link. Such orders will be
                        acted upon on a priority basis. A Grievance
                        Redressal Process in accordance with applicable
                        law has been created and is available on the
                        Compliance page on our website.
                    </p>
                </Box>
            </Box>
        </Box>
    )
}

export default Support;