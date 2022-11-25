import '../styles/globals.scss';
import { wrapper } from '../redux/store';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import storage from '../utils/storage';
import { client } from '../api/client';
import {
  authenticating, authenticated,
  loadUser, loadingUser, unauthenticated,
  setError
} from '../redux/slices/authSlice';

function App({ Component, pageProps }) {

  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  // useEffect(() => {

  //   const loadUserDetails = async () => {
  //     console.log('loading user details');
  //     dispatch(authenticating());
  //     const data = storage.get('auth');
  //     if (!data) {
  //       dispatch(unauthenticated());
  //     }
  //     else {
  //       dispatch(authenticated(data));
  //       if (auth.token) {
  //         dispatch(loadingUser());
  //         const headers = { 'Authorization': `Bearer ${auth.token}` };
  //         try {
  //           const response = await client.get('/me', { headers });
  //           if (response.status === 200) {
  //             dispatch(loadUser(response.user));
  //           }
  //           else {
  //             dispatch(setError(response.message));
  //           }
  //         } catch (error) {
  //           dispatch(setError(error));
  //         }
  //       }
  //     }
  //   }

  //   loadUserDetails();

  //   return () => { }

  // }, [auth.token, dispatch]);

  return <Component {...pageProps} />

}

export default wrapper.withRedux(App);
