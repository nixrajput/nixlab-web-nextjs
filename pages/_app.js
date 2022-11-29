import '../styles/globals.scss';
import { wrapper } from '../redux/store';
import { useRef } from 'react';
import { Provider } from "react-redux";
import { CssBaseline, ThemeProvider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from "@mui/material/IconButton";
import { ColorModeContext, useMode } from '../theme/theme';
import { SnackbarProvider } from 'notistack';
import Navbar from '../components/navbar/NavBar';
import Footer from '../components/footer/Footer';

function App({ Component, ...rest }) {
  const [theme, colorMode] = useMode();

  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  const snackbarRef = useRef(null);


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
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
        </Provider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );

}

export default App;
