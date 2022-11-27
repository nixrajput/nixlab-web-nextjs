import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, useTheme } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useSnackbar } from 'notistack';
import AppWrap from "../../components/AppWrap";
import ExpandedBox from "../../components/ExpandedBox";
import ResponsiveFormBox from "../../components/ResponsiveFormBox";
import InputBox from "../../components/InputBox";
import { tokens } from '../../theme/theme';
import {
    registerAction,
    clearAuthErrorAction,
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

    const onClickRegisterEvent = async (e) => {
        e.preventDefault();

        const details = {};
        details.fname = firstName.trim();
        details.lname = lastName.trim();
        details.email = email.trim();
        details.uname = uname.trim();
        details.password = password.trim();
        details.confirmPassword = confirmPassword.trim();
        details.isValidated = true;

        openBackdrop();

        await registerAction(dispatch, details);

        if (auth.status === 'registered') {
            const returnUrl = location.state?.from?.pathname || '/login';
            router.replace(returnUrl);
        }
        closeBackdrop();
    }

    useEffect(() => {
        const returnUrl = router.query.returnUrl || '/';

        if (auth.status === 'authenticated' && auth.token &&
            profileDetails.status === 'success' && profileDetails.user) {
            router.replace(returnUrl);
        }

        if (auth.status === 'authenticating' || auth.status === 'registering') {
            openBackdrop();
        }
        else {
            closeBackdrop();
        }

        if (auth.status === 'error') {
            enqueueSnackbar(auth.error, { variant: 'error' });
            clearAuthErrorAction(dispatch);
        }

        return () => { }

    }, [
        auth.token, router, auth.status, profileDetails.status,
        profileDetails.user, enqueueSnackbar, auth.error,
        dispatch
    ]);


    return (
        <ExpandedBox>
            <Head>
                <title>Register</title>
            </Head>

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>

            <ResponsiveFormBox onSubmit={(e) => onClickRegisterEvent(e)}>
                <p style={{
                    fontSize: "2rem",
                    fontWeight: 700,
                    textTransform: "capitalize",
                    marginBottom: "2rem",
                    color: colors.primary[100]
                }}
                >
                    Hello! Register to get started
                </p>

                <Box
                    width="100%"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    m="1.5rem 0"
                    p="0"
                    height="fit-content"
                >
                    <InputBox m="0">
                        <input
                            type="text"
                            placeholder="First Name"
                            name="fname"
                            required
                            disabled={auth.status === 'registering'}
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </InputBox>

                    <div style={{ width: "2rem" }} />

                    <InputBox m="0">
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="lname"
                            required
                            disabled={auth.status === 'registering'}
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </InputBox>
                </Box>

                <InputBox>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        required
                        disabled={auth.status === 'registering'}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </InputBox>

                <InputBox>
                    <input
                        type="text"
                        placeholder="Username"
                        name="uname"
                        required
                        disabled={auth.status === 'registering'}
                        value={uname}
                        onChange={(e) => setUname(e.target.value)}
                    />
                </InputBox>

                <InputBox>
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
                </InputBox>

                <InputBox>
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
                </InputBox>

                <Box m="2.5rem 0" mb="1.5rem">
                    <input
                        type="submit"
                        value="Register"
                        disabled={auth.status === 'registering'}
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
                        Already have an account?
                    </span>
                    <Link href="/login">
                        <div className="app__text_btn">Login</div>
                    </Link>
                </Box>
            </ResponsiveFormBox>
        </ExpandedBox>
    )
}

export default AppWrap(Register);