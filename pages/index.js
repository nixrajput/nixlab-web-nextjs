import Head from 'next/head';
import AppWrap from '../components/AppWrap';
import AppHero from '../components/AppHero';

const Home = () => {

  return (
    <div className="app">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="NixLab Technologies is a software development company based in the India. We are a team of passionate developers who are passionate about building high quality software. We are always looking for talented and creative people to join our team." />
        <meta name="keywords" content="NixLab,nixlab,nixlabtechnologies,nixlabtechnology,nixlabtech,webdevelopment,androidappdevelopment,iOSappdevelopment" />
        <meta name="google-site-verification" content="j7ODdQNwjVQNYmNEX_5boI9PagNu3Uoiu2EL-yVpBI0" />

        <link rel="icon" href="/favicon.ico" />
        <link rel='apple-touch-icon' href='/logo_small.png' />

        <meta name="robots" content="index,follow" />

        <title>Welcome To NixLab Technologies</title>
      </Head>

      <AppHero />

    </div>
  );

}

export default AppWrap(Home);
