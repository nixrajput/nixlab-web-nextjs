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
            sx={{
                backgroundColor: colors.divider,
                transition: "all 0.8s ease-in-out",
                overflow: "hidden",
            }}
            {...props}
        >
            <Box
                className="service__image"
                position='relative'
                width="50%"
                maxWidth="8rem"
                height="50%"
                maxHeight="8rem"
            >
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
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
                <h2
                    style={{
                        color: colors.primary[100],
                        fontFamily: 'Proxima Nova',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        margin: '1rem 0',
                        padding: '0',
                    }}
                >
                    {item.title}
                </h2>

                <Box
                    position="relative"
                    display="flex"
                    flexDirection="row"
                    flexWrap="wrap"
                    alignItems="center"
                    justifyContent="flex-start"
                >
                    {
                        item.shortDescription ?
                            item.shortDescription.split(',').map((item, index) => (
                                <Box key={`short-description-${index}`}
                                    sx={{
                                        color: colors.primary[200],
                                        fontFamily: 'Proxima Nova',
                                        fontSize: '1rem',
                                        fontWeight: 'bold',
                                        margin: '0.25rem',
                                        padding: '0.25rem',
                                        borderRadius: '4px',
                                        backgroundColor: colors.grey[700],
                                        ':first-child': {
                                            marginLeft: '0'
                                        },
                                        ':last-child': {
                                            marginRight: '0'
                                        }
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