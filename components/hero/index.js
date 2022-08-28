import Link from 'next/link';
import React from 'react';
import { useSelector } from "react-redux";
import styles from '../../styles/hero.module.scss';

const Hero = () => {

    const auth = useSelector((state) => state.auth);

    return (
        <div className={styles.app__hero}>
            <div className={styles.ocean}>
                <div className={styles.wave}></div>
                <div className={styles.wave}></div>
            </div>

            <div className={styles.flex__column}>
                <div className={styles.hero__details}>
                    {
                        (auth.status === 'userLoaded' && auth.user) &&
                        <h3>Hello 👋 {auth.user.fname}</h3>
                    }
                    <h1>Welcome to NixLab Technologies</h1>
                    <p>We are a team of pioneer developers and designers developing and designing cross-platform applications, websites, and games.</p>

                    {
                        !auth.token &&
                        <Link href="/login">
                            <div className="app__filled_btn">Sign Up</div>
                        </Link>
                    }
                </div>

                <div className={styles.hero__image}>
                    <img src="/hero.png" alt="hero" />
                </div>
            </div>

        </div>
    )
}

export default Hero;