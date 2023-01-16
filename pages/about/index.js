import Head from 'next/head';
import Image from 'next/image';
import { Box, useTheme } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import AppWrap from "../../components/AppWrap";
import ExpandedBox from "../../components/ExpandedBox";
import ResponsiveBox from "../../components/ResponsiveBox";
import PageTitle from "../../components/PageTitle";
import { tokens } from "../../theme/theme";
import { description, missionList, serviceList } from '../../data';

const About = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <ExpandedBox
            justifyContent="flex-start"
            alignItems="stretch"
        >
            <Head>
                <title>About</title>
            </Head>

            <PageTitle>
                Who <span>We</span> Are
            </PageTitle>

            <ResponsiveBox>
                <p
                    style={{
                        color: colors.primary[100],
                    }}
                >
                    {description}
                </p>

                {/* Services */}

                <h3
                    style={{
                        color: colors.primary[100],
                        marginTop: '1rem'
                    }}
                >
                    What services we provide?
                </h3>

                {
                    serviceList.map((service, index) => {
                        return (
                            <Box
                                key={`item-${index}`}
                                display='flex'
                                flexDirection='row'
                                alignItems='flex-start'
                                justifyContent='flex-start'
                                m='0.5rem 0'
                            >
                                <p>
                                    •
                                </p>
                                <p
                                    style={{
                                        color: colors.primary[200],
                                        marginLeft: '1rem'
                                    }}
                                >
                                    {service}
                                </p>
                            </Box>
                        )
                    })
                }

                {/* Mission */}

                <h3
                    style={{
                        color: colors.primary[100],
                        marginTop: '1rem'
                    }}
                >
                    Our mission
                </h3>

                <p
                    style={{
                        color: colors.primary[100],
                        marginTop: '0.5rem'
                    }}
                >
                    Our mission is to provide customer-centric, result-oriented, cost-competitive innovative & functional IT Solutions to our valuable global clients.
                </p>

                <p
                    style={{
                        color: colors.primary[100],
                        marginTop: '0.25rem',
                        marginBottom: '0.25rem'
                    }}
                >
                    We stick to the following principles in delivering our mission:
                </p>

                {
                    missionList.map((mission, index) => {
                        return (
                            <Box
                                key={`item-${index}`}
                                display='flex'
                                flexDirection='row'
                                alignItems='flex-start'
                                justifyContent='flex-start'
                                m='0.5rem 0'
                            >
                                <p>
                                    •
                                </p>
                                <p
                                    style={{
                                        color: colors.primary[100],
                                        marginLeft: '1rem'
                                    }}
                                >
                                    {mission}
                                </p>
                            </Box>
                        )
                    })
                }

                <Box
                    width='100%'
                    mt='1rem'
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                >
                    <h4 style={{
                        color: colors.primary[300],
                    }}>
                        Made with ❤️ in India 🇮🇳
                    </h4>

                </Box>
            </ResponsiveBox>
        </ExpandedBox>
    )
}

export default AppWrap(About);