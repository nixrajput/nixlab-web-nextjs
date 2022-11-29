import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../../theme/theme";
import usePath from '../../hooks/usePath';

const DropdownMenu = ({
    items, currentPath, dropdown, handleNavClick
}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const path = usePath();

    return (
        <Box
            position="absolute"
            top="100%"
            left="0"
            width="200px"
            bgcolor={{
                xs: colors.dialog,
                sm: colors.dialog,
                md: colors.dialog,
                lg: colors.dialog,
                xl: colors.dialog
            }}
            display={dropdown === currentPath ? "flex" : "none"}
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="center"
            borderRadius="4px"
            boxShadow={`0 0.15rem 0.5rem 0 ${colors.shadow}`}
            zIndex="1001"
            p='0.5rem 0'
        >
            {
                items.map((child, index) => (
                    <Typography
                        key={`link-${child.title}${index}`}
                        onClick={() => handleNavClick(child)}
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            padding: "0.5rem 1rem",
                            m: "0",
                            width: "100%",
                            cursor: "pointer",
                            color: path == child.path ?
                                colors.accent :
                                colors.grey[200],
                            transition: "all 0.3s ease-in-out",
                            textDecoration: "none",
                            textTransform: "capitalize",
                            fontSize: "1rem",
                            fontWeight: path == child.path ?
                                700 :
                                400,
                            ":hover": {
                                backgroundColor: colors.grey[500],
                            }
                        }}
                    >
                        {child.title}
                    </Typography>
                ))
            }
        </Box>
    )
}

export default DropdownMenu;