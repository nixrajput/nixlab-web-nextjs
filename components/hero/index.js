import Link from 'next/link';
import React from 'react';
import AppWrap from '../wrapper';
import styles from '../../styles/hero.module.scss';

const Hero = () => {
    return (
        <div className={styles.app__hero}>
            <div className={styles.ocean}>
                <div className={styles.wave}></div>
                <div className={styles.wave}></div>
            </div>

            <div className={styles.hero__details}>
                <h1>Welcome to NixLab Technologies</h1>
                <p>We are a team of pioneer developers and designers developing and designing cross-platform applications, websites, and games.</p>

                <Link href="/login">
                    <div className="app__filled_btn">Join Us</div>
                </Link>

            </div>
        </div>
    )
}

export default AppWrap(Hero, 'hero');