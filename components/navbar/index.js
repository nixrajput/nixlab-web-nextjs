import Link from "next/link";
import { HiX } from 'react-icons/hi';
import { RiMenu3Fill } from 'react-icons/ri';
import { useState, useEffect } from 'react';
import usePath from "../../hooks/usePath";

const menuItems = ['home', 'services', 'projects', 'about', 'contact'];

const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    const [scolled, setScolled] = useState(false);

    const path = usePath();

    useEffect(() => {

        window.addEventListener('scroll', function () {
            if (window.scrollY > 80) { setScolled(true) } else { setScolled(false) }
        });

        return () => {
            window.removeEventListener("scroll", () => { });
        }
    }, []);

    return (
        <nav className={scolled ? 'app__navbar scrolled' : 'app__navbar'}>

            <div className="app__navbar__logo">
                <Link href='/' >
                    <img
                        src='/logo.webp'
                        alt='logo'
                    />
                </Link>
            </div>

            <ul className='app__navbar_links'>

                {
                    menuItems.map((item) => (
                        <li key={`link-${item}`}
                            className={path == `#${item}` ? 'app__flex p-text active' : 'app__flex p-text'} >
                            <div />
                            <Link href={`/${item}`}>{item}</Link>
                        </li>
                    ))
                }

            </ul>

            <div className='app__navbar_menu'>

                <RiMenu3Fill onClick={() => setToggle(true)} />

                <div className={toggle ? 'app__navbar_mobile app__navbar_mobile_active' : 'app__navbar_mobile'}>
                    <div onClick={() => setToggle(false)}><HiX /></div>
                    <ul>
                        {
                            menuItems.map((item) => (
                                <li key={item}
                                    className={path == `#${item}` ? 'active' : ''}
                                    onClick={() => setToggle(false)}
                                >
                                    <Link href={`/${item}`} >
                                        {item}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>

            </div>

        </nav>
    )
}

export default Navbar;