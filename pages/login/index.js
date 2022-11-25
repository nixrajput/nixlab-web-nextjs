import Head from "next/head";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, useTheme } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useSnackbar } from 'notistack';
import AppWrap from "../../components/AppWrap";
import { tokens } from '../../theme/theme';
import ResponsiveFormBox from "../../components/ResponsiveFormBox";
import ExpandedBox from "../../components/ExpandedBox";
import InputBox from "../../components/InputBox";
import {
    loginAction,
    getProfileDetailsAction,
} from '../../redux/actions';

const Login = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const auth = useSelector((state) => state.auth);
    const profileDetails = useSelector((state) => state.profileDetails);
    const dispatch = useDispatch();
    const router = useRouter();

    const [emailUsername, setEmailUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [open, setOpen] = useState(false);

    const { enqueueSnackbar } = useSnackbar();

    const closeBackdrop = () => {
        setOpen(false);
    };

    const openBackdrop = () => {
        setOpen(true);
    };

    const onClickLoginEvent = async (e) => {
        e.preventDefault();

        openBackdrop();

        await loginAction(dispatch, emailUsername, password);

        if (auth.token && auth.status === 'authenticated') {
            await getProfileDetailsAction(dispatch, auth.token);
            if (profileDetails.status === 'success' && profileDetails.user) {
                const returnUrl = location.state?.from?.pathname || '/';
                navigate(returnUrl, { replace: true });
            }
        }
        closeBackdrop();
    }

    useEffect(() => {

        const returnUrl = router.query.returnUrl || '/';

        if (auth.token && profileDetails.status === 'success' && profileDetails.user) {
            router.replace(returnUrl);
        }

        if (auth.status === 'authenticating' || profileDetails.status === 'loading') {
            openBackdrop();
        }
        else {
            closeBackdrop();
        }

        if (auth.status === 'error') {
            enqueueSnackbar(auth.error, { variant: 'error' });
        }

        if (profileDetails.status === 'error') {
            enqueueSnackbar(profileDetails.error, { variant: 'error' });
        }

        return () => { }

    }, [
        auth.token, router, auth.status, profileDetails.status,
        profileDetails.user, enqueueSnackbar, auth.error,
        profileDetails.error
    ]);


    return (
        <ExpandedBox>
            <Head>
                <title>Login - NixLab Technologies</title>
            </Head>

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>

            <ResponsiveFormBox onSubmit={(e) => onClickLoginEvent(e)}>
                <p style={{
                    fontSize: "2rem",
                    fontWeight: 700,
                    textTransform: "capitalize",
                    marginBottom: "2rem",
                    color: colors.primary[100]
                }}
                >
                    Welcome, Login to continue
                </p>

                <InputBox>
                    <input
                        type="text"
                        placeholder="Email or Username"
                        name="emailUsername"
                        required
                        disabled={
                            auth.status === 'authenticating'
                            ||
                            profileDetails.status === 'loading'
                        }
                        value={emailUsername}
                        onChange={(e) => setEmailUsername(e.target.value)}
                    />
                </InputBox>

                <InputBox>
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        name="password"
                        required
                        disabled={
                            auth.status === 'authenticating'
                            ||
                            profileDetails.status === 'loading'
                        }
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="password_toggle_btn">
                        {
                            showPassword ?
                                <VisibilityIcon
                                    onClick={() => setShowPassword(false)}
                                />
                                :
                                <VisibilityOffIcon
                                    onClick={() => setShowPassword(true)}
                                />
                        }
                    </div>
                </InputBox>

                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-start"
                    m="2rem 0"
                >
                    <Link href="/password/forgot">
                        <div className="app__text_btn">Forgot Password?</div>
                    </Link>
                </Box>

                <Box m="1.5rem 0">
                    <input
                        type="submit"
                        value="Login"
                        disabled={
                            auth.status === 'authenticating'
                            ||
                            profileDetails.status === 'loading'
                        }
                        className="app__filled_btn app__form_control"
                    />
                </Box>

                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <span
                        style={{
                            fontSize: '1rem',
                            marginRight: '0.5rem',
                            color: colors.primary[100]
                        }}
                    >
                        Don&apos;t have an account?
                    </span>
                    <Link href="/register">
                        <div className="app__text_btn">Sign up</div>
                    </Link>
                </Box>
            </ResponsiveFormBox>
        </ExpandedBox>
    )
}

export default AppWrap(Login);