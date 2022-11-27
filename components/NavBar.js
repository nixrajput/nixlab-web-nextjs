import { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box, IconButton, useTheme } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LoginIcon from '@mui/icons-material/Login';
import CloseIcon from '@mui/icons-material/Close';
import { ColorModeContext, tokens } from "../theme/theme";
import usePath from "../hooks/usePath";
import DropdownMenu from "./DropdownMenu";
import {
    logoutAction
} from '../redux/actions';

const menuItems = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "Services",
        path: "/services",
    },
    {
        title: "Projects",
        path: "/projects",
    },
    {
        title: "Policies",
        path: "/policies",
        childrens: [
            {
                title: "Privacy Policy",
                path: "/privacy-policy",
            },
            {
                title: "Terms of Service",
                path: "/terms-of-service",
            },
            {
                title: "Community Guidelines",
                path: "/community-guidelines",
            },
        ]
    },
    {
        title: "About",
        path: "/about",
    },

    {
        title: "Contact",
        path: "/contact",
    },
];

const Navbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    const auth = useSelector((state) => state.auth);
    // const profileDetails = useSelector((state) => state.profileDetails);
    const dispatch = useDispatch();
    const router = useRouter();

    const [mobileNav, setMobileNav] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [dropdown, setDropdown] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const path = usePath();

    const open = Boolean(anchorEl);

    const handleOpenUserMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseUserMenu = (path) => {
        setAnchorEl(null);
        if (path) {
            router.push(path);
        }
    };

    const logoutUser = async () => {
        const logoutPromise = logoutAction(dispatch);
        await logoutPromise;
    }

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
            setShowMobileMenu(false);
        }
        router.push(item.path);
    }

    const closeDropdown = () => {
        setDropdown(null);
    };

    useEffect(() => {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 40) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        });

        window.addEventListener("load", () => {
            if (window.innerWidth > 900) {
                setMobileNav(false);
                if (showMobileMenu) {
                    setShowMobileMenu(false);
                }
            }
            else {
                setMobileNav(true);
            }
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 900) {
                setMobileNav(false);
                if (showMobileMenu) {
                    setShowMobileMenu(false);
                }
            }
            else {
                setMobileNav(true);
            }
        });

        return () => {
            window.removeEventListener("scroll", () => {
                if (window.scrollY > 40) {
                    setScrolled(true);
                } else {
                    setScrolled(false);
                }
            });
            window.removeEventListener("load", () => {
                if (window.innerWidth > 900) {
                    setMobileNav(false);
                    if (showMobileMenu) {
                        setShowMobileMenu(false);
                    }
                }
                else {
                    setMobileNav(true);
                }
            });
            window.removeEventListener("resize", () => {
                if (window.innerWidth > 900) {
                    setMobileNav(false);
                    if (showMobileMenu) {
                        setShowMobileMenu(false);
                    }
                }
                else {
                    setMobileNav(true);
                }
            });
        };
    }, [showMobileMenu]);

    return (
        <Box
            position="fixed"
            top="0"
            left="0"
            right="0"
            bgcolor={colors.background}
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            p={2}
            m="0"
            zIndex="100"
            boxShadow={
                scrolled ?
                    "10px 0 10px 20px rgba(0,0,0,0.1)"
                    :
                    "none"
            }
        >

            {/* LOGO */}
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                width={{ xs: "auto", sm: "auto", md: "auto", lg: "auto" }}
                height={{ xs: "48px", sm: "48px", md: "48px", lg: "48px" }}
                maxHeight={{ xs: "48px", sm: "48px", md: "48px", lg: "48px" }}
            >
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        layout='responsive'
                        width={286}
                        height={144}
                        priority
                        style={{
                            width: "auto",
                            height: "48px",
                            maxWidth: "286px",
                            maxHeight: "48px",
                        }}
                    />
                </Link>
            </Box>

            {/* NAVBAR */}
            <Box
                display={{
                    lg: "flex",
                    xl: "flex",
                    md: "flex",
                    sm: "none",
                    xs: "none",
                }}
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
            >
                {
                    menuItems.map((item, index) => (
                        <Box
                            key={`link-${item.title}${index}`}
                            display="flex"
                            flexDirection="row"
                            alignItems="center"
                            justifyContent="center"
                            ml={2}
                            mr={2}
                            position="relative"
                        >
                            <div
                                onClick={() => handleNavClick(item)}
                                style={{
                                    textDecoration: "none",
                                    fontSize: "1rem",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    cursor: "pointer",
                                    color: (path == item.path ||
                                        item.childrens?.find(e => e.path === path)) ?
                                        colors.accent :
                                        colors.grey[200],
                                    fontWeight: (path == item.path ||
                                        item.childrens?.find(e => e.path === path)) ?
                                        "bold" :
                                        "normal",
                                    transition: "all 0.3s ease-in-out",
                                }}
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
                            </div>

                            {
                                item.childrens ?
                                    <DropdownMenu
                                        items={item.childrens}
                                        currentPath={item.path}
                                        dropdown={dropdown}
                                        closeDropdown={closeDropdown}
                                        handleNavClick={handleNavClick}
                                    />
                                    :
                                    null
                            }

                        </Box>
                    ))
                }
            </Box>

            {/* ICONS */}

            <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === "dark" ? (
                        <DarkModeOutlinedIcon />
                    ) : (
                        <LightModeOutlinedIcon />
                    )}
                </IconButton>

                {
                    auth.status === 'authenticated' ?
                        <Box
                            display="flex"
                            flexDirection="row"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <IconButton>
                                <NotificationsOutlinedIcon />
                            </IconButton>

                            <IconButton>
                                <SettingsOutlinedIcon />
                            </IconButton>

                            <Box>
                                <IconButton
                                    id="user-button"
                                    aria-controls={open ? 'user-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleOpenUserMenu}
                                >
                                    <PersonOutlinedIcon />
                                </IconButton>
                                <Menu
                                    id="user-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleCloseUserMenu}
                                    MenuListProps={{
                                        'aria-labelledby': 'user-menu-btn',
                                    }}
                                >
                                    <MenuItem
                                        onClick={() => handleCloseUserMenu('/profile')}
                                    >
                                        Profile
                                    </MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            handleCloseUserMenu();
                                            logoutUser();
                                        }}
                                    >
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </Box>
                        </Box>
                        :
                        <IconButton
                            onClick={() => handleNavClick({ path: '/login' })}
                        >
                            <LoginIcon />
                        </IconButton>
                }

                {/* Mobile Nav Toggle */}

                {
                    mobileNav ?
                        <IconButton
                            onClick={() => setShowMobileMenu((prev) => !prev)}
                        >
                            <MenuOutlinedIcon />
                        </IconButton>
                        :
                        null
                }
            </Box>

            {/* Mobile Nav */}

            {
                mobileNav ?
                    <Box
                        position="absolute"
                        display={showMobileMenu ? "flex" : "none"}
                        flexDirection="column"
                        alignItems="flex-start"
                        justifyContent="flex-start"
                        zIndex={1000}
                        top="0"
                        right={showMobileMenu ? "0" : "calc(-100% + 20rem)"}
                        bgcolor={colors.dialog}
                        width="50%"
                        minWidth="20rem"
                        maxWidth="25rem"
                        height="100vh"
                        transition="all 1s ease-in-out"
                        boxShadow={showMobileMenu ? "0 0 10px 0 rgba(0,0,0,0.1)" : "none"}
                        p="1rem"
                    >
                        <IconButton
                            onClick={() => setShowMobileMenu(false)}
                        >
                            <CloseIcon
                                sx={{
                                    fontSize: "2rem",
                                    color: colors.grey[200]
                                }}
                            />
                        </IconButton>

                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="flex-start"
                            justifyContent="flex-start"
                        >
                            {
                                menuItems.map((item, index) => (
                                    <Box
                                        key={`link-${item.title}${index}`}
                                        display="flex"
                                        flexDirection="row"
                                        alignItems="center"
                                        justifyContent="center"
                                        mt={2}
                                        mb={2}
                                        position="relative"
                                    >
                                        <div
                                            onClick={() => handleNavClick(item)}
                                            style={{
                                                textDecoration: "none",
                                                fontSize: "1rem",
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                cursor: "pointer",
                                                color: (path == item.path ||
                                                    item.childrens?.find(e => e.path === path)) ?
                                                    colors.accent :
                                                    colors.grey[200],
                                                fontWeight: (path == item.path ||
                                                    item.childrens?.find(e => e.path === path)) ?
                                                    "bold" :
                                                    "normal",
                                                transition: "all 0.3s ease-in-out",
                                                borderBottom: path == item.path ?
                                                    `2px solid ${colors.accent}` :
                                                    "none",
                                            }}
                                        >
                                            {item.title}
                                            {
                                                item.childrens &&
                                                <ExpandMoreIcon
                                                    sx={{
                                                        fontSize: "1.25rem",
                                                        fontWeight: 700,
                                                        marginLeft: "4px"
                                                    }} />
                                            }
                                        </div>

                                        {
                                            item.childrens ?
                                                <DropdownMenu
                                                    items={item.childrens}
                                                    currentPath={item.path}
                                                    dropdown={dropdown}
                                                    closeDropdown={closeDropdown}
                                                    handleNavClick={handleNavClick}
                                                />
                                                :
                                                null
                                        }
                                    </Box>
                                ))
                            }
                        </Box>
                    </Box>
                    :
                    null
            }
        </Box>
    );
};

export default Navbar;
