import { Box, useTheme } from "@mui/material";
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
            width={{
                xs: "12rem",
                sm: "12rem",
                md: "12rem",
                lg: "15rem",
                xl: "15rem"
            }}
            bgcolor={colors.dialog}
            display={dropdown === currentPath ? "flex" : "none"}
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="flex-start"
            borderRadius="0.5rem"
            boxShadow={`0 0.15rem 0.5rem 0 ${colors.shadow}`}
            zIndex="1001"
            p='0.5rem 0'
        >
            {
                items.map((child, index) => (
                    <Box
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

                            transition: "all 0.3s ease-in-out",
                            ":hover": {
                                backgroundColor: colors.primary[700],
                            }
                        }}
                    >
                        <p style={{
                            textDecoration: "none",
                            textTransform: "capitalize",
                            textAlign: "left",
                            color: path == child.path ?
                                colors.accent[900] :
                                colors.primary[300],
                            fontWeight: path == child.path ?
                                700 :
                                400,
                        }}
                        >
                            {child.title}
                        </p>
                    </Box>
                ))
            }
        </Box>
    )
}

export default DropdownMenu;