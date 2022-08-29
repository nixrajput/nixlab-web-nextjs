import AppWrap from '../../components/app-wrap';
import Head from 'next/head';
import styles from '../../styles/projects.module.scss';
import Data from '../../data';
import Image from 'next/image';

const Projects = () => {
    return (
        <div className={styles.projects}>
            <Head>
                <title>{`Projects`}</title>
            </Head>

            <div className={`app__page_heading`}>
                OUR <span>PROJECTS</span>
            </div>

            <div className={`flex__row ${styles.project__list_row}`}>

                {
                    Data.projects.map((project, index) => {
                        return (
                            <div key={index} className={styles.project__item}>

                                <div className={styles.project__image}>
                                    <div className={styles.image}>
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            layout='responsive'
                                            width={400}
                                            height={400}
                                            objectFit='cover'
                                        />
                                    </div>
                                </div>

                                <div className={styles.project__details}>
                                    <div className={styles.project__content}>
                                        <div className={styles.project__title}>
                                            {project.title}
                                        </div>
                                    </div>

                                    <div className={styles.project__type}>
                                        {project.type}
                                    </div>
                                </div>

                                <div className={styles.project__short_description}>
                                    {project.shortDescription}
                                </div>

                                <div className={styles.project__description}>
                                    {project.description}
                                </div>

                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default AppWrap(Projects, 'projects');