import Head from 'next/head';
import styles from '../../styles/about.module.scss';
import { BsCheckCircleFill } from 'react-icons/bs';
import Image from 'next/image';
import Data from '../../data';
import AppWrap from '../../components/AppWrap';

const About = () => {
    return (
        <div className={styles.about}>
            <Head>
                <title>{`About`}</title>
            </Head>

            <div className={`app__page_heading`}>
                Who <span>We</span> Are
            </div>

            <div className={styles.about__content}>
                <p>
                    {Data.about.description}
                </p>

                {/* Services */}

                <div className={styles.about__text_heading}>
                    What services we provide
                </div>

                {
                    Data.about.services.map((service, index) => {
                        return (
                            <div key={index} className={styles.about__text_tile}>
                                <BsCheckCircleFill />
                                <div className={styles.about__text_tile_content}>
                                    {service}
                                </div>
                            </div>
                        )
                    })
                }

                {/* Mission */}

                <div className={styles.about__text_heading}>
                    Our mission
                </div>

                <p className={styles.about__desc}>
                    Our mission is to provide customer-centric, result-oriented, cost-competitive innovative & functional IT Solutions to our valuable global clients.
                </p>

                <p className={styles.about__desc}>
                    We stick to the following principles in delivering our mission:
                </p>

                {
                    Data.about.mission.map((mission, index) => {
                        return (
                            <div key={index} className={styles.about__text_tile}>
                                <BsCheckCircleFill />
                                <div className={styles.about__text_tile_content}>
                                    {mission}
                                </div>
                            </div>
                        )
                    })
                }

                <div className={styles.about__make_in_india_image}>
                    <Image
                        src="/mki.png"
                        alt="Make in India"
                        width={200}
                        height={200}
                        layout='responsive'
                        objectFit='cover'
                    />
                </div>

            </div>

        </div>
    )
}

export default AppWrap(About, 'about');