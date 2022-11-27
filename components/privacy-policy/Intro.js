import Link from 'next/link';
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
                }}
            >
                This Privacy Policy was last updated on 24th November 2022.
            </h4>

            <p
                style={{
                    color: colors.primary[100],
                }}
            >
                NixLab Technologies (Company, we, our, us) takes your privacy very seriously.
                This Privacy Policy (Privacy Policy) describes the usage of information provided
                or disclosed to the Company, which may be inclusive of your personal information,
                and also brings to your notice the rights which are afforded to you as per the
                terms of this Privacy Policy. This Privacy Policy must be read in conjunction with
                the <Link href='/terms-of-service'>Terms of Service</Link> and the <Link href='/community-guidelines'>Community Guidelines</Link>.
            </p>

            <p style={{
                marginTop: "1rem",
                marginBottom: "1rem",
                color: colors.primary[100],
            }}
            >
                Our Privacy Policy is in accordance with the applicable laws in the jurisdictions
                we offer our Services. All capitalized terms that have not been specifically defined
                herein shall have the same meaning as provided under the Terms of Service.
            </p>

            <p style={{
                marginBottom: "1rem",
                color: colors.primary[100],
            }}
            >
                By accessing, downloading, or using the website or the allied mobile application,
                Rippl (Application) you agree to be governed by this Privacy Policy.
            </p>
        </Box>
    )
}

export default Intro;