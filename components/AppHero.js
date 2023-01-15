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

    return (
        <ExpandedBox>
            <ResponsiveBox>
                <FlexRow>
                    <Box
                        width={{
                            xs: '100%',
                            sm: '100%',
                            md: "100%",
                            lg: "calc(60% - 2rem)",
                            xl: "calc(60% - 2rem)",
                        }}
                        textAlign={{
                            xs: 'center',
                            sm: 'center',
                            md: "center",
                            lg: "left",
                            xl: "left",
                        }}
                        order={{
                            xs: 2,
                            sm: 2,
                            md: 2,
                            lg: 1,
                            xl: 1,
                        }}
                    >
                        {
                            (auth.status === 'authenticated' &&
                                profileDetails.status === 'success')
                                ?
                                <h3
                                    style={{
                                        margin: "1rem auto",
                                        marginBottom: "0.5rem",
                                        fontWeight: 500,
                                        color: colors.primary[100],
                                    }}
                                >
                                    Hi 👋 {profileDetails.user?.fname} {profileDetails.user?.lname}
                                </h3>
                                :
                                null
                        }

                        <h1 style={{
                            margin: "1rem auto",
                            marginTop: "0.5rem",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            wordSpacing: "0.5rem",
                            color: colors.primary[100],
                            "& span": {
                                color: colors.accent,
                            }
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
                                margin: "1rem auto",
                                color: colors.primary[100],
                            }}
                        >
                            {description}
                        </p>
                    </Box>

                    <Box
                        width={{
                            xs: '100%',
                            sm: '100%',
                            md: "100%",
                            lg: "calc(40% - 2rem)",
                            xl: "calc(40% - 2rem)",
                        }}
                        maxWidth="400px"
                        position="relative"
                        order={{
                            xs: 1,
                            sm: 1,
                            md: 1,
                            lg: 2,
                            xl: 2,
                        }}
                        sx={{
                            aspectRatio: '4/3',
                            objectFit: 'contain',
                        }}
                    >
                        <Image
                            src="/hero.png"
                            alt="hero"
                            fill
                            sizes="100%"
                            priority
                            placeholder="blur"
                            blurDataURL='/hero.png'
                            sx={{
                                aspectRatio: '4/3',
                                objectFit: 'contain',
                            }}
                        />
                    </Box>
                </FlexRow>

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