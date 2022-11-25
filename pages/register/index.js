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
import {
    loginAction,
    getProfileDetailsAction,
} from '../../redux/actions';

const Register = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const auth = useSelector((state) => state.auth);
    const profileDetails = useSelector((state) => state.profileDetails);
    const dispatch = useDispatch();
    const router = useRouter();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [uname, setUname] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [open, setOpen] = useState(false);

    const { enqueueSnackbar } = useSnackbar();

    const closeBackdrop = () => {
        setOpen(false);
    };

    const openBackdrop = () => {
        setOpen(true);
    };

    const onClickSignupEvent = (e) => async (dispatch) => {
        e.preventDefault();
        const body = {
            "fname": firstName.trimEnd(),
            "lname": lastName.trimEnd(),
            "email": email.trim(),
            "uname": uname.trim(),
            "password": password.trim(),
            "confirmPassword": confirmPassword.trim(),
        };

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
        <>
            <Head>
                <title>Sign Up - NixLab Technologies</title>
            </Head>

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>

            <form className="app__box__form_container"
                onSubmit={(e) => dispatch(onClickSignupEvent(e))}>

                <p className="title">Hello! Sign Up to get started</p>

                <div style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}>
                    <div className="app__form_control">
                        <input
                            type="text"
                            placeholder="First Name"
                            name="fname"
                            required
                            disabled={auth.status === 'registering'}
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>

                    <div style={{
                        width: "2rem",
                    }} />

                    <div className="app__form_control">
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="lname"
                            required
                            disabled={auth.status === 'registering'}
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                </div>

                <div className="app__form_control">
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        required
                        disabled={auth.status === 'registering'}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="app__form_control">
                    <input
                        type="text"
                        placeholder="Username"
                        name="uname"
                        required
                        disabled={auth.status === 'registering'}
                        value={uname}
                        onChange={(e) => setUname(e.target.value)}
                    />
                </div>

                <div className="app__form_control">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        name="password"
                        required
                        disabled={auth.status === 'registering'}
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
                </div>

                <div className="app__form_control">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        required
                        disabled={auth.status === 'registering'}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
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
                </div>

                <div style={{
                    width: '100%',
                    marginTop: '2rem',
                }}>
                    <input
                        type="submit"
                        value="Sign Up"
                        disabled={auth.status === 'registering'}
                        className="app__filled_btn app__form_control"
                    />
                </div>

                <div className="app__form_control">
                    <span>
                        Already have an account?
                    </span>
                    <Link href="/login">
                        <div className="app__text_btn">Login</div>
                    </Link>
                </div>
            </form>

        </>
    )
}

export default AppWrap(Register, 'register');