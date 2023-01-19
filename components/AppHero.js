import React from 'react';
import { useSelector } from "react-redux";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme/theme";
import Image from 'next/image';
import ExpandedBox from './ExpandedBox';
import ResponsiveBox from './ResponsiveBox';
import FlexRow from './FlexRow';
import { description, serviceDetailsList } from '../data';

const Hero = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const auth = useSelector((state) => state.auth);
    const profileDetails = useSelector((state) => state.profileDetails);

    const renderShreemadBhagvadGitaQuote = () => {
        return (
            <h4 style={{
                margin: "0 auto 0.5rem auto",
                fontWeight: 700,
                textAlign: "center",
                color: colors.accent,
            }}
            >
                कर्मण्येवाधिकारस्ते मा फलेषु कदाचन । <br />
                मा कर्मफलहेतुर्भुर्मा ते संगोऽस्त्वकर्मणि ॥
            </h4>
        )
    }

    const renderUserGreeting = () => {
        return (
            <h4
                style={{
                    margin: "1rem auto 0",
                    fontWeight: 600,
                    color: colors.primary[200],
                }}
            >
                Hi 👋 {profileDetails.user?.fname} {profileDetails.user?.lname}
            </h4>
        )
    }

    return (
        <ExpandedBox>
            <ResponsiveBox>
                <Box
                    width="100%"
                    textAlign={{
                        xs: 'center',
                        sm: 'center',
                        md: "center",
                        lg: "left",
                        xl: "left",
                    }}
                >
                    {renderShreemadBhagvadGitaQuote()}

                    {
                        (auth.status === 'authenticated' &&
                            profileDetails.status === 'success')
                            ?
                            renderUserGreeting()
                            :
                            null
                    }

                    <h1 style={{
                        margin: "0 auto",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        wordSpacing: "0.25rem",
                        color: colors.primary[100],
                    }}
                    >
                        Welcome to <span style={{
                            color: colors.accent,
                        }}
                        >NixLab Technologies
                        </span>
                    </h1>

                    <p
                        style={{
                            margin: "0 auto 1rem",
                            color: colors.primary[100],
                        }}
                    >
                        {description}
                    </p>
                </Box>

                {/* Services */}

                <Box
                    width="100%"
                    display="flex"
                    flexDirection="column"
                >
                    {
                        serviceDetailsList.map((item, index) => (
                            <FlexRow
                                key={`service-${index}`}
                                position="relative"
                                m="2rem 0"
                                flexDirection={{
                                    xs: 'column',
                                    sm: 'column',
                                    md: "row",
                                    lg: "row",
                                    xl: "row",
                                }}
                                sx={{
                                    '&:last-child': {
                                        mb: 0,
                                    }
                                }}
                            >
                                <Box
                                    width={{
                                        xs: '100%',
                                        sm: '100%',
                                        md: "calc(40% - 2rem)",
                                        lg: "calc(40% - 2rem)",
                                        xl: "calc(40% - 2rem)",
                                    }}
                                    maxWidth={{
                                        xs: '280px',
                                        sm: '280px',
                                        md: "400px",
                                        lg: "400px",
                                        xl: "400px",
                                    }}
                                    maxHeight={{
                                        xs: '280px',
                                        sm: '280px',
                                        md: "400px",
                                        lg: "400px",
                                        xl: "400px",
                                    }}
                                    position="relative"
                                    order={{
                                        xs: 1,
                                        sm: 1,
                                        md: index % 2 === 0 ? 1 : 2,
                                        lg: index % 2 === 0 ? 1 : 2,
                                        xl: index % 2 === 0 ? 1 : 2,
                                    }}
                                    sx={{
                                        aspectRatio: '1',
                                        objectFit: 'cover',
                                    }}
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        sizes="100%"
                                        priority
                                        placeholder="blur"
                                        blurDataURL={item.image}
                                        style={{
                                            aspectRatio: '1',
                                            objectFit: 'cover',
                                        }}
                                    />
                                </Box>

                                <Box
                                    width={{
                                        xs: '100%',
                                        sm: '100%',
                                        md: "calc(60% - 2rem)",
                                        lg: "calc(60% - 2rem)",
                                        xl: "calc(60% - 2rem)",
                                    }}
                                    order={{
                                        xs: 2,
                                        sm: 2,
                                        md: index % 2 === 0 ? 2 : 1,
                                        lg: index % 2 === 0 ? 2 : 1,
                                        xl: index % 2 === 0 ? 2 : 1,
                                    }}
                                    mt={{
                                        xs: '2rem',
                                        sm: '2rem',
                                        md: "0",
                                        lg: "0",
                                        xl: "0",
                                    }}
                                    p={{
                                        xs: '0 1.5rem',
                                        sm: '0 2rem',
                                        md: "0",
                                        lg: "0",
                                        xl: "0",
                                    }}
                                    textAlign={{
                                        xs: 'center',
                                        sm: 'center',
                                        md: "left",
                                        lg: "left",
                                        xl: "left",
                                    }}
                                >
                                    <h4
                                        style={{
                                            marginBottom: "0.5rem",
                                            color: colors.primary[100],
                                        }}
                                    >
                                        {item.title}
                                    </h4>

                                    <p
                                        style={{
                                            color: colors.primary[200],
                                        }}
                                    >
                                        {item.description}
                                    </p>
                                </Box>
                            </FlexRow>
                        ))
                    }
                </Box>
            </ResponsiveBox>
        </ExpandedBox>
    )
}

export default Hero;