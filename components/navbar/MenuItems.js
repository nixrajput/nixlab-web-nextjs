import { useRef, useState } from 'react';
import { useRouter } from "next/router";
import { Box, useTheme, Button } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from "../../theme/theme";
import DropdownMenu from './DropdownMenu';
import usePath from '../../hooks/usePath';
import useOnClickOutside from '../../hooks/useOnClickOutside';

const MenuItems = ({ item, mobileNav, showMobileMenu, closeMobileMenu }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const router = useRouter();

    const [dropdown, setDropdown] = useState(null);

    const path = usePath();
    const dropdownRef = useRef(null);

    const closeDropdown = () => {
        setDropdown(null);
    };

    const onMouseEnter = (path) => {
        window.innerWidth > 900 && setDropdown(path);
    };

    const onMouseLeave = () => {
        window.innerWidth > 900 && setDropdown(null);
    };

    const handleNavClick = (item) => {
        if (item.childrens) {
            if (dropdown) {
                closeDropdown();
            }
            else {
                setDropdown(item.path);
            }
            return;
        }
        if (dropdown) {
            closeDropdown();
        }

        if (mobileNav && showMobileMenu) {
            closeMobileMenu();
        }
        router.push(item.path);
    }

    useOnClickOutside(dropdownRef, dropdown, () => closeDropdown());

    return (
        <Button
            onClick={() => handleNavClick(item)}
            onMouseEnter={() => onMouseEnter(item.path)}
            onMouseLeave={() => onMouseLeave()}
            ref={dropdownRef}
            sx={{
                position: "relative",
                m: mobileNav ? "0.5rem 0" : "0 0.5rem",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                textTransform: "capitalize",
                textDecoration: "none",
                fontSize: "1rem",
                color: (path == item.path ||
                    item.childrens?.find(e => e.path === path)) ?
                    colors.accent :
                    colors.grey[200],
                fontWeight: (path == item.path ||
                    item.childrens?.find(e => e.path === path)) ?
                    700 :
                    400,
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                    color: colors.accent
                }
            }}
        >
            <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
            >
                {item.title}
                {
                    item.childrens ?
                        <ExpandMoreIcon
                            sx={{
                                fontSize: "1.25rem",
                                fontWeight: 700,
                                marginLeft: "4px"
                            }} />
                        :
                        null
                }
            </Box>

            {
                item.childrens ?
                    <DropdownMenu
                        items={item.childrens}
                        currentPath={item.path}
                        dropdown={dropdown}
                        handleNavClick={handleNavClick}
                    />
                    :
                    null
            }

        </Button>
    )
}

export default MenuItems;