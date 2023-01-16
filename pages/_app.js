import '../styles/globals.scss';
import { wrapper } from '../redux/store';
import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { CssBaseline, ThemeProvider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from "@mui/material/IconButton";
import { ColorModeContext, useMode } from '../theme/theme';
import { SnackbarProvider } from 'notistack';
import Navbar from '../components/navbar/NavBar';
import Footer from '../components/footer/Footer';
import storage from '../utils/storage';
import {
  loadAuthDetailsAction,
  loadProfileDetailsAction,
  getProfileDetailsAction,
} from '../redux/actions';

function App({ Component, pageProps }) {
  const [theme, colorMode] = useMode();

  const snackbarRef = useRef(null);

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
            const getProfileDetailsPromise = getProfileDetailsAction(dispatch, auth.token);
            await loadProfileDetailsPromise;
            await getProfileDetailsPromise;
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
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider
          ref={snackbarRef}
          maxSnack={3}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          action={(key) => (
            <IconButton
              onClick={() => snackbarRef.current.closeSnackbar(key)}
              color="inherit"
              size="small"
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          )}
        >
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </SnackbarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );

}

export default wrapper.withRedux(App);
