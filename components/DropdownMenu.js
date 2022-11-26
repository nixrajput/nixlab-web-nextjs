import { useRef } from 'react';
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme/theme";
import usePath from '../hooks/usePath';
import useOnClickOutside from '../hooks/useOnClickOutside';

const DropdownMenu = ({
    items, currentPath, dropdown, closeDropdown, handleNavClick
}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const path = usePath();
    const dropdownRef = useRef(null);

    useOnClickOutside(dropdownRef, () => closeDropdown());

    return (
        <Box
            position="absolute"
            top="calc(100% + 8px)"
            left="0"
            minWidth="200px"
            maxWidth="200px"
            bgcolor={colors.dialog}
            display={dropdown === currentPath ? "flex" : "none"}
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="center"
            borderRadius="4px"
            boxShadow="0 0.1rem 0.5rem rgba(0, 0, 0, 0.1)"
            ref={dropdownRef}
            zIndex="1001"
        >
            {
                items.map((child, index) => (
                    <div
                        key={`link-${child.title}${index}`}
                        onClick={() => handleNavClick(child)}
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            padding: "0.5rem 1rem",
                            width: "100%",
                            cursor: "pointer",
                            color: path == child.path ? colors.accent : colors.grey[200],
                            transition: "all 0.3s ease-in-out",
                            "& :hover": {
                                backgroundColor: colors.grey[700],
                            }
                        }}
                    >
                        <div
                            style={{
                                textDecoration: "none",
                                fontSize: "1rem",
                                fontWeight: path == child.path ? "bold" : "normal",
                            }}
                        >
                            {child.title}
                        </div>
                    </div>
                ))
            }
        </Box>
    )
}

export default DropdownMenu;