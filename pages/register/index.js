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
    sendOtpToEmailAction,
    verifyOtpFromEmailAction,
    registerUserAction,
    clearregisterErrorAction,
} from '../../redux/actions/registerAction';

const Register = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const auth = useSelector((state) => state.auth);
    const register = useSelector((state) => state.register);
    const profileDetails = useSelector((state) => state.profileDetails);

    const dispatch = useDispatch();
    const router = useRouter();

    const [otp, setOtp] = useState("");

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [uname, setUname] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [open, setOpen] = useState(false);
    const [isValidated, setIsValidated] = useState(false);

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
        details.isValidated = register.isValidated;

        await registerUserAction(dispatch, details);
    }

    const onClickSendOtpEvent = async (e) => {
        e.preventDefault();

        const sendOtpPromise = sendOtpToEmailAction(dispatch, email.trim());
        await sendOtpPromise;
    }

    const onClickVerifyOtpEvent = async (e) => {
        e.preventDefault();

        const veryOtpPromise = verifyOtpFromEmailAction(dispatch, otp.trim(), email.trim());
        await veryOtpPromise;
    }

    useEffect(() => {
        if (register.status === 'registered') {
            enqueueSnackbar('Registration successful. Please login to continue.', { variant: 'success' });
            const returnUrl = location.state?.from?.pathname || '/login';
            router.replace(returnUrl);
        }

        if (register.status === 'sentOtp') {
            enqueueSnackbar('OTP sent to your email.', { variant: 'success' });
        }

        if (register.status === 'verifiedOtp' && register.isValidated === true) {
            enqueueSnackbar('OTP verified successfully.', { variant: 'success' });
            setIsValidated(true);
        }

        if (auth.status === 'authenticated' && auth.token &&
            profileDetails.status === 'success' && profileDetails.user) {
            const returnUrl = router.query.returnUrl || '/';
            router.replace(returnUrl);
        }

        if (register.status === 'registering' || register.status === 'sendingOtp' || register.status === 'verifyingOtp') {
            openBackdrop();
        }
        else {
            closeBackdrop();
        }

        if (register.error) {
            enqueueSnackbar(register.error, { variant: 'error' });
            clearregisterErrorAction(dispatch);
        }

        return () => { }

    }, [
        auth.token, router, register.status, profileDetails.status,
        profileDetails.user, enqueueSnackbar, register.error,
        dispatch, auth.status, register.isValidated
    ]);


    return (
        <ExpandedBox
            justifyContent={{
                xs: "flex-start",
                sm: "center",
                md: "center",
                lg: "center",
                xl: "center",
            }}
        >
            <Head>
                <title>Register</title>
            </Head>

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>

            <ResponsiveFormBox onSubmit={(e) => {
                if (isValidated === true) {
                    onClickRegisterEvent(e);
                }
                else if (register.status === 'sentOtp' || register.status === 'verifyingOtpFailed') {
                    onClickVerifyOtpEvent(e);
                }
                else {
                    onClickSendOtpEvent(e);
                }
            }}>
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

                {
                    isValidated === false ?
                        <p style={{
                            fontSize: "0.95rem",
                            marginBottom: "0.5rem",
                            color: colors.primary[200]
                        }}>
                            {
                                (register.status === 'sentOtp' || register.status === 'verifyingOtpFailed') ?
                                    `Please enter the OTP sent to ${email}` :
                                    'Please enter your email address to get started'
                            }
                        </p>
                        :
                        <p style={{
                            fontSize: "0.95rem",
                            marginBottom: "0.5rem",
                            color: colors.primary[200]
                        }}>
                            Please enter your details to get started
                        </p>
                }

                {
                    (register.status === 'sentOtp' || register.status === 'verifyingOtpFailed') ?
                        null :
                        <InputBox>
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                required
                                disabled={isValidated || register.status === 'registering'}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </InputBox>
                }

                {
                    (register.status === 'sentOtp' || register.status === 'verifyingOtpFailed') ?
                        <InputBox>
                            <input
                                type="text"
                                placeholder="OTP"
                                name="otp"
                                required
                                disabled={register.status === 'verifyingOtp'}
                                value={otp}
                                maxLength={6}
                                onChange={(e) => setOtp(e.target.value)}
                            />
                        </InputBox>
                        : null
                }

                {
                    isValidated ?
                        <Box
                            width="100%"
                            display="flex"
                            flexDirection="column"
                            justifyContent="flex-start"
                            alignItems="center"
                            height="fit-content"
                        >
                            <Box
                                width="100%"
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                m="0"
                                p="0"
                                height="fit-content"
                            >
                                <InputBox m="0">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        name="fname"
                                        required
                                        disabled={register.status === 'registering'}
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
                                        disabled={register.status === 'registering'}
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </InputBox>
                            </Box>

                            <InputBox>
                                <input
                                    type="text"
                                    placeholder="Username"
                                    name="uname"
                                    required
                                    disabled={register.status === 'registering'}
                                    value={uname}
                                    onChange={(e) => setUname(e.target.value)}
                                />
                            </InputBox>

                            <InputBox m="0">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    name="password"
                                    required
                                    disabled={register.status === 'registering'}
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
                                    disabled={register.status === 'registering'}
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
                        </Box>
                        :
                        null
                }

                <Box m="2.5rem 0" mb="1.5rem">
                    <input
                        type="submit"
                        value={
                            isValidated === true ?
                                "Register" :
                                (register.status === 'sentOtp' ||
                                    register.status === 'verifyingOtpFailed') ?
                                    "Verify OTP" : "Send OTP"
                        }
                        disabled={
                            auth.status === 'registering' ||
                            register.status === 'verifyingOtp' ||
                            register.status === 'sendingOtp'
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