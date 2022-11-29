import Head from 'next/head';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import storage from '../utils/storage';
import AppWrap from '../components/AppWrap';
import AppHero from '../components/AppHero';
import {
  loadAuthDetailsAction,
  loadProfileDetailsAction,
  getProfileDetailsAction,
} from '../redux/actions';

const Home = () => {
  const auth = useSelector((state) => state.auth);
  const profileDetails = useSelector((state) => state.profileDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.lang = "en";

    const loadUserDetails = async () => {
      if (auth.status === 'idle' || auth.status === 'failed') {
        const loadAuthDetailsPromise = loadAuthDetailsAction(dispatch);
        await loadAuthDetailsPromise;
      }

      if (auth.status === 'authenticated' && auth.token) {
        if (profileDetails.status === 'idle' || profileDetails.status === 'failed') {
          const data = storage.get('user');

          if (data) {
            const loadProfileDetailsPromise = loadProfileDetailsAction(dispatch);
            await loadProfileDetailsPromise;
          }
          else {
            const getProfileDetailsPromise = getProfileDetailsAction(dispatch, auth.token);
            await getProfileDetailsPromise;
          }
        }
      }
    }

    loadUserDetails();

    return () => { }

  }, [auth.token, auth.status, dispatch, profileDetails.status]);

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
        <link rel="canonical" href="https://nixlab.co.in" />

        <title>Welcome To NixLab Technologies</title>
      </Head>

      <AppHero />

    </div>
  );

}

export default AppWrap(Home);
