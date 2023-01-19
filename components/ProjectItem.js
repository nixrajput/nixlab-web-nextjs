import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme/theme";
import Image from "next/image";
import { useRouter } from "next/router";
import numberUtils from "../utils/numberUtils";

const ProjectItem = ({ item, ...props }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const router = useRouter();

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

    return (
        <Box
            position="relative"
            width={{
                xs: "100%",
                sm: "calc(50% - 1rem)",
                md: "calc(50% - 2rem)",
                lg: "calc(33% - 2rem)",
                xl: "calc(33% - 2rem)",
            }}
            height="20rem"
            maxHeight="22rem"
            display="flex"
            flexDirection="column"
            alignItems="stretch"
            justifyContent="space-between"
            borderRadius="8px"
            m={{
                xs: "0 0 1rem 0",
                sm: "0.5rem",
                md: "1rem",
                lg: "1rem",
                xl: "1rem",
            }}
            p="1rem"
            boxShadow="0 0.1rem 0.5rem rgba(0, 0, 0, 0.08)"
            sx={{
                backgroundColor: colors.dialog,
                transition: "all 0.5s ease-in-out",
                overflow: "hidden",
                cursor: "pointer",
                '&:hover': {
                    backgroundColor: colors.accent[100],
                    boxShadow: "0 0.1rem 0.5rem rgba(0, 0, 0, 0.2)",
                },
            }}
            {...props}
            onClick={() => router.push(`/projects/${item._id}`)}
        >
            <Box
                position='relative'
                width="8rem"
                maxWidth="8rem"
                height="8rem"
                maxHeight="8rem"
                border={`1px solid ${colors.primary[800]}`}
                borderRadius="50%"
                overflow={'hidden'}
                p="1rem"
            >
                <Image
                    src={item.icon.url}
                    alt={item.title}
                    fill
                    sizes="80%"
                    priority
                    style={{
                        aspectRatio: '1',
                        objectFit: 'contain',
                        padding: '1.5rem',
                    }}
                    placeholder="blur"
                    blurDataURL={item.icon.url}
                />
            </Box>

            <Box
                position="relative"
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                justifyContent="flex-start"
                mt="1.5em"
            >
                <h3
                    style={{
                        color: colors.primary[100],
                    }}
                >
                    {item.title}
                </h3>

                <p
                    style={{
                        color: colors.primary[300],
                    }}
                >
                    {renderProjectType(item.projectType)}
                </p>

                {/* Stats */}

                <Box
                    position="relative"
                    display="flex"
                    flexDirection="row"
                    alignprojects="center"
                    flexWrap="wrap"
                    justifyContent="flex-start"
                    mt='1rem'
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
                            {numberUtils.toCountingNumber(item.viewsCount)}+
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
                            {numberUtils.toCountingNumber(item.downloadsCount)}+
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
                            {numberUtils.toCountingNumber(item.likesCount)}+
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
            </Box>
        </Box>
    )
}

export default ProjectItem;