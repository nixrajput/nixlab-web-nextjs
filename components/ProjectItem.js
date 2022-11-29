import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme/theme";
import Image from "next/image";

const ProjectItem = ({ item, ...props }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

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
            height="25rem"
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
                transition: "all 0.8s ease-in-out",
                overflow: "hidden",
            }}
            {...props}
        >
            <Box
                className="service__image"
                position='relative'
                width="50%"
                maxWidth="10rem"
                height="50%"
                maxHeight="10rem"
            >
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="100%"
                    priority
                    style={{
                        aspectRatio: '1',
                        objectFit: 'contain'
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
                        marginTop: '0.5rem',
                    }}
                >
                    {item.title}
                </h3>

                <p
                    style={{
                        color: colors.primary[100],
                        fontFamily: 'Proxima Nova, sans-serif',
                        fontSize: '1rem',
                        marginBottom: '0.5rem',
                    }}
                >
                    {item.shortDescription}
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
                                        mr: '0.25rem',
                                        mb: '0.25rem',
                                        padding: '0.25rem 0.5rem',
                                        borderRadius: '4px',
                                        backgroundColor: colors.grey[500],
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

                <a
                    href={item.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        marginTop: '0.5rem'
                    }}
                >
                    GitHub
                </a>
            </Box>
        </Box>
    )
}

export default ProjectItem;