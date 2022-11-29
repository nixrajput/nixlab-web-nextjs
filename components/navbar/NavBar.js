import { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box, IconButton, useTheme, } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import LoginIcon from '@mui/icons-material/Login';
import CloseIcon from '@mui/icons-material/Close';
import { ColorModeContext, tokens } from "../../theme/theme";
import {
    logoutAction
} from '../../redux/actions';
import MenuItemButton from "./MenuItemButton";
import CircleAvatar from "../CircleAvatar";

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
    const profileDetails = useSelector((state) => state.profileDetails);
    const dispatch = useDispatch();
    const router = useRouter();

    const [mobileNav, setMobileNav] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

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
    }, [showMobileMenu, mobileNav]);

    return (
        <Box
            position="fixed"
            top="0"
            left="0"
            right="0"
            width="100%"
            maxWidth="1024px"
            height="80px"
            maxHeight="80px"
            bgcolor={
                scrolled ?
                    colors.dialog :
                    colors.background
            }
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            m="0 auto"
            zIndex="100"
            boxShadow={
                scrolled ?
                    `0px 0px 10px ${colors.shadow}`
                    :
                    "none"
            }
            sx={{
                transition: "all 0.5s ease-in-out",
            }}
            p={{
                xs: "1rem",
                sm: "1rem",
                md: "1rem",
                lg: "1rem 0",
                xl: "1rem 0",
            }}
        >
            <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
                m="0 auto"
            >

                {/* LOGO */}

                <Box
                    position="relative"
                    display="flex"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    sx={{ aspectRatio: "16/9" }}
                    height={{ xs: "48px", sm: "48px", md: "48px", lg: "48px" }}
                    maxHeight={{ xs: "48px", sm: "48px", md: "48px", lg: "48px" }}
                    ml={{
                        xs: "0",
                        sm: "0",
                        md: "0",
                        lg: "0.5rem",
                        xl: "0.5rem",
                    }}
                >
                    <Image
                        src="/logo.png"
                        alt="logo"
                        fill
                        sizes="100%"
                        priority
                        placeholder="blur"
                        blurDataURL="/logo.png"
                        style={{
                            objectFit: "contain",
                            cursor: "pointer",
                        }}
                        onClick={() => router.push("/")}
                    />
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
                            <MenuItemButton
                                key={`menu-item-${index}`}
                                item={item}
                                mobileNav={mobileNav}
                                showMobileMenu={showMobileMenu}
                                closeMobileMenu={() => setShowMobileMenu(false)}
                            />
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

                                <Box>
                                    <IconButton
                                        id="user-button"
                                        aria-controls={open ? 'user-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleOpenUserMenu}
                                    >
                                        {
                                            profileDetails.status === 'success' ?
                                                profileDetails.user.avatar ?
                                                    <CircleAvatar
                                                        avatar={profileDetails.user.avatar}
                                                        size="32px"
                                                    />
                                                    :
                                                    <PersonOutlinedIcon />
                                                :
                                                null
                                        }
                                    </IconButton>
                                    <Menu
                                        id="user-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleCloseUserMenu}
                                        MenuListProps={{
                                            'aria-labelledby': 'user-menu-btn',
                                        }}
                                        sx={{
                                            '& .MuiMenu-paper': {
                                                width: '20ch',
                                                bgcolor: colors.background,
                                                color: colors.primary[100],
                                                borderRadius: "4px",
                                            },
                                            '& .MuiMenuItem-root': {
                                                '&:hover': {
                                                    backgroundColor: colors.grey[800],
                                                }
                                            }
                                        }}
                                    >
                                        <MenuItem
                                            onClick={() => handleCloseUserMenu('/profile')}
                                        >
                                            Profile
                                        </MenuItem>

                                        <MenuItem
                                        // onClick={() => handleCloseUserMenu('/settings')}
                                        >
                                            Settings
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
                                onClick={() => {
                                    if (mobileNav && showMobileMenu) {
                                        setShowMobileMenu(false);
                                    }
                                    router.push('/login');
                                }}
                            >
                                <LoginIcon />
                            </IconButton>
                    }

                    {/* Mobile Nav Toggle */}

                    {
                        mobileNav ?
                            <IconButton
                                onClick={() => setShowMobileMenu((prev) => !prev)}
                                sx={{
                                    mr: "0",
                                    pr: "0",
                                }}
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
                            minWidth="15rem"
                            maxWidth="15rem"
                            height="100vh"
                            transition="all 1s ease-in-out"
                            boxShadow={showMobileMenu ? `0 0 10px 0 ${colors.shadow}` : 'none'}
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
                                width="100%"
                                display="flex"
                                flexDirection="column"
                                alignItems="flex-start"
                                justifyContent="flex-start"
                                mt="1rem"
                            >
                                {
                                    menuItems.map((item, index) => (
                                        <MenuItemButton
                                            key={`menu-item-${index}`}
                                            item={item}
                                            mobileNav={mobileNav}
                                            showMobileMenu={showMobileMenu}
                                            closeMobileMenu={() => setShowMobileMenu(false)}
                                        />
                                    ))
                                }
                            </Box>
                        </Box>
                        :
                        null
                }
            </Box>
        </Box>
    );
};

export default Navbar;
