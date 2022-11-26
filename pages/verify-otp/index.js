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
    verifyOtpFromEmailAction,
    clearOtpErrorAction,
} from '../../redux/actions';

const VerifyOtp = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const otpState = useSelector((state) => state.otp);
    const dispatch = useDispatch();
    const router = useRouter();

    const [open, setOpen] = useState(false);
    const [otp, setOtp] = useState("");

    const { enqueueSnackbar } = useSnackbar();

    const closeBackdrop = () => {
        setOpen(false);
    };

    const openBackdrop = () => {
        setOpen(true);
    };

    const onClickResetPasswordEvent = async (e) => {
        e.preventDefault();

        openBackdrop();

        await verifyOtpFromEmailAction(dispatch, otp.trim(), otpState.email);

        if (otpState.status === 'verifiedOtp') {
            const returnUrl = location.state?.from?.pathname || '/';
            router.replace(returnUrl);
        }
        closeBackdrop();
    }

    useEffect(() => {
        if (otpState.status === 'verifyingOtp') {
            openBackdrop();
        }
        else {
            closeBackdrop();
        }

        if (otpState.status === 'error') {
            enqueueSnackbar(otpState.error, { variant: 'error' });
            clearOtpErrorAction(dispatch);
        }

        return () => { }

    }, [
        otpState.status, enqueueSnackbar, otpState.error,
        dispatch
    ]);


    return (
        <ExpandedBox>
            <Head>
                <title>Reset Password - NixLab Technologies</title>
            </Head>

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>

            <ResponsiveFormBox onSubmit={(e) => onClickResetPasswordEvent(e)}>
                <p
                    style={{
                        fontSize: "2rem",
                        fontWeight: 700,
                        textTransform: "capitalize",
                        marginBottom: "1rem",
                        color: colors.primary[100]
                    }}
                >
                    Verify OTP
                </p>

                <p style={{
                    fontSize: "0.95rem",
                    marginBottom: "1rem",
                    color: colors.primary[200]
                }}>
                    Please enter the OTP sent to your email.
                </p>

                <InputBox>
                    <input
                        type="text"
                        placeholder="OTP"
                        name="otp"
                        required
                        disabled={otpState.status === 'verifyingOtp'}
                        value={otp}
                        maxLength={6}
                        onChange={(e) => setOtp(e.target.value)}
                    />
                </InputBox>

                <Box m="2.5rem 0" mb="1.5rem">
                    <input
                        type="submit"
                        value="Verify OTP"
                        disabled={otpState.status === 'verifyingOtp'}
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
                        Don&apos;t have an OTP?
                    </span>
                    <Link href="/send-otp">
                        <div className="app__text_btn">Get OTP</div>
                    </Link>
                </Box>
            </ResponsiveFormBox>
        </ExpandedBox>
    )
}

export default AppWrap(VerifyOtp);