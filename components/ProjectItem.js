import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme/theme";
import Image from "next/image";
import { useRouter } from "next/router";

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
            minHeight="20rem"
            maxHeight="20rem"
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
                    transform: "scale(1.02)"
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
                        padding: '1rem',
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
                        marginBottom: '0.5rem',
                    }}
                >
                    {renderProjectType(item.projectType)}
                </p>

                <Box
                    position="relative"
                    display="flex"
                    flexDirection="row"
                    flexWrap="wrap"
                    alignItems="center"
                    justifyContent="flex-start"
                >
                    {
                        item.tags ?
                            item.tags.map((tag, index) => (
                                <Box key={`tag-${index}`}
                                    sx={{
                                        fontSize: '0.85rem',
                                        m: '0.25rem 0.5rem',
                                        ml: '0',
                                        padding: '0.25rem 0.5rem',
                                        borderRadius: '0.5rem',
                                        border: `1px solid ${colors.grey[500]}`,
                                        color: colors.primary[100],
                                        ':last-child': {
                                            mr: '0'
                                        },
                                    }}
                                >
                                    {tag}
                                    <br />
                                </Box>
                            ))
                            :
                            null
                    }
                </Box>
            </Box>
        </Box>
    )
}

export default ProjectItem;