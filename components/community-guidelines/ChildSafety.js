import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";
import { communityGuidelines } from "../../data";

const ChildSafety = () => {
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
                15. Child Safety
            </h3>

            <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="stretch"
                ml="1rem"
            >
                <p style={{
                    color: colors.primary[100],
                    marginTop: "0.5rem",
                    fontSize: "1.1rem",
                }}
                >
                    Rippl is designed to preserve the safety of minors.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.1rem",
                }}
                >
                    We take a zero-tolerance approach to any content
                    that exploits or promotes child sexual exploitation.
                    For the purposes of this section, a child is a
                    somebody who has not reached the age of majority.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.1rem",
                }}
                >
                    You are not allowed to transmit, publish, promote,
                    advertise or upload any content that depicts or promotes
                    child exploitation. Such content includes, but is not
                    limited to:
                </p>

                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="stretch"
                    ml="0.5rem"
                >
                    {
                        communityGuidelines.childSafety
                            .map((item, index) => (
                                <Box
                                    key={`item-${index}`}
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
                                        •
                                    </p>

                                    <p style={{
                                        color: colors.primary[100],
                                    }}
                                    >
                                        {item}
                                    </p>
                                </Box>
                            ))
                    }
                </Box>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "0.5rem",
                    fontSize: "1.1rem",
                }}
                >
                    Please note that this is not a complete list, and
                    there could be other instances that could violate
                    this guideline.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.1rem",
                }}
                >
                    Read more about the law on Child Safety below:
                </p>

                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="stretch"
                    ml="0.5rem"
                >
                    <Box
                        display='flex'
                        flexDirection='column'
                        alignItems='flex-start'
                        justifyContent='flex-start'
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
                                •
                            </p>

                            <p style={{
                                color: colors.primary[100],
                            }}
                            >
                                <span
                                    style={{
                                        color: colors.primary[100],
                                        fontWeight: 700,
                                    }}
                                >Sexual Harassment Against a Child:
                                </span> Section 11 of the <a href="https://legislative.gov.in/sites/default/files/The%20Protection%20of%20Children%20from%20Sexual%20Offences%20Act%2C%202012_0.pdf"
                                    target='_blank' rel='noreferrer'
                                > Protection of Children From Sexual Offences,
                                    2012</a>,
                                lays down scenarios as to when a child is
                                sexually harassed. Among the grounds,
                                constantly watching, following or contact
                                a child with sexual intent through
                                electronic or digital means amounts to
                                Sexual Harassment. Threatening to use
                                any body part of the child or threatening
                                to involve a child in a sexual act by
                                any form of media through electronic,
                                film or digital is Sexual Harassment.
                            </p>
                        </Box>
                    </Box>

                    <Box
                        display='flex'
                        flexDirection='column'
                        alignItems='flex-start'
                        justifyContent='flex-start'
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
                                •
                            </p>

                            <p style={{
                                color: colors.primary[100],
                            }}
                            >
                                <span
                                    style={{
                                        color: colors.primary[100],
                                        fontWeight: 700,
                                    }}
                                >Punishment for Publishing or Transmitting
                                    Obscene Content: </span> As per Section
                                67B of the <a href="https://legislative.gov.in/sites/default/files/A2000-21_0.pdf"
                                    target='_blank' rel='noreferrer'>
                                    Information and Technology Act,
                                    2000
                                </a>, a person can be punished for
                                publishing or transmitting material
                                depicting children in sexually explicit
                                acts in electronic forms.This includes:
                            </p>
                        </Box>

                        <Box
                            display='flex'
                            flexDirection='column'
                            alignItems='flex-start'
                            justifyContent='flex-start'
                            ml='1.5rem'
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
                                    ○
                                </p>

                                <p style={{
                                    color: colors.primary[100],
                                }}
                                >
                                    Creating text, digital images,
                                    collecting, downloading, advertising,
                                    promoting exchanges or distributing
                                    material in any electronic form depicting
                                    children in obscene or indecent or
                                    sexually explicit manner.
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
                                    ○
                                </p>

                                <p style={{
                                    color: colors.primary[100],
                                }}
                                >
                                    Cultivating, enticing, or inducing
                                    children to online relationship with
                                    one or more children for sexually
                                    explicit acts in a manner that offends
                                    any reasonable adult is punishable.
                                </p>
                            </Box>

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
                                        marginRight: '0.5rem',
                                    }}
                                >
                                    ○
                                </p>

                                <p style={{
                                    color: colors.primary[100],
                                }}
                                >
                                    If a person is found to have records
                                    of the above content in any electronic
                                    form, they may be imprisoned for a
                                    term of 5 years, if a first time
                                    offender.
                                </p>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ChildSafety;