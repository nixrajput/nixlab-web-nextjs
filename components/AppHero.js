import React from 'react';
import { useSelector } from "react-redux";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme/theme";
import Image from 'next/image';
import ExpandedBox from './ExpandedBox';
import FlexRow from './FlexRow';

const Hero = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const auth = useSelector((state) => state.auth);
    const profileDetails = useSelector((state) => state.profileDetails);

    return (
        <ExpandedBox>
            <FlexRow>
                <Box
                    width={{
                        xs: '100%',
                        sm: '100%',
                        md: "100%",
                        lg: "60%",
                        xl: "60%",
                    }}
                    textAlign={{
                        xs: 'center',
                        sm: 'center',
                        md: "center",
                        lg: "left",
                        xl: "left",
                    }}
                >
                    {
                        (auth.status === 'authenticated' && profileDetails.status === 'success')
                            ?
                            <h3
                                style={{
                                    margin: "1rem auto",
                                    fontWeight: 500,
                                    color: colors.primary[100],
                                }}
                            >
                                Hello 👋 {profileDetails.user.fname}
                            </h3>
                            :
                            null
                    }

                    <h1 style={{
                        margin: "1rem auto",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        wordSpacing: "0.25rem",
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

                    <p style={{
                        margin: "1rem auto",
                        color: colors.primary[200],
                        fontWeight: 600,
                        textTransform: "capitalize",
                    }}
                    >
                        Code to innovate
                    </p>
                </Box>

                <Box
                    width={{
                        xs: '100%',
                        sm: '100%',
                        md: "100%",
                        lg: "40%",
                        xl: "40%",
                    }}
                    maxWidth="400px"
                    maxHeight="400px"
                >
                    <Image src="/hero.png"
                        alt="hero"
                        layout='responsive'
                        width={400}
                        height={400}
                        priority
                        sizes="(max-width: 992px) 300px, 400px"
                    />
                </Box>
            </FlexRow>
        </ExpandedBox>
    )
}

export default Hero;