import AppWrap from '../../components/app-wrap';
import Head from 'next/head';

const Projects = () => {
    return (
        <div>
            <Head>
                <title>{`Projects`}</title>
            </Head>

            Projects
        </div>
    )
}

export default AppWrap(Projects, 'projects');