import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";

const Disclaimer = () => {
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
                8. DISCLAIMER
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
                        THE SERVICE (INCLUDING, WITHOUT LIMITATION, ANY
                        CONTENT) IS PROVIDED “AS IS” AND “AS AVAILABLE”
                        AND IS WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                        IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE
                        IMPLIED WARRANTIES OF TITLE, NON-INFRINGEMENT,
                        MERCHANTABILITY AND FITNESS FOR A PARTICULAR
                        PURPOSE, AND ANY WARRANTIES IMPLIED BY ANY COURSE
                        OF PERFORMANCE OR USAGE OF TRADE, ALL OF WHICH
                        ARE EXPRESSLY DISCLAIMED. YOUR USE OF THE SERVICE
                        IS SOLELY AT YOUR OWN RISK. THE COMPANY AND ITS
                        DIRECTORS, EMPLOYEES, AGENTS, AND PARTNERS DO NOT
                        WARRANT THAT: THE SERVICE WILL BE SECURE OR
                        AVAILABLE AT ANY PARTICULAR TIME OR LOCATION;
                        OR, ANY DEFECTS OR ERRORS WILL BE CORRECTED; OR,
                        ANY CONTENT OR SOFTWARE AVAILABLE AT OR THROUGH
                        THE SERVICE IS FREE OF VIRUSES OR OTHER HARMFUL
                        COMPONENTS; OR, THE RESULTS OF USING THE SERVICE
                        WILL MEET YOUR REQUIREMENTS. DO NOT USE ANY
                        SOFTWARE, DEVICE, SCRIPTS, BOTS OR OTHER MEANS
                        TO ACCESS, SCRAPE, CRAWL OR SPIDER THE APPLICATION
                        FOR ANY TYPE OF PUBLIC AND PRIVATE DATA OR
                        INFORMATION. UNLESS YOU RECEIVE EXPLICIT
                        PERMISSION BY KOO IN WRITING, YOU MUST NOT: USE
                        BOTS OR OTHER AUTOMATED METHODS TO ACCESS THE
                        APPLICATION. SCRAP OR COPY PROFILES OR ANY OTHER
                        INFORMATION OF THE APPLICATION THROUGH CRAWLERS,
                        PLUG-INS, ADD-ONS OR ANY OTHER TECHNOLOGY.
                        MANIPULATE OR BOOST CONTENT IN ANY MANNER USING
                        AUTOMATED OR OTHER UNWARRANTED MEANS.
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
                        THE SERVICE WILL BE SECURE OR AVAILABLE AT ANY
                        PARTICULAR TIME OR LOCATION; OR,
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
                        ANY DEFECTS OR ERRORS WILL BE CORRECTED; OR,
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

                    <p
                        style={{
                            color: colors.primary[100],
                        }}
                    >
                        ANY CONTENT OR SOFTWARE AVAILABLE AT OR
                        THROUGH THE SERVICE IS FREE OF VIRUSES OR
                        OTHER HARMFUL COMPONENTS; OR,
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
                        4.
                    </p>

                    <p
                        style={{
                            color: colors.primary[100],
                        }}
                    >
                        THE RESULTS OF USING THE SERVICE WILL MEET
                        YOUR REQUIREMENTS.
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
                            fontWeight: 600
                        }}
                    >
                        DO NOT USE ANY SOFTWARE, DEVICE, SCRIPTS,
                        BOTS OR OTHER MEANS TO ACCESS, SCRAPE, CRAWL
                        OR SPIDER THE APPLICATION FOR ANY TYPE OF
                        PUBLIC AND PRIVATE DATA OR INFORMATION. UNLESS
                        YOU RECEIVE EXPLICIT PERMISSION BY KOO IN WRITING,
                        YOU MUST NOT:
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
                        USE BOTS OR OTHER AUTOMATED METHODS TO ACCESS
                        THE APPLICATION.
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
                        SCRAP OR COPY PROFILES OR ANY OTHER INFORMATION
                        OF THE APPLICATION THROUGH CRAWLERS, PLUG-INS,
                        ADD-ONS OR ANY OTHER TECHNOLOGY.
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

                    <p
                        style={{
                            color: colors.primary[100],
                        }}
                    >
                        MANIPULATE OR BOOST CONTENT IN ANY MANNER
                        USING AUTOMATED OR OTHER UNWARRANTED MEANS.
                    </p>
                </Box>

                {/* ------------------ */}
            </Box>
        </Box>
    )
}

export default Disclaimer;