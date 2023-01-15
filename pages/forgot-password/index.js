import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, useTheme } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useSnackbar } from 'notistack';
import AppWrap from "../../components/AppWrap";
import ExpandedBox from "../../components/ExpandedBox";
import ResponsiveFormBox from "../../components/ResponsiveFormBox";
import InputBox from "../../components/InputBox";
import { tokens } from '../../theme/theme';
import {
    forgotPasswordAction,
    clearAuthErrorAction,
} from '../../redux/actions';

const ForgotPassword = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const auth = useSelector((state) => state.auth);
    const profileDetails = useSelector((state) => state.profileDetails);
    const dispatch = useDispatch();
    const router = useRouter();

    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState("");

    const { enqueueSnackbar } = useSnackbar();

    const closeBackdrop = () => {
        setOpen(false);
    };

    const openBackdrop = () => {
        setOpen(true);
    };

    const onClickSendOtpEvent = async (e) => {
        e.preventDefault();

        const forgotPasswordPromise = forgotPasswordAction(dispatch, email.trim());
        await forgotPasswordPromise;
    }

    useEffect(() => {
        if (auth.status === 'sentOtp') {
            enqueueSnackbar('OTP sent successfully', { variant: 'success' });
            router.push('/reset-password');
        }

        if (auth.status === 'authenticated' && auth.token &&
            profileDetails.status === 'success' && profileDetails.user) {
            const returnUrl = router.query.returnUrl || '/';
            router.replace(returnUrl);
        }

        if (auth.status === 'authenticating' || auth.status === 'sendingOtp') {
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
        profileDetails.user, enqueueSnackbar, auth.error, dispatch
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
                <title>Forgot Password</title>
            </Head>

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>

            <ResponsiveFormBox onSubmit={(e) => onClickSendOtpEvent(e)}>
                <p
                    style={{
                        fontSize: "2rem",
                        fontWeight: 700,
                        textTransform: "capitalize",
                        marginBottom: "1rem",
                        color: colors.primary[100]
                    }}
                >
                    Forgot your password?
                </p>

                <p style={{
                    fontSize: "0.95rem",
                    marginBottom: "1rem",
                    color: colors.primary[200]
                }}>
                    {`Enter your email address and we'll send you a link to reset your password.`}
                </p>

                <InputBox>
                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        required
                        disabled={auth.status === 'sendingOtp'}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </InputBox>

                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-start"
                    m="2rem 0"
                >
                    <Link href="/login">
                        <div className="app__text_btn">Login to account</div>
                    </Link>
                </Box>

                <Box m="1.5rem 0">
                    <input
                        type="submit"
                        value="send otp"
                        disabled={auth.status === 'sendingOtp'}
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
                        Already have an OTP?
                    </span>
                    <Link href="/reset-password">
                        <div className="app__text_btn">Reset Password</div>
                    </Link>
                </Box>
            </ResponsiveFormBox>

        </ExpandedBox>
    )
}

export default AppWrap(ForgotPassword);