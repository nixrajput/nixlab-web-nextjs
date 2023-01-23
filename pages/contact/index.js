import Head from 'next/head';
import { Box, useTheme } from "@mui/material";
import AppWrap from "../../components/AppWrap";
import ExpandedBox from "../../components/ExpandedBox";
import ResponsiveBox from "../../components/ResponsiveBox";
import PageTitle from "../../components/PageTitle";
import { tokens } from "../../theme/theme";
import { socialLinks } from '../../data';

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
                <h4
                    style={{
                        color: colors.primary[100],
                        marginBottom: '1.5rem',
                    }}
                >
                    For any queries, please contact us
                    at <a
                        href="mailto:nixlab.in@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        nixlab.in@gmail.com</a>.
                </h4>

                <h4
                    style={{
                        color: colors.primary[100],
                        marginBottom: '1rem',
                    }}
                >
                    Follow us on social media 👇
                </h4>

                <Box
                    display='flex'
                    flexDirection='row'
                    alignItems='center'
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
                                sx={{
                                    marginRight: '1rem',
                                    ':last-child': {
                                        marginRight: '0'
                                    },
                                    '& a svg': {
                                        color: colors.primary[100],
                                        fontSize: '2rem',
                                        transition: 'all 0.2s ease-in-out',
                                        ':hover': {
                                            color: colors.accent[800],
                                        }
                                    }
                                }}
                            >
                                <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                        textDecoration: 'none',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
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

export default AppWrap(Contact);