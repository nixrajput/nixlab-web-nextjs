import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";
import { communityGuidelines } from "../../data";

const IllegalActivities = () => {
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
                9. Illeagal Activities
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
                    Much like in the real world, do not break the
                    law when you use Rippl.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.1rem",
                }}
                >
                    Rippl strives to ensure that its users are safe.
                    As such, Rippl does not permit any unlawful behaviour
                    or illegal activities. Do not post content that
                    improperly uses emblems and names recognized by The
                    Emblems and Names (Prevention of Improper Use) Act,
                    1950. This includes the Indian National Flag, The Indian
                    Prime Minister, The Government of India, United Nations
                    Organisation, World Health Organisation etc. The complete
                    list of names and emblems is available <a href="https://www.indiacode.nic.in/bitstream/123456789/1896/1/A1950-12.pdf"
                        target="_blank" rel="noreferrer">here</a>.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.1rem",
                }}
                >
                    You must not post content that is illegal or encourages
                    other users to participate in any illegal activity.
                    This includes buying or selling of narcotics, illegal or
                    prescription drugs, alcohol, tobacco products, psychotropic
                    substances or any other category of items that are not
                    permitted to be traded between private individuals.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.1rem",
                }}
                >
                    You must not use the platform to offer access to lotteries,
                    gambling or encourage money laundering, prostitution,
                    human or child trafficking, organised violence or any other
                    criminal activity. You must not post content that threatens
                    public order or incites other users to commit an offence or
                    prevents investigation of any offence.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.1rem",
                }}
                >
                    You must not advertise tobacco, alcohol and other products
                    that violate the Code for Self-Regulation of Advertising
                    Content in India.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.1rem",
                }}
                >
                    Please note that this is not a complete list, and there
                    could be other instances which could violate this guideline.
                </p>

                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="stretch"
                    ml="0.5rem"
                >
                    {
                        communityGuidelines.illegalActivities
                            .map((item, index) => (
                                <Box
                                    key={`item-${index}`}
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
                                            >{item.title}:</span> {item.description}
                                        </p>
                                    </Box>

                                    <Box
                                        key={`item-${index}`}
                                        display='flex'
                                        flexDirection='column'
                                        alignItems='flex-start'
                                        justifyContent='flex-start'
                                        ml='1.5rem'
                                    >

                                        {
                                            item.children ?
                                                item.children.map((child, index) => (
                                                    <Box
                                                        key={`child-${index}`}
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
                                                            {child}
                                                        </p>
                                                    </Box>
                                                ))
                                                :
                                                null
                                        }

                                    </Box>
                                </Box>
                            ))
                    }
                </Box>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                    fontSize: "1.1rem",
                }}
                >
                    Any advertising in relation to such products, tobacco,
                    alcohol will also be in violation of the regulations
                    of Advertising Standards Council of India (ASCI), to
                    ensure that advertisements are not offensive to generally
                    accepted standards of public decency and are not used
                    for the promotion of products, which are regarded as
                    hazardous to society or to individuals.
                </p>
            </Box>
        </Box>
    )
}

export default IllegalActivities;