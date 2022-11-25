import Link from "next/link";
import { HiX } from "react-icons/hi";
import { RiMenu3Fill, RiUser2Fill } from "react-icons/ri";
import { useState, useEffect, useContext } from "react";
import usePath from "../hooks/usePath";
import styles from "../styles/navbar.module.scss";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { Box, IconButton, useTheme } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { ColorModeContext, tokens } from "../theme/theme";
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
        title: "About",
        path: "/about",
    },
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

    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const path = usePath();

    const open = Boolean(anchorEl);

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleNavClick = (path) => {
        let returnUrl = "/";

        returnUrl = path;

        return returnUrl;
    };

    useEffect(() => {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 40) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        });

        return () => {
            window.removeEventListener("scroll", () => { });
        };
    }, []);

    return (
        <Box
            position="fixed"
            top="0"
            left="0"
            right="0"
            //height={{ xs: "80px", sm: "80px", md: "80px", lg: "80px" }}
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
                        <IconButton>
                            <NotificationsOutlinedIcon />
                        </IconButton>
                        :
                        null
                }

                {
                    auth.status === 'authenticated' ?
                        <IconButton>
                            <SettingsOutlinedIcon />
                        </IconButton>
                        :
                        null
                }

                {
                    auth.status === 'authenticated' ?
                        <>
                            <IconButton
                                id="user-button"
                                aria-controls={open ? 'user-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleOpenMenu}
                            >
                                <PersonOutlinedIcon />
                            </IconButton>
                            <Menu
                                id="user-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleCloseMenu}
                                MenuListProps={{
                                    'aria-labelledby': 'user-button',
                                }}
                            >
                                <MenuItem
                                    onClick={handleCloseMenu}
                                >
                                    Profile
                                </MenuItem>

                                <MenuItem
                                    onClick={handleCloseMenu}
                                >
                                    My account
                                </MenuItem>

                                <MenuItem
                                    onClick={() => {
                                        handleCloseMenu();
                                        logoutUser();
                                    }}
                                >
                                    Logout
                                </MenuItem>
                            </Menu>
                        </>
                        :
                        null
                }
                <IconButton>
                    <MenuOutlinedIcon />
                </IconButton>
            </Box>
        </Box>
        // <nav
        //     className={
        //         scolled
        //             ? `${styles.app__navbar} ${styles.scrolled}`
        //             : styles.app__navbar
        //     }
        // >
        //     <div className={styles.app__navbar_logo}>
        //         <Link href="/">
        //             <Image
        //                 src="/logo.png"
        //                 alt="logo"
        //                 layout='responsive'
        //                 width={284}
        //                 height={144}
        //                 priority
        //                 objectFit='cover'
        //             />
        //         </Link>
        //     </div>

        //     {!toggle && (
        //         <>
        //             <ul className={styles.app__navbar_menu}>
        //                 {menuItems.map((item) => (
        //                     <li
        //                         key={`link-${item.title}`}
        //                         className={
        //                             path == item.path
        //                                 ? `app__flex ${styles.active}`
        //                                 : "app__flex"
        //                         }
        //                     >
        //                         <div />
        //                         <Link href={handleNavClick(item.path)}>{item.title}</Link>
        //                     </li>
        //                 ))}
        //             </ul>

        //             <div className={styles.app__navbar_login}>
        //                 {auth.token ? (
        //                     <Link href="/profile">
        //                         <div className={styles.user__menu_btn}>
        //                             <RiUser2Fill />
        //                         </div>
        //                     </Link>
        //                 ) : (
        //                     <Link href="/login">
        //                         <div
        //                             className={`app__filled_btn ${styles.navbar__login_btn}`}
        //                         >
        //                             Login
        //                         </div>
        //                     </Link>
        //                 )}
        //             </div>
        //         </>
        //     )}

        //     {/* Mobile Menu Toggle */}

        //     <div className={styles.app__navbar_toggle}>
        //         {auth.token && (
        //             <Link href="/profile">
        //                 <div className={styles.app__navbar_toggle_btn}>
        //                     <RiUser2Fill />
        //                 </div>
        //             </Link>
        //         )}
        //         <div className={styles.app__navbar_toggle_btn}>
        //             <RiMenu3Fill onClick={() => setToggle(true)} />
        //         </div>
        //     </div>

        //     <div className={styles.app__navbar_mobile_menu}>
        //         <div
        //             className={
        //                 toggle
        //                     ? `${styles.app__navbar_menu_items} ${styles.show}`
        //                     : `${styles.app__navbar_menu_items}`
        //             }
        //         >
        //             <div
        //                 onClick={() => setToggle(false)}
        //                 className={styles.app__navbar_mobile_menu_close}
        //             >
        //                 <HiX />
        //             </div>
        //             <ul>
        //                 {menuItems.map((item) => (
        //                     <li
        //                         key={item.title}
        //                         className={path == item.path ? `${styles.active}` : ""}
        //                         onClick={() => setToggle(false)}
        //                     >
        //                         <Link href={handleNavClick(item.path)}>{item.title}</Link>
        //                     </li>
        //                 ))}
        //             </ul>

        //             {!auth.token && (
        //                 <Link href="/login">
        //                     <div className={`app__filled_btn ${styles.navbar__login_btn}`}>
        //                         Login
        //                     </div>
        //                 </Link>
        //             )}
        //         </div>
        //     </div>
        // </nav>
    );
};

export default Navbar;
