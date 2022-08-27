import React from 'react';
import AppWrap from '../../components/app-wrap';
import Head from 'next/head';

const Services = () => {
    return (
        <div>
            <Head>
                <title>{`Services`}</title>
            </Head>

            Services
        </div>
    )
}

export default AppWrap(Services, 'services');