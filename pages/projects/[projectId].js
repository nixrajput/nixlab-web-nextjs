import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from 'next/router';
import Image from "next/image";
import Head from 'next/head';
import {
    Box, useTheme, Backdrop, CircularProgress, Button
} from "@mui/material";
import { useSnackbar } from 'notistack';
import AppWrap from "../../components/AppWrap";
import ExpandedBox from "../../components/ExpandedBox";
import ResponsiveBox from "../../components/ResponsiveBox";
import { tokens } from '../../theme/theme';
import CarouselSlider from '../../components/CarouselSlider';
import {
    getProjectDetailsAction, clearProjectsDetailsErrorAction,
    incrementProjectViewsCountAction,
    incrementProjectDownloadsCountAction
} from '../../redux/actions/projectsAction';
import numberUtils from '../../utils/numberUtils';

const ProjectDetails = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const router = useRouter()
    const { projectId } = router.query;

    const projectDetails = useSelector((state) => state.projectDetails);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    const { enqueueSnackbar } = useSnackbar();

    const closeBackdrop = () => {
        setOpen(false);
    };

    const openBackdrop = () => {
        setOpen(true);
    };

    const renderProjectType = (type) => {
        switch (type) {
            case "mobile":
                return "Mobile Application";
            case "web":
                return "Web Application";
            case "desktop":
                return "Desktop Application";
            case "game":
                return "Game";
            default:
                return "Unknown";
        }
    };

    const renderProjectActionBtn = (type, project) => {
        switch (type) {
            case "mobile":
            case "desktop":
                return (
                    <Button
                        variant="contained"
                        sx={{

                            backgroundColor: colors.accent[900],
                            color: '#f0f0f0',
                            borderRadius: "0.5rem",
                            fontWeight: "bold",
                            width: {
                                xs: '100%',
                                sm: '30%',
                                md: '25%',
                                lg: '25%',
                                xl: '25%',
                            },
                            boxShadow: 'none',
                            border: 'none'
                        }}
                        onClick={() => {
                            incrementProjectDownloadsCount();
                            window.open(project.downloadUrl, '_blank');
                        }}
                    >
                        Download
                    </Button>
                );
            case "web":
                return (
                    <Button
                        variant="contained"
                        sx={{

                            backgroundColor: colors.accent[900],
                            color: '#f0f0f0',
                            borderRadius: "0.5rem",
                            fontWeight: "bold",
                            width: {
                                xs: '100%',
                                sm: '30%',
                                md: '25%',
                                lg: '25%',
                                xl: '25%',
                            },
                            boxShadow: 'none',
                            border: 'none'
                        }}
                        onClick={() => {
                            window.open(project.demoUrl, '_blank');
                        }}
                    >
                        Visit
                    </Button>
                );
            default:
                return null;
        }
    };

    const incrementProjectDownloadsCount = async () => {
        const incrementProjectDownloadsCountPromise = incrementProjectDownloadsCountAction(dispatch, projectId);
        await incrementProjectDownloadsCountPromise;
    }

    useEffect(() => {
        if (projectId && (projectDetails.status === 'idle'
            || projectDetails.project === null
            || (projectDetails.project && projectId !== projectDetails.project._id))) {

            const getData = async () => {
                const getProjectDetailsPromise = getProjectDetailsAction(dispatch, projectId);
                openBackdrop();
                await getProjectDetailsPromise;
                closeBackdrop();
            }
            getData();
        }

        if (projectDetails.status === 'success' && projectDetails.project !== null) {
            const incrementProjectViewsCount = async () => {
                const incrementProjectViewsCountPromise = incrementProjectViewsCountAction(dispatch, projectId);
                await incrementProjectViewsCountPromise;
            }
            incrementProjectViewsCount();
        }

        return () => { }

    }, [
        projectDetails.status, projectId, projectDetails.project,
        dispatch
    ]);

    useEffect(() => {
        if (projectDetails.error !== null) {
            enqueueSnackbar(projectDetails.error, { variant: 'error' });
            const clearErrorPromise = clearProjectsDetailsErrorAction(dispatch);
            clearErrorPromise;
        }
    }, [
        projectDetails.error, enqueueSnackbar, dispatch
    ]);

    return (
        <ExpandedBox
            justifyContent="flex-start"
            alignprojects="stretch"
        >
            <Head>
                <title>{
                    projectDetails.project ? projectDetails.project.title + ' - Details'
                        : 'Project Details'
                }</title>
            </Head>

            <Backdrop
                sx={{
                    color: colors.accent,
                    zIndex: (theme) => theme.zIndex.drawer + 1
                }}
                open={open}
            >
                <CircularProgress color='inherit' />
            </Backdrop>

            <ResponsiveBox
                alignprojects="center"
                bgcolor="transparent"
                p='0'
            >

                {
                    (projectDetails.status === 'success' &&
                        projectDetails.project !== null) ?
                        <Box
                            width="100%"
                            position="relative"
                            display="flex"
                            flexDirection="column"
                            alignitems="flex-start"
                            justifyContent="space-between"
                        >

                            {/* Project Details Header */}

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
                                    width={{
                                        xs: '8rem',
                                        sm: '10rem',
                                        md: '12rem',
                                        lg: '15rem',
                                        xl: '15rem',
                                    }}
                                    height={{
                                        xs: '8rem',
                                        sm: '10rem',
                                        md: '12rem',
                                        lg: '15rem',
                                        xl: '15rem',
                                    }}
                                    border={`1px solid ${colors.primary[800]}`}
                                    borderRadius="50%"
                                    overflow={'hidden'}
                                    p="1rem"
                                >
                                    <Image
                                        src={projectDetails.project.icon.url}
                                        alt='icon'
                                        fill
                                        sizes="80%"
                                        style={{
                                            aspectRatio: '1',
                                            objectFit: 'contain',
                                            padding: '1rem',
                                        }}
                                        placeholder="blur"
                                        blurDataURL={projectDetails.project.icon.url}
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
                                        {projectDetails.project.title}
                                    </h1>

                                    <p
                                        style={{
                                            color: colors.primary[400],
                                            fontFamily: 'Proxima Nova, sans-serif',
                                            fontWeight: '600',
                                            fontSize: '1rem',
                                        }}
                                    >
                                        {renderProjectType(projectDetails.project.projectType)}
                                    </p>
                                </Box>
                            </Box>

                            {/* Stats */}

                            <Box
                                position="relative"
                                display="flex"
                                flexDirection="row"
                                alignprojects="center"
                                justifyContent="flex-start"
                                mt='1.5rem'
                                width="100%"
                            >

                                <Box
                                    position="relative"
                                    display="flex"
                                    flexDirection="column"
                                    alignprojects="center"
                                    justifyContent="center"
                                    mr={{
                                        xs: '1.5rem',
                                        sm: '2rem',
                                        md: '2rem',
                                        lg: '2rem',
                                        xl: '2rem',
                                    }}
                                >
                                    <p
                                        style={{
                                            color: colors.primary[200],
                                            fontWeight: '600',
                                            textAlign: 'center',
                                        }}
                                    >
                                        {numberUtils.toCountingNumber(projectDetails.project.viewsCount)}+
                                    </p>

                                    <p
                                        style={{
                                            color: colors.primary[400],
                                            textAlign: 'center',
                                        }}
                                    >
                                        Views
                                    </p>
                                </Box>

                                <Box
                                    position="relative"
                                    display="flex"
                                    flexDirection="column"
                                    alignprojects="center"
                                    justifyContent="center"
                                    mr={{
                                        xs: '1.5rem',
                                        sm: '2rem',
                                        md: '2rem',
                                        lg: '2rem',
                                        xl: '2rem',
                                    }}
                                >
                                    <p
                                        style={{
                                            color: colors.primary[200],
                                            fontWeight: '600',
                                            textAlign: 'center',
                                        }}
                                    >
                                        {numberUtils.toCountingNumber(projectDetails.project.downloadsCount)}+
                                    </p>

                                    <p
                                        style={{
                                            color: colors.primary[400],
                                            textAlign: 'center',
                                        }}
                                    >
                                        Downloads
                                    </p>
                                </Box>

                                <Box
                                    position="relative"
                                    display="flex"
                                    flexDirection="column"
                                    alignprojects="center"
                                    justifyContent="center"
                                    mr={{
                                        xs: '1.5rem',
                                        sm: '2rem',
                                        md: '2rem',
                                        lg: '2rem',
                                        xl: '2rem',
                                    }}
                                >
                                    <p
                                        style={{
                                            color: colors.primary[200],
                                            fontWeight: '600',
                                            textAlign: 'center',
                                        }}
                                    >
                                        {numberUtils.toCountingNumber(projectDetails.project.likesCount)}+
                                    </p>

                                    <p
                                        style={{
                                            color: colors.primary[400],
                                            textAlign: 'center',
                                        }}
                                    >
                                        Likes
                                    </p>
                                </Box>
                            </Box>

                            {/* Button */}

                            <Box
                                position="relative"
                                display="flex"
                                flexDirection="column"
                                alignprojects="flex-start"
                                justifyContent="flex-start"
                                mt='1.5rem'
                                width="100%"
                            >
                                {renderProjectActionBtn(projectDetails.project.projectType, projectDetails.project)}
                            </Box>

                            {/* Project Details */}

                            <Box
                                position="relative"
                                display="flex"
                                flexDirection="column"
                                alignprojects="flex-start"
                                justifyContent="flex-start"
                                mt='1.5rem'
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
                                    sm: '1rem 0',
                                    md: '1rem',
                                    lg: "1.5rem",
                                    xl: "1.5rem",
                                }}
                                overflow="hidden"
                                borderRadius={{
                                    xs: '0',
                                    sm: '0',
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
                                    (projectDetails.project.screenshots && projectDetails.project.screenshots.length > 0) ?
                                        <CarouselSlider
                                            items={projectDetails.project.screenshots}
                                        />
                                        : null
                                }

                                <h4 style={{
                                    color: colors.primary[100],
                                    fontFamily: 'Proxima Nova, sans-serif',
                                    marginTop: projectDetails.project.screenshots && projectDetails.project.screenshots.length > 0 ? '1.5rem' : '0',
                                }}>
                                    About
                                </h4>

                                <p style={{
                                    color: colors.primary[200],
                                    marginTop: '0.5rem',
                                }}
                                >
                                    {projectDetails.project.description}
                                </p>

                                {
                                    projectDetails.project.tags ?
                                        <Box
                                            position="relative"
                                            display="flex"
                                            flexDirection="row"
                                            flexWrap="wrap"
                                            alignItems="center"
                                            justifyContent="flex-start"
                                            mt='0.75rem'
                                        >
                                            {
                                                projectDetails.project.tags ?
                                                    projectDetails.project.tags.map((tag, index) => (
                                                        <Box key={`tag-${index}`}
                                                            sx={{
                                                                m: '0.25rem 0.5rem',
                                                                ml: '0',
                                                                padding: '0.25rem 0.5rem',
                                                                borderRadius: '0.5rem',
                                                                border: `1px solid ${colors.grey[500]}`,
                                                                ':last-child': {
                                                                    mr: '0'
                                                                },
                                                            }}
                                                        >
                                                            <p style={{
                                                                color: colors.primary[200],
                                                            }}
                                                            >
                                                                {tag}
                                                            </p>
                                                        </Box>
                                                    ))
                                                    :
                                                    null
                                            }
                                        </Box>
                                        : null
                                }

                                {/* Features */}

                                {
                                    projectDetails.project.features ?
                                        <Box
                                            position="relative"
                                            display="flex"
                                            flexDirection="column"
                                            alignprojects="flex-start"
                                            justifyContent="flex-start"
                                            mt='1rem'
                                            p='0.5rem 1rem'
                                            width='fit-content'
                                            sx={{
                                                borderRadius: '0.5rem',
                                                border: `0.8px solid ${colors.primary[700]}`,
                                            }}
                                        >
                                            {
                                                projectDetails.project.features.map((feature, index) => (
                                                    <Box key={`feature-${index}`}
                                                        position="relative"
                                                        display="flex"
                                                        flexDirection="row"
                                                        alignprojects="center"
                                                        justifyContent="flex-start"
                                                        m='0.25rem'
                                                        width="100%"
                                                        sx={{
                                                            ':last-child': {
                                                                mb: '0'
                                                            },
                                                            ':first-child': {
                                                                mt: '0'
                                                            }
                                                        }}
                                                    >
                                                        <p style={{
                                                            color: colors.primary[200],
                                                        }}>
                                                            •
                                                        </p>
                                                        <p style={{
                                                            color: colors.primary[200],
                                                            marginLeft: '0.5rem',
                                                        }}>
                                                            {feature}
                                                        </p>
                                                    </Box>
                                                ))

                                            }
                                        </Box>
                                        : null
                                }
                            </Box>

                        </Box>
                        : null
                }

            </ResponsiveBox>
        </ExpandedBox >
    )
}

export default AppWrap(ProjectDetails);