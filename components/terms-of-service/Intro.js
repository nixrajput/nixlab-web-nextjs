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
                These Terms of Service were last updated on 25 November 2022.
            </h4>

            <p
                style={{
                    color: colors.primary[100],
                }}
            >
                We at NixLab Technologies, its affiliates,
                subsidiaries, successors in interest, (Company, we, our, us ),
                own, manage, and operate the application Rippl (as defined below
                and referred to as Application). The Company provides you with
                the Application, the associated customized services which
                include but are not limited to providing you with a
                micro-blogging platform, provision of content, and access to
                content which is created and uploaded by users on the
                Application (as defined below and referred to as Content) as
                sought to be accessed by you (Services). These Terms of
                Services (Terms) govern your access to and use of our Services,
                which includes the website, the associated mobile application,
                SMS, APIs, e-mail notifications, and any Content available on
                the Services in whichever form and format capable of
                communication.
            </p>

            <p style={{
                marginTop: "1rem",
                color: colors.primary[100],
            }}
            >
                By accessing, downloading, using our Services, you agree to be
                bound by these Terms, and you further explicitly consent to our
                Privacy Policy and Community Guidelines. We urge you to access,
                review and familiarize yourself with these Terms periodically,
                for your continued use of the Services, which will constitute
                in your consent and agreement to these Terms.
            </p>

            <p style={{
                marginTop: "1rem",
                color: colors.primary[100],
            }}
            >
                For ease of reference, we are defining certain terms as below
                which will be used throughout the Terms and associated policies:
            </p>

            <p style={{
                marginTop: "1rem",
                color: colors.primary[100],
            }}
            >
                Application shall mean and include the software and mobile
                application of Rippl accessed through or downloaded from the
                app store viz., Android or iOS, and accessible from any
                compatible device.
            </p>

            <p style={{
                marginTop: "1rem",
                color: colors.primary[100],
            }}
            >
                Content means and includes, without limitation, any information,
                data, text, pictures, audio, video, GIFs, polls, user profiles,
                software, tags, graphics, and interactive features generated,
                provided, or otherwise made accessible either by you or other
                users or by us or our partners or sponsors on or through the
                Service/s.
            </p>

            <p style={{
                marginTop: "1rem",
                color: colors.primary[100],
            }}
            >
                Rippl shall mean any post by a registered user on the Application.
            </p>

            <p style={{
                marginBottom: "1rem",
                color: colors.primary[100],
            }}
            >
                You or User shall mean any registered user of the Application.
                If you are accepting these Terms and using the Services on
                behalf of any juristic entity or any other person, you
                represent and warrant that you are authorized to do so and
                have the authority to bind such entity or person to these
                Terms, in which case the words “you” and “your” as used in
                these Terms shall refer to such entity or person irrevocably.
            </p>
        </Box>
    )
}

export default Intro;