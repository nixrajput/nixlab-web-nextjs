import AppWrap from '../../components/app-wrap';
import Head from 'next/head';

const Contact = () => {
    return (
        <div>
            <Head>
                <title>{`Contact`}</title>
            </Head>

            Contact
        </div>
    )
}

export default AppWrap(Contact, 'contact');