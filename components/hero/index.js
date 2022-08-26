import Link from 'next/link';
import React from 'react';
import AppWrap from '../wrapper';

const Hero = () => {
    return (
        <>
            <div className="ocean">
                <div className="wave"></div>
                <div className="wave"></div>
            </div>

            <div className="hero__details">
                <h1>Welcome to NixLab Technologies</h1>
                <p>We are a team of pioneer developers and designers who are developing and designing cross-platform applications, websites and games.</p>
                <Link href="/login"
                    className='app__outlined_btn'>
                    Join Us
                </Link>
            </div>
        </>
    )
}

export default AppWrap(Hero, 'hero', 'hero');