import { useRouter } from "next/router";
import Link from "next/link";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";
import { socialLinks } from '../../data';

const Footer = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const router = useRouter();

    const handleRouteChange = (path) => {
        router.push(path);
    };

    return (
        <Box
            position="relative"
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            width="100%"
            bgcolor={colors.background}
            mt="1rem"
        >
            <Box
                position="relative"
                display="flex"
                flexDirection={{
                    xs: "column",
                    sm: "column",
                    md: "column",
                    lg: "row",
                    xl: "row",
                }}
                justifyContent={{
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "space-between",
                    xl: "space-between",
                }}
                alignItems={{
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "flex-end",
                    xl: "flex-end",
                }}
                width="100%"
                maxWidth="1024px"
                p={{
                    xs: "1rem",
                    sm: "1rem",
                    md: "1rem",
                    lg: "1rem 0",
                    xl: "1rem 0",
                }}
            >

                {/* First Column */}

                <Box
                    position="relative"
                    display="flex"
                    flexDirection="column"
                    justifyContent={{
                        xs: "center",
                        sm: "center",
                        md: "center",
                        lg: "flex-start",
                        xl: "flex-start",
                    }}
                    alignItems={{
                        xs: "center",
                        sm: "center",
                        md: "center",
                        lg: "flex-start",
                        xl: "flex-start",
                    }}
                >
                    {/* Copyright */}

                    <p
                        style={{
                            color: colors.primary[100],
                            marginTop: "0.5rem",
                        }}
                    >
                        © 2021-2022 <Link href='/'>
                            NixLab Technologies</Link>. All rights reserved.
                    </p>


                </Box>

                {/* Second Column */}

                <Box
                    position="relative"
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    ml={{
                        xs: "0",
                        sm: "0",
                        md: "0",
                        lg: "1rem",
                        xl: "1rem",
                    }}
                    mt={{
                        xs: "0.5rem",
                        sm: "0.5rem",
                        md: "0.5rem",
                        lg: "0",
                        xl: "0",
                    }}
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
                                    mr: '0.5rem',
                                    ':last-child': {
                                        mr: '0'
                                    },
                                    '& a svg': {
                                        color: colors.primary[100],
                                        fontSize: '1.5rem',
                                        transition: 'all 0.2s ease-in-out',
                                        '&:hover': {
                                            color: colors.accent,
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
            </Box>
        </Box>
    )
}

export default Footer;