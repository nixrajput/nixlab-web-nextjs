import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme/theme";
import Image from "next/image";
import { useRouter } from "next/router";

const ProjectItem = ({ item, ...props }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const router = useRouter();

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
            height="24rem"
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
                    src={item.icon}
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
                    blurDataURL={item.image}
                />
            </Box>

            <Box
                position="relative"
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                justifyContent="flex-start"
            >
                <h3
                    style={{
                        color: colors.primary[100],
                        fontFamily: 'Proxima Nova, sans-serif',
                    }}
                >
                    {item.title}
                </h3>

                <p
                    style={{
                        color: colors.primary[300],
                        fontFamily: 'Proxima Nova, sans-serif',
                        fontSize: '1rem',
                        marginBottom: '0.5rem',
                    }}
                >
                    {item.type}
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
                        item.technologies ?
                            item.technologies.map((item, index) => (
                                <Box key={`technology-${index}`}
                                    sx={{
                                        fontFamily: 'Proxima Nova, sans-serif',
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
                                    {item}
                                    <br />
                                </Box>
                            ))
                            :
                            null
                    }
                </Box>

                {/* <a
                    href={item.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        marginTop: '0.5rem'
                    }}
                >
                    GitHub
                </a> */}
            </Box>
        </Box>
    )
}

export default ProjectItem;