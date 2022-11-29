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
    sendOtpToEmailAction,
    clearOtpErrorAction,
} from '../../redux/actions';

const SendOtp = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const otpState = useSelector((state) => state.otp);
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

        const sendOtpPromise = sendOtpToEmailAction(dispatch, email.trim());
        await sendOtpPromise;
    }

    useEffect(() => {
        if (otpState.status === 'sendingOtp') {
            openBackdrop();
        }
        else {
            closeBackdrop();
        }

        if (otpState.status === 'sentOtp') {
            enqueueSnackbar('OTP sent successfully', { variant: 'success' });
            const returnUrl = router.query.returnUrl;
            if (returnUrl) {
                router.push({
                    pathname: '/verify-otp',
                    query: { returnUrl: router.query.returnUrl },
                });
            } else {
                router.push('/verify-otp');
            }
        }

        if (otpState.status === 'error') {
            enqueueSnackbar(otpState.error, { variant: 'error' });
            clearOtpErrorAction(dispatch);
        }

        return () => { }

    }, [
        otpState.status, enqueueSnackbar, otpState.error,
        dispatch, router
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
                <title>Send OTP</title>
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
                    Send OTP
                </p>

                <p style={{
                    fontSize: "0.95rem",
                    marginBottom: "1rem",
                    color: colors.primary[200]
                }}>
                    Enter your email address to receive OTP
                </p>

                <InputBox>
                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        required
                        disabled={otpState.status === 'sendingOtp'}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </InputBox>

                <Box m="2.5rem 0" mb="1.5rem">
                    <input
                        type="submit"
                        value="send otp"
                        disabled={otpState.status === 'sendingOtp'}
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
                    <Link href="/verify-otp">
                        <div className="app__text_btn">Verify OTP</div>
                    </Link>
                </Box>
            </ResponsiveFormBox>

        </ExpandedBox>
    )
}

export default AppWrap(SendOtp);