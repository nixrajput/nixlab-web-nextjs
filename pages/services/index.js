import React from 'react';
import AppWrap from '../../components/app-wrap';
import Head from 'next/head';
import styles from '../../styles/services.module.scss';
import Data from '../../data';

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
                            Data.services.map((service, index) => {
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