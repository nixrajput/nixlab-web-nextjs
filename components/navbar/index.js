import Link from "next/link";
import { HiX } from "react-icons/hi";
import { RiMenu3Fill, RiUser2Fill } from "react-icons/ri";
import { useState, useEffect } from "react";
import usePath from "../../hooks/usePath";
import styles from "../../styles/navbar.module.scss";
import { useSelector } from "react-redux";

const menuItems = ["home", "services", "projects", "about", "contact"];

const Navbar = () => {
    const auth = useSelector((state) => state.auth);

    const [toggle, setToggle] = useState(false);
    const [scolled, setScolled] = useState(false);

    const path = usePath();

    const handleNavClick = (path) => {
        let returnUrl = "/";

        if (path === "home") {
            returnUrl = "/";
        } else {
            returnUrl = `/${path}`;
        }

        return returnUrl;
    };

    useEffect(() => {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 40) {
                setScolled(true);
            } else {
                setScolled(false);
            }
        });

        return () => {
            window.removeEventListener("scroll", () => { });
        };
    }, []);

    return (
        <nav
            className={
                scolled
                    ? `${styles.app__navbar} ${styles.scrolled}`
                    : styles.app__navbar
            }
        >
            <div className={styles.app__navbar_logo}>
                <Link href="/">
                    <img src="/logo.png" alt="logo" />
                </Link>
            </div>

            {!toggle && (
                <>
                    <ul className={styles.app__navbar_menu}>
                        {menuItems.map((item) => (
                            <li
                                key={`link-${item}`}
                                className={
                                    path == `/${item}`
                                        ? `app__flex ${styles.active}`
                                        : "app__flex"
                                }
                            >
                                <div />
                                <Link href={handleNavClick(item)}>{item}</Link>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.app__navbar_login}>
                        {auth.token ? (
                            <Link href="/profile">
                                <div className={styles.user__menu_btn}>
                                    <RiUser2Fill />
                                </div>
                            </Link>
                        ) : (
                            <Link href="/login">
                                <div
                                    className={`app__filled_btn ${styles.navbar__login_btn}`}
                                >
                                    Login
                                </div>
                            </Link>
                        )}
                    </div>
                </>
            )}

            {/* Mobile Menu Toggle */}

            <div className={styles.app__navbar_toggle}>
                {auth.token && (
                    <Link href="/profile">
                        <div className={styles.app__navbar_toggle_btn}>
                            <RiUser2Fill />
                        </div>
                    </Link>
                )}
                <div className={styles.app__navbar_toggle_btn}>
                    <RiMenu3Fill onClick={() => setToggle(true)} />
                </div>
            </div>

            <div className={styles.app__navbar_mobile_menu}>
                <div
                    className={
                        toggle
                            ? `${styles.app__navbar_menu_items} ${styles.show}`
                            : `${styles.app__navbar_menu_items}`
                    }
                >
                    <div
                        onClick={() => setToggle(false)}
                        className={styles.app__navbar_mobile_menu_close}
                    >
                        <HiX />
                    </div>
                    <ul>
                        {menuItems.map((item) => (
                            <li
                                key={item}
                                className={path == `/${item}` ? `${styles.active}` : ""}
                                onClick={() => setToggle(false)}
                            >
                                <Link href={handleNavClick(item)}>{item}</Link>
                            </li>
                        ))}
                    </ul>

                    {!auth.token && (
                        <Link href="/login">
                            <div className={`app__filled_btn ${styles.navbar__login_btn}`}>
                                Login
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
