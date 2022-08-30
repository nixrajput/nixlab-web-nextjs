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
                                            objectFit='contain'
                                        />
                                    </div>
                                </div>

                                <div className={styles.project__content}>
                                    <div className={styles.project__title}>
                                        {project.title}
                                    </div>


                                    <div className={styles.project__type}>
                                        {project.type}
                                    </div>

                                    <div className={styles.project__short_description}>
                                        {project.shortDescription}
                                    </div>
                                </div>

                                <div className={styles.project__hover_content}>
                                    <div className={styles.project__description}>
                                        {project.description}
                                    </div>

                                    <div className={styles.project__hover_links}>
                                        <div className={styles.project__github_link}>
                                            <a href={project.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <span>GitHub</span>
                                            </a>
                                        </div>

                                        <div className={styles.project__github_link}>
                                            <a href={project.demoLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <span>Demo</span>
                                            </a>
                                        </div>
                                    </div>
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