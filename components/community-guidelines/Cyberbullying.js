import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";
import { communityGuidelines } from "../../data";

const Cyberbullying = () => {
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
                7. Cyberbullying
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
                    Be kind to others. Don’t be a bully.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.1rem",
                }}
                >
                    Content that threatens others is not allowed on Rippl.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.1rem",
                }}
                >
                    Rippl does not allow users to engage in bullying or
                    harassment on the platform. This includes sharing
                    defamatory or libellous content or sending threatening
                    messages or insults to another Rippl user.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.1rem",
                }}
                >
                    You must not post content that contains personal attacks,
                    abusive language, slangs or expletives in any languages;
                    do not direct other users to engage in such language. Do not
                    use abusive language, slang, or expletives in any language
                    and do not direct it at other users. You must not engage in
                    name calling, malicious insults with racial undertones or
                    make comments on anyone’s attributes, including their
                    physical attributes.
                </p>

                <p style={{
                    color: colors.primary[100],
                    marginTop: "1rem",
                    fontSize: "1.1rem",
                }}
                >
                    There is a difference between healthy discussion,
                    debate and disagreement and engaging in direct
                    personal attacks on another person. We encourage
                    you to indulge in healthy discussions, debates and
                    disagreements, by way of expression of your thoughts,
                    ideas, in a conversational manner; but we do not want
                    you to confront people while engaging in tones of discord,
                    aggressive statements, and malicious attacks.
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
            </Box>
        </Box>
    )
}

export default Cyberbullying;