import React from 'react';
import { useSelector } from "react-redux";
import styles from '../../styles/hero.module.scss';
import Image from 'next/image';

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
                    <h1>Welcome to <span>NixLab Technologies</span></h1>
                    <p>Code to innovate</p>
                </div>

                <div className={styles.hero__image}>
                    <Image src="/hero.png"
                        alt="hero"
                        layout='responsive'
                        width={400}
                        height={400}
                        priority
                        sizes="(max-width: 992px) 300px, 400px"
                        objectFit='cover'
                    />
                </div>
            </div>

        </div>
    )
}

export default Hero;