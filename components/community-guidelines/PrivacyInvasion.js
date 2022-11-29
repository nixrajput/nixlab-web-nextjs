import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";
import { communityGuidelines } from "../../data";

const PrivacyInvasion = () => {
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
                8. Invasion of Privacy
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
                    Respect space and privacy of others.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.1rem",
                }}
                >
                    Rippl expects users to respect privacy of others.
                    You must not publish, share, or encourage the
                    publication of any personal information of another
                    person that invades their privacy.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.1rem",
                }}
                >
                    You must not capture, share, publish images of a
                    person’s private area without their explicit consent.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.1rem",
                }}
                >
                    You must not post content that contains personal attacks,
                    abusive language, slangs or expletives in any languages;
                    do not direct other users to engage in such language.
                    Do not use abusive language, slang, or expletives in any
                    language and do not direct it at other users. You must not
                    engage in name calling, malicious insults with racial
                    undertones or make comments on anyone’s attributes,
                    including their physical attributes.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.1rem",
                }}
                >
                    It is a punishable offence for anyone to capture, share,
                    publish images pertaining to the private area of any
                    person without their express consent. This would mean
                    images relating to a person’s naked or undergarment clad
                    genitals, pubic area, buttocks, or female breast/s.
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

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.1rem",
                }}
                >
                    A person’s right to privacy is an inherent and
                    fundamental right and is inclusive of their right
                    to be left alone and the preservation of their
                    personal intimacies. The right is meant to protect
                    the autonomy of a person and is not severed from
                    the individual by their mere presence on a public
                    platform like ours.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.1rem",
                }}
                >
                    Please note that this is not a complete list,
                    and there could be other instances which could
                    violate this guideline.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.1rem",
                }}
                >
                    Read more about the law on Privacy below:
                </p>

                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="stretch"
                    ml="0.5rem"
                >
                    {
                        communityGuidelines.invasionOfPrivacy
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
            </Box>
        </Box>
    )
}

export default PrivacyInvasion;