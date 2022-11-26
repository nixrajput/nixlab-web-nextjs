import '../styles/globals.scss';
import { wrapper } from '../redux/store';
import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { CssBaseline, ThemeProvider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from "@mui/material/IconButton";
import { ColorModeContext, useMode } from '../theme/theme';
import { SnackbarProvider } from 'notistack';
import storage from '../utils/storage';
import {
  loadAuthDetailsAction,
  loadProfileDetailsAction,
  getProfileDetailsAction,
} from '../redux/actions';
import Navbar from '../components/NavBar';

function App({ Component, pageProps }) {
  const [theme, colorMode] = useMode();

  const auth = useSelector((state) => state.auth);
  const profileDetails = useSelector((state) => state.profileDetails);
  const dispatch = useDispatch();

  const snackbarRef = useRef(null)

  useEffect(() => {
    const loadUserDetails = async () => {
      if (auth.status === 'idle' || auth.status === 'failed') {
        const loadAuthDetailsPromise = loadAuthDetailsAction(dispatch);
        await loadAuthDetailsPromise;
      }

      if (auth.token && auth.status === 'authenticated') {
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
        </SnackbarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );

}

export default wrapper.withRedux(App);
