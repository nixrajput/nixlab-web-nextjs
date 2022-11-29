import Link from "next/link";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";

const Intro = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="stretch"
        >
            <h4
                style={{
                    color: colors.primary[100],
                    fontSize: '1.2rem',
                    marginBottom: '0.5rem',
                }}
            >
                These Community Guidelines were last updated on 25 November 2022.
            </h4>

            <p
                style={{
                    color: colors.primary[100],
                    fontSize: "1.1rem",
                }}
            >
                Rippl helps its users connect to others and enables meaningful
                engagement within the Rippl community. To ensure this purpose
                is achieved, Rippl requires users to follow these Community
                Guidelines along with the <Link href="/terms-of-service">
                    Terms of Service</Link>.
            </p>

            <p style={{
                marginTop: "1rem",
                color: colors.primary[100],
                fontSize: "1.1rem",
            }}
            >
                Rippl intends to foster a community feeling where all the
                users are part of a larger meeting place and allows the users
                to be able to have a safe space to express their views, ideas,
                and thoughts. Rippl has the utmost regard for the users’ freedom
                of speech and expression as well as their right to privacy.
                In framing these Community Guidelines, care has been taken to
                abide by the letter and spirit of the law of the land, and our
                responsibility to the community in general. Rippl intends to take
                adequate measures for the prevention, mitigation and where
                appropriate, remediation of any human rights violations
                especially those relating to digital media and its uses.
            </p>

            <p style={{
                marginTop: "1rem",
                color: colors.primary[100],
                fontSize: "1.1rem",
            }}
            >
                During your time on the platform, we request you to treat
                your interactions with other users on Rippl as though these
                were interactions in the real world. Before you post any
                content, think about how the people you are talking about
                might feel if you told them in person what you are planning
                to post. The platform comprises many users like you, and we
                would want to make your journey on the platform, as
                comfortable for you, in terms of user engagement,
                participation, and conversations.
            </p>

            <p style={{
                marginTop: "1rem",
                marginBottom: "1rem",
                color: colors.primary[100],
                fontSize: "1.1rem",
            }}
            >
                The Community Guidelines listed below set out actions and
                conduct expected on Rippl. Adhering to the following rules
                of the platform will help us maintain a community that
                encourages healthy discussions, enables the expression
                of diverse ideas and thoughts, safely. If you violate any
                one of these guidelines, an appropriate action might be
                taken against you. This includes but is not limited to
                taking down the violative content and in the appropriate
                circumstances informing the authorities, and suspension
                or termination of your account.
            </p>
        </Box>
    )
}

export default Intro;