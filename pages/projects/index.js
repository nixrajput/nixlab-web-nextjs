import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Head from 'next/head';
import {
    Box, useTheme, Backdrop, CircularProgress, Button
} from "@mui/material";
import { useSnackbar } from 'notistack';
import AppWrap from "../../components/AppWrap";
import ExpandedBox from "../../components/ExpandedBox";
import ResponsiveBox from "../../components/ResponsiveBox";
import PageTitle from "../../components/PageTitle";
import { tokens } from '../../theme/theme';
import ProjectItem from '../../components/ProjectItem';
import {
    getProjectsAction, clearProjectsErrorAction,
    loadMoreProjectsAction
} from '../../redux/actions/projectsAction';

const Projects = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const projects = useSelector((state) => state.projects);
    const dispatch = useDispatch();

    const { enqueueSnackbar } = useSnackbar();

    const [open, setOpen] = useState(false);

    const closeBackdrop = () => {
        setOpen(false);
    };

    const openBackdrop = () => {
        setOpen(true);
    };

    const getData = async () => {
        const getProjectsPromise = getProjectsAction(dispatch);
        openBackdrop();
        await getProjectsPromise;
        closeBackdrop();
    }

    const loadMore = async () => {
        const nextPage = projects.currentPage + 1;
        const loadMoreProjectsPromise = loadMoreProjectsAction(dispatch, nextPage);
        await loadMoreProjectsPromise;
    };

    useEffect(() => {
        if (projects.status === 'idle' || projects.results === null) {
            getData();
        }

        return () => { }

    }, [projects.status, projects.results]);

    useEffect(() => {
        if (projects.error !== null) {
            enqueueSnackbar(projects.error, { variant: 'error' });
            const clearErrorPromise = clearProjectsErrorAction(dispatch);
            clearErrorPromise;
        }
    }, [
        projects.error, enqueueSnackbar, dispatch
    ]);

    return (
        <ExpandedBox
            justifyContent="flex-start"
            alignItems="stretch"
        >
            <Head>
                <title>Projects</title>
            </Head>

            <PageTitle>
                OUR <span>PROJECTS</span>
            </PageTitle>

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
                alignItems="center"
                bgcolor="transparent"
                p='0'
            >

                {
                    (projects.status === 'success' &&
                        projects.results !== null) ?
                        <Box
                            width="100%"
                            position="relative"
                            display="flex"
                            flexDirection={{
                                xs: "column",
                                sm: "row",
                                md: "row",
                                lg: "row",
                                xl: "row",
                            }}
                            flexWrap={{
                                xs: "nowrap",
                                sm: "wrap",
                                md: "wrap",
                                lg: "wrap",
                                xl: "wrap",
                            }}
                            justifyContent={{
                                xs: "center",
                                sm: "stretch",
                                md: "stretch",
                                lg: "stretch",
                                xl: "stretch",
                            }}
                            alignItems="center"
                        >
                            {
                                projects.projectList.map((project, index) => {
                                    return (
                                        <ProjectItem
                                            key={`project-${index}`}
                                            item={project}
                                        />
                                    )
                                })
                            }

                            {
                                projects.status === 'loadingMore' ?
                                    <Box
                                        width="100%"
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                        m="1rem"
                                    >
                                        <CircularProgress
                                            sx={{
                                                color: colors.accent,
                                            }}
                                        />
                                    </Box>
                                    :
                                    null
                            }

                            {
                                projects.hasNextPage ?
                                    <Box
                                        width="100%"
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                        m="1rem"
                                    >
                                        <Button
                                            variant="text"
                                            sx={{
                                                color: colors.accent,
                                            }}
                                            onClick={() => loadMore()}
                                        >
                                            Load More
                                        </Button>
                                    </Box>
                                    :
                                    null
                            }
                        </Box>
                        :
                        null
                }

            </ResponsiveBox>
        </ExpandedBox>
    )
}

export default AppWrap(Projects);