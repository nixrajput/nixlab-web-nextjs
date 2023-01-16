import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from "next/image";
import Head from 'next/head';
import { Box, useTheme, Backdrop, CircularProgress, Button } from "@mui/material";
import { useSnackbar } from 'notistack';
import AppWrap from "../../components/AppWrap";
import ExpandedBox from "../../components/ExpandedBox";
import ResponsiveBox from "../../components/ResponsiveBox";
import PageTitle from "../../components/PageTitle";
import { projectList } from '../../data';
import { tokens } from '../../theme/theme';
import CarouselSlider from '../../components/CarouselSlider';

const ProjectDetails = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const router = useRouter()
    const { projectId } = router.query;

    const [loading, setLoading] = useState(false);
    const [project, setProject] = useState(null);
    const [open, setOpen] = useState(false);

    const { enqueueSnackbar } = useSnackbar();

    const closeBackdrop = () => {
        setOpen(false);
    };

    const openBackdrop = () => {
        setOpen(true);
    };

    useEffect(() => {
        if (projectId && project === null) {
            setLoading(true);
            const project = projectList.find(project => project._id === projectId);
            setProject(project);
            setLoading(false);
        }

        if (loading) {
            openBackdrop();
        } else {
            closeBackdrop();
        }

    }, [projectId, project, loading]);

    return (
        <ExpandedBox
            justifyContent="flex-start"
            alignprojects="stretch"
        >
            <Head>
                <title>{
                    project ? project.title + ' - Project Details'
                        : 'Project Details'
                }</title>
            </Head>

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>

            <ResponsiveBox
                alignprojects="center"
                bgcolor="transparent"
                p='0'
            >
                <Box
                    width="100%"
                    position="relative"
                    display="flex"
                    flexDirection="column"
                    alignitems="flex-start"
                    justifyContent="space-between"
                >

                    {
                        project ?
                            <Box
                                width="100%"
                                position="relative"
                                display="flex"
                                flexDirection="row"
                                justifyContent="flex-start"
                                alignItems="center"
                            >
                                <Box
                                    position='relative'
                                    width="10rem"
                                    maxWidth="10rem"
                                    height="10rem"
                                    maxHeight="10rem"
                                    border={`1px solid ${colors.primary[800]}`}
                                    borderRadius="50%"
                                    overflow={'hidden'}
                                    p="1rem"
                                >
                                    <Image
                                        src={project.icon}
                                        alt={project.title}
                                        fill
                                        sizes="80%"
                                        priority
                                        style={{
                                            aspectRatio: '1',
                                            objectFit: 'contain',
                                            padding: '1rem',
                                        }}
                                        placeholder="blur"
                                        blurDataURL={project.image}
                                    />
                                </Box>

                                <Box
                                    position="relative"
                                    display="flex"
                                    flexDirection="column"
                                    alignprojects="flex-start"
                                    justifyContent="flex-start"
                                    ml='1.5rem'
                                >
                                    <h1
                                        style={{
                                            color: colors.primary[100],
                                            fontFamily: 'Proxima Nova, sans-serif',
                                        }}
                                    >
                                        {project.title}
                                    </h1>

                                    <p
                                        style={{
                                            color: colors.primary[400],
                                            fontFamily: 'Proxima Nova, sans-serif',
                                            fontWeight: '600',
                                            fontSize: '1rem',
                                        }}
                                    >
                                        {project.type}
                                    </p>

                                    {
                                        project.projectType === 'mobileApp' ?
                                            <Button
                                                variant="contained"
                                                sx={{
                                                    backgroundColor: colors.accent,
                                                    color: '#f0f0f0',
                                                    borderRadius: "4px",
                                                    fontWeight: "bold",
                                                    marginTop: "1.5rem"
                                                }}
                                                onClick={() => {
                                                    window.open(project.downloadUrl, '_blank');
                                                }}
                                            >
                                                Download
                                            </Button>
                                            : null
                                    }

                                    {
                                        project.projectType === 'webApp' ?
                                            <Button
                                                variant="contained"
                                                sx={{
                                                    backgroundColor: colors.accent,
                                                    color: '#f0f0f0',
                                                    borderRadius: "4px",
                                                    fontWeight: "bold",
                                                    marginTop: "1.5rem"
                                                }}
                                                onClick={() => {
                                                    window.open(project.websiteUrl, '_blank');
                                                }}
                                            >
                                                Visit Website
                                            </Button>
                                            : null
                                    }

                                </Box>
                            </Box>
                            : null
                    }

                    {
                        project ?
                            <Box
                                position="relative"
                                display="flex"
                                flexDirection="column"
                                alignprojects="flex-start"
                                justifyContent="flex-start"
                                mt='2rem'
                                width="100%"
                                bgcolor={{
                                    xs: 'transparent',
                                    sm: 'transparent',
                                    md: colors.dialog,
                                    lg: colors.dialog,
                                    xl: colors.dialog,
                                }}
                                padding={{
                                    xs: '1rem 0',
                                    sm: '1rem',
                                    md: '1.5rem',
                                    lg: "2rem",
                                    xl: "2rem",
                                }}
                                overflow="hidden"
                                borderRadius={{
                                    xs: '0',
                                    sm: '0.5rem',
                                    md: '0.5rem',
                                    lg: '0.5rem',
                                    xl: "0.5rem"
                                }}
                                transition="all 0.3s ease"
                                boxShadow={{
                                    xs: 'none',
                                    sm: "none",
                                    md: "0 0.1rem 0.5rem rgba(0, 0, 0, 0.08)",
                                    lg: "0 0.1rem 0.5rem rgba(0, 0, 0, 0.08)",
                                    xl: "0 0.1rem 0.5rem rgba(0, 0, 0, 0.08)",
                                }}
                            >

                                {
                                    (project.screenshots && project.screenshots.length > 0) ?
                                        <CarouselSlider
                                            items={project.screenshots}
                                        />
                                        : null
                                }

                                <p
                                    style={{
                                        color: colors.primary[200],
                                        fontFamily: 'Proxima Nova, sans-serif',
                                        marginBottom: '0.5rem',
                                    }}
                                >
                                    {project.description}
                                </p>

                            </Box>
                            : null
                    }

                </Box>
            </ResponsiveBox>
        </ExpandedBox>
    )
}

export default AppWrap(ProjectDetails);