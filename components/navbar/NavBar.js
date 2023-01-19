import { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { useRouter } from "next/router";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box, Button, IconButton, useTheme, } from "@mui/material";
import PaletteOutlinedButton from "@mui/icons-material/PaletteOutlined"
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CloseIcon from '@mui/icons-material/Close';
import { ColorModeContext, tokens, useMode } from "../../theme/theme";
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
    const themeModeCtx = useContext(ColorModeContext);
    const themeHook = useMode();

    const auth = useSelector((state) => state.auth);
    const profileDetails = useSelector((state) => state.profileDetails);
    const dispatch = useDispatch();
    const router = useRouter();

    const [mobileNav, setMobileNav] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [themeModeAnchorEl, setThemeModeAnchorEl] = useState(null);

    const open = Boolean(anchorEl);
    const themeModeOpen = Boolean(themeModeAnchorEl);

    const handleOpenThemeModeMenu = (event) => {
        setThemeModeAnchorEl(event.currentTarget);
    };

    const handleCloseThemeModeMenu = () => {
        setThemeModeAnchorEl(null);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorEl(null);
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
            bgcolor={colors.background}
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
                    {
                        auth.status === 'authenticated' ?
                            <Box
                                display="flex"
                                flexDirection="row"
                                alignItems="center"
                                justifyContent="center"
                            >
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
                                                bgcolor: colors.background,
                                                color: colors.primary[100],
                                                borderRadius: "0.5rem",
                                            },
                                            '& .MuiMenuItem-root': {
                                                color: colors.primary[100],
                                                fontWeight: "600",
                                                padding: "0.5rem 2rem",
                                                '&:hover': {
                                                    backgroundColor: colors.primary[800],
                                                }
                                            }
                                        }}
                                    >
                                        <MenuItem
                                            onClick={() => {
                                                handleCloseUserMenu();
                                                router.push('/profile');
                                            }}
                                        >
                                            Profile
                                        </MenuItem>

                                        <MenuItem
                                            onClick={() => {
                                                handleCloseUserMenu();
                                                //router.push('/settings');
                                            }}
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

                                <IconButton>
                                    <NotificationsOutlinedIcon />
                                </IconButton>
                            </Box>
                            :
                            <Button variant="contained"
                                sx={{
                                    backgroundColor: colors.accent,
                                    color: '#f0f0f0',
                                    borderRadius: "0.5rem",
                                    transition: "all 0.5 ease-in-out",
                                    padding: {
                                        xs: "0.25rem 1rem",
                                        sm: "0.25rem 1rem",
                                        md: "0.25rem 1.5rem",
                                        lg: "0.25rem 1.5rem",
                                        xl: "0.25rem 1.5rem",
                                    },
                                    fontSize: {
                                        xs: "0.8rem",
                                        sm: "0.8rem",
                                        md: "0.875rem",
                                        lg: "0.875rem",
                                        xl: "0.875rem",
                                    },
                                    fontWeight: "600",
                                    border: "none",
                                    outline: "none",
                                    boxShadow: "none",
                                }}
                                onClick={() => {
                                    if (mobileNav && showMobileMenu) {
                                        setShowMobileMenu(false);
                                    }
                                    router.push('/login');
                                }}
                            >
                                Login
                            </Button>
                    }

                    {/* Theme Menu */}

                    <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <IconButton
                            id="theme-button"
                            aria-controls={themeModeOpen ? 'theme-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={themeModeOpen ? 'true' : undefined}
                            onClick={handleOpenThemeModeMenu}
                        >
                            <PaletteOutlinedButton />
                        </IconButton>
                        <Menu
                            id="theme-menu"
                            anchorEl={themeModeAnchorEl}
                            open={themeModeOpen}
                            onClose={handleCloseThemeModeMenu}
                            MenuListProps={{
                                'aria-labelledby': 'theme-menu-btn',
                            }}
                            sx={{
                                '& .MuiMenu-paper': {
                                    bgcolor: colors.background,
                                    color: colors.primary[100],
                                    borderRadius: "0.5rem",
                                },
                                '& .MuiMenuItem-root': {
                                    padding: "0.5rem 2rem",
                                    fontWeight: "600",
                                    '&:hover': {
                                        backgroundColor: colors.primary[800],
                                    }
                                }
                            }}
                        >
                            <MenuItem
                                sx={{
                                    color: themeHook[2] === 'system' ? colors.accent : colors.primary[100],
                                }}
                                onClick={() => {
                                    themeModeCtx.setColorMode('system');
                                    handleCloseThemeModeMenu();
                                }}
                            >
                                System
                            </MenuItem>

                            <MenuItem
                                sx={{
                                    color: themeHook[2] === 'light' ? colors.accent : colors.primary[100],
                                }}
                                onClick={() => {
                                    themeModeCtx.setColorMode('light');
                                    handleCloseThemeModeMenu();
                                }}
                            >
                                Light
                            </MenuItem>

                            <MenuItem
                                sx={{
                                    color: themeHook[2] === 'dark' ? colors.accent : colors.primary[100],
                                }}
                                onClick={() => {
                                    themeModeCtx.setColorMode('dark');
                                    handleCloseThemeModeMenu();
                                }}
                            >
                                Dark
                            </MenuItem>
                        </Menu>
                    </Box>

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
