import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";
import { communityGuidelines } from "../../data";

const ViolentContent = () => {
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
                5. Violent Content
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
                    Do not post content that threatens, depicts or
                    glorifies violence, or encourages acts of violence.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.1rem",
                }}
                >
                    You must not use Koo to make any direct or indirect
                    threats of physical harm against another person.
                    This includes any threat relating to theft, vandalism,
                    wrongful confinement, bodily, mental or financial harm.
                    If you believe someone is in imminent danger, you should
                    get in touch with the local law enforcement agency and
                    report the situation at the earliest.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.1rem",
                }}
                >
                    Koo does not permit its users to post content which
                    involves references to mass murder, violent events, or
                    specific means of violence. Do not post content that
                    incites acts of violence against a group of people,
                    minors or animal abuse. Content that hosts imagery of
                    corpses, severed limbs, gory depiction of aftermaths of
                    any natural disasters, medical procedures, which may
                    shock or disgust viewers is not permitted.You must also
                    refrain from posting content relating to suicide or
                    self-harm. Including content that is construed as
                    promoting or suggesting this course of action.
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
                    Read more about the law on Violent Content below:
                </p>

                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="stretch"
                    ml="0.5rem"
                >
                    {
                        communityGuidelines.violentContent
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

export default ViolentContent;