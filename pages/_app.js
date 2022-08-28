import '../styles/globals.scss';
import { wrapper } from '../redux/store';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import storage from '../utils/storage';
import { client } from '../api/client';
import { authenticating, authenticated, setUser, unauthenticated } from '../redux/slices/authSlice';

function App({ Component, pageProps }) {

  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const loadUser = async () => {
    dispatch(authenticating());
    const data = storage.get('auth');

    if (!data) {
      dispatch(unauthenticated());
    }
    else {
      dispatch(authenticated(data));
      if (auth.status === 'authenticated' && auth.token) {
        const headers = { 'Authorization': `Bearer ${auth.token}` };
        const response = await client.get('/me', { headers });
        console.log(response);
        dispatch(setUser(response.user));
      }
    }
  }

  useEffect(() => {

    loadUser();

    return () => { }

  }, [auth.token]);

  return <Component {...pageProps} />

}

export default wrapper.withRedux(App);
