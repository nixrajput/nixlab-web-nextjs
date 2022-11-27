import Head from 'next/head';
import { Box, useTheme } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AppWrap from "../../components/AppWrap";
import ExpandedBox from "../../components/ExpandedBox";
import ResponsiveBox from "../../components/ResponsiveBox";
import PageTitle from "../../components/PageTitle";
import { tokens } from "../../theme/theme";

const socialLinks = [
    {
        id: 1,
        url: 'https://www.instagram.com/nixrajput/',
        icon: <InstagramIcon />
    },
    {
        id: 2,
        url: 'https://www.facebook.com/nixrajput07/',
        icon: <FacebookIcon />
    },
    {
        id: 3,
        url: 'https://twitter.com/nixrajput07/',
        icon: <TwitterIcon />
    },
    {
        id: 4,
        url: 'https://www.linkedin.com/in/nixrajput/',
        icon: <LinkedInIcon />
    },
];

const Contact = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <ExpandedBox
            justifyContent="flex-start"
            alignItems="stretch"
        >
            <Head>
                <title>Contact</title>
            </Head>

            <PageTitle>
                Contact <span>Us</span>
            </PageTitle>

            <ResponsiveBox>
                <p
                    style={{
                        color: colors.primary[100],
                        marginBottom: '1rem'
                    }}
                >
                    For any queries, please contact us at
                    at <a
                        href="mailto:nixlab.in@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        nixlab.in@gmail.com</a>.
                </p>

                <p
                    style={{
                        color: colors.primary[100],
                        marginBottom: '0.5rem'
                    }}
                >
                    Follow us on social media 👇
                </p>

                <Box
                    display='flex'
                    flexDirection='row'
                    alignItems='flex-start'
                    justifyContent='flex-start'
                >
                    {
                        socialLinks.map((link) => (
                            <Box
                                key={`social-link-${link.id}`}
                                display='flex'
                                flexDirection='row'
                                alignItems='center'
                                justifyContent='center'
                                style={{
                                    marginRight: '1rem'
                                }}
                            >
                                <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {link.icon}
                                </a>
                            </Box>
                        ))
                    }
                </Box>
            </ResponsiveBox>
        </ExpandedBox>
    )
}

export default AppWrap(Contact, 'contact');