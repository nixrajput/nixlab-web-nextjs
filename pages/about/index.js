import AppWrap from '../../components/app-wrap';
import Head from 'next/head';

const About = () => {
    return (
        <div>
            <Head>
                <title>{`About`}</title>
            </Head>

            About
        </div>
    )
}

export default AppWrap(About, 'about');