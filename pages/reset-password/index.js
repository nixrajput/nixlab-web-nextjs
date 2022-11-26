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
    resetPasswordAction,
    clearAuthErrorAction,
} from '../../redux/actions';

const ResetPassword = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const auth = useSelector((state) => state.auth);
    const profileDetails = useSelector((state) => state.profileDetails);
    const dispatch = useDispatch();
    const router = useRouter();

    const [open, setOpen] = useState(false);
    const [otp, setOtp] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

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

        await resetPasswordAction(dispatch, otp.trim(), password.trim(), confirmPassword.trim());

        if (auth.status === 'resetPassword') {
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

        if (auth.status === 'authenticating' || auth.status === 'resettingPassword') {
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
                    Reset your password
                </p>

                <p style={{
                    fontSize: "0.95rem",
                    marginBottom: "1rem",
                    color: colors.primary[200]
                }}>
                    Enter the OTP sent to your email and set a new password.
                </p>

                <InputBox>
                    <input
                        type="text"
                        placeholder="OTP"
                        name="otp"
                        required
                        disabled={auth.status === 'resettingPassword'}
                        value={otp}
                        maxLength={6}
                        onChange={(e) => setOtp(e.target.value)}
                    />
                </InputBox>

                <InputBox>
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="New Password"
                        name="newPassword"
                        required
                        disabled={auth.status === 'resettingPassword'}
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
                        disabled={auth.status === 'resettingPassword'}
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
                        value="reset password"
                        disabled={auth.status === 'resettingPassword'}
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
                    <Link href="/forgot-password">
                        <div className="app__text_btn">Get OTP</div>
                    </Link>
                </Box>
            </ResponsiveFormBox>
        </ExpandedBox>
    )
}

export default AppWrap(ResetPassword);