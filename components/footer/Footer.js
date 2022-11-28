import { useRouter } from "next/router";
import Image from 'next/image';
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
            bgcolor={colors.dialog}
            mt="1rem"
        >
            <Box
                position="relative"
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
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
                    justifyContent="flex-start"
                    alignItems="flex-start"
                >

                    {/* LOGO */}

                    <Box
                        display="flex"
                        alignItems="flex-start"
                        justifyContent="flex-start"
                        sx={{ aspectRatio: "16/9" }}
                        height={{ xs: "48px", sm: "48px", md: "48px", lg: "48px" }}
                        maxHeight={{ xs: "48px", sm: "48px", md: "48px", lg: "48px" }}
                        position="relative"
                    >
                        <Link href="/">
                            <Image
                                src="/logo.png"
                                alt="logo"
                                fill
                                priority
                                placeholder="blur"
                                blurDataURL="/logo.png"
                                style={{
                                    objectFit: "contain",
                                }}
                            />
                        </Link>
                    </Box>

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
                    flexDirection="column"
                    justifyContent="space-between"
                    alignItems="center"
                    ml='1rem'
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
                                    mb: '1rem',
                                    ':last-child': {
                                        mb: '0'
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