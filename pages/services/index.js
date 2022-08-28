import React from 'react';
import AppWrap from '../../components/app-wrap';
import Head from 'next/head';
import styles from '../../styles/services.module.scss';

const ServiceList = [
    {
        image: '/mobile.png',
        title: 'iOS & ANDROID APP DEVELOPMENT',
        shortDescription: 'Flutter, React Native, Java, Kotlin, Objective-C',
        description: 'iOS and Android app development is a key part of our business. We have a team of iOS and Android developers who are capable of building apps for any platform.',
    },
    {
        image: '/coding.png',
        title: 'FRONTEND WEB DEVELOPMENT',
        shortDescription: 'React.js, Next.js, Angular, Vue.js, HTML, CSS, JavaScript, Python, Node.js',
        description: 'We have a team of frontend web developers who are capable of building websites for any platform.',
    },
    {
        image: '/coding.png',
        title: 'BACKEND DEVELOPMENT',
        shortDescription: 'Node.js, C++, Dart, Python, Java, PHP, Ruby, Go',
        description: 'We have a team of backend developers who are capable of building websites for any platform.',
    },
    {
        image: '/coding.png',
        title: 'SOFTWARE DEVELOPMENT',
        shortDescription: 'C++, Java, Python, Dart',
        description: 'We have a team of software developers who are capable of building websites for any platform.',
    },
];

const Services = () => {
    return (
        <div className={styles.services}>
            <Head>
                <title>{`Services - NixLab Technologies`}</title>
            </Head>

            <div className="flex__column">


                <div className={styles.service__heading}>
                    <div className={`app__page_heading`}>
                        LEARN MORE ABOUT OUR <span>SERVICES</span>
                    </div>
                </div>


                <div className={styles.service__list}>
                    <div className={`flex__row ${styles.service__list_row}`}>

                        {
                            ServiceList.map((service, index) => {
                                return (
                                    <div key={index} className={styles.service__item}>
                                        <div className={styles.service__image}>
                                            <img src={service.image} alt={service.title} />
                                        </div>

                                        <div className={styles.service__content}>
                                            <div className={styles.service__title}>
                                                {service.title}
                                            </div>

                                            <div className={styles.service__description}>
                                                {service.shortDescription}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>

            </div>

        </div>
    )
}

export default AppWrap(Services, 'services');