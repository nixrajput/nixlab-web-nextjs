import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";
import { communityGuidelines } from "../../data";

const ReligiouslyOffensiveContent = () => {
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
                2. Religiously Offensive Content
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
                    Be respectful of the religious beliefs of others.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.1rem",
                }}
                >
                    You must always be respectful of the religious
                    faith and beliefs of others. Regardless of whether
                    they share the same views or beliefs as you.
                    You must not publish anything which is hurtful to
                    the sentiments of others or insults their religion
                    or customs and/or causes communal discord. Any
                    actions where gods or religious deities, prophets,
                    figureheads, reincarnations and leaders are abused
                    or where symbols or emblems of a religion are
                    morphed or destroyed or desecrated with a view to
                    hurt sentiments or cause disharmony may amount to
                    religiously offensive content.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.1rem",
                }}
                >
                    Please note that this is not a complete list, and
                    there could be other instances which could violate
                    this guideline.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.1rem",
                }}
                >
                    Read more about the law on Religiously Offensive Content below:
                </p>

                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="stretch"
                    ml="0.5rem"
                >
                    {
                        communityGuidelines.religiouslyOffensiveContent
                            .map((item, index) => (
                                <Box
                                    key={`hate-speech-and-discrimination-${index}`}
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
                            ))
                    }
                </Box>
            </Box>
        </Box>
    )
}

export default ReligiouslyOffensiveContent;