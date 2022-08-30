import AppWrap from '../../components/app-wrap';
import Head from 'next/head';
import styles from '../../styles/contact.module.scss';
import { HiMail } from 'react-icons/hi';

const Contact = () => {
    return (
        <div className={styles.contact}>
            <Head>
                <title>{`Contact`}</title>
            </Head>

            <div className={`app__page_heading`}>
                Contact <span>Us</span>
            </div>

            <div className={styles.contact__content}>
                <a href="mailto:nixlab.in@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className={`app__box_container ${styles.contact__link}`}>
                        <HiMail />
                        nixlab.in@gmail.com
                    </div>
                </a>
            </div>
        </div>
    )
}

export default AppWrap(Contact, 'contact');