import Head from 'next/head';
import { Box } from "@mui/material";
import AppWrap from "../../components/AppWrap";
import ExpandedBox from "../../components/ExpandedBox";
import ResponsiveBox from "../../components/ResponsiveBox";
import PageTitle from "../../components/PageTitle";
import Data from '../../data';
import ProjectItem from './ProjectItem';

const Projects = () => {
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

            <ResponsiveBox
                alignItems="center"
            >
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
                        Data.projects.map((project, index) => {
                            return (
                                <ProjectItem
                                    key={`service-${index}`}
                                    item={project}
                                />
                            )
                        })
                    }
                </Box>
            </ResponsiveBox>
        </ExpandedBox>
    )
}

export default AppWrap(Projects);