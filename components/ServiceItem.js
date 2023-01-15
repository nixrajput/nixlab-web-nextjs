import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme/theme";
import Image from "next/image";

const ServiceItem = ({ item, ...props }) => {
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
            boxShadow="0 0.1rem 0.5rem rgba(0, 0, 0, 0.08)"
            m={{
                xs: "0 0 1rem 0",
                sm: "0.5rem",
                md: "1rem",
                lg: "1rem",
                xl: "1rem",
            }}
            p="1rem"
            sx={{
                backgroundColor: colors.dialog,
                transition: "all 0.8s ease-in-out",
                overflow: "hidden",
            }}
            {...props}
        >
            <Box
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
                    placeholder="blur"
                    blurDataURL={item.image}
                    style={{
                        aspectRatio: '1',
                        objectFit: 'contain'
                    }}
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
                        margin: '0.5rem 0',
                        padding: '0',
                    }}
                >
                    {item.title}
                </h3>

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
            </Box>
        </Box>
    )
}

export default ServiceItem;