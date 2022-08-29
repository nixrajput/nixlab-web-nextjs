import Head from "next/head";
import AppWrap from "../../../components/app-wrap";
import { useSelector, useDispatch } from "react-redux";
import { client } from "../../../api/client";
import Link from "next/link";
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import {
    sendingEmail, success, setError
} from "../../../redux/slices/authSlice";

const ForgotPassword = () => {

    const auth = useSelector((state) => state.auth);
    const router = useRouter();
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");

    const onClickBtnEvent = (e) => async (dispatch) => {
        e.preventDefault();
        const body = {
            "email": email.trim(),
        };

        dispatch(sendingEmail());
        try {
            const response = await client.post('/forgot-password', body);
            if (response.status === 200) {
                dispatch(success());
                router.replace('/password/reset');
            }
            else {
                dispatch(setError(response.message));
            }
        }
        catch (error) {
            dispatch(setError(error));
        }
    }

    useEffect(() => {

        const returnUrl = router.query.returnUrl || '/';

        if (auth.token) {
            router.replace(returnUrl);
        }

        return () => { }

    }, [auth.token, router]);


    return (
        <>
            <Head>
                <title>Forgot Password - NixLab Technologies</title>
            </Head>

            {
                auth.status === 'error' &&
                <div className="app__error_box">
                    <p>{auth.error}</p>
                </div>
            }

            {
                auth.status === "sending" ?
                    <div className="app__box__form_container">
                        <div className="app__loading_text">
                            Please wait...
                        </div>
                    </div>
                    :
                    <form className="app__box__form_container"
                        onSubmit={(e) => dispatch(onClickBtnEvent(e))}>

                        <p className="title">Forgot your password?</p>

                        <p style={{
                            marginBottom: "0.5rem",
                            fontSize: "0.95rem",
                        }}>
                            Enter your email address and an OTP will be sent to your
                            email address if account exists
                        </p>

                        <div className="app__form_control">
                            <input
                                type="text"
                                placeholder="Email"
                                name="email"
                                required
                                disabled={auth.status === 'sending'}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div style={{
                            width: '100%',
                            marginTop: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start'
                        }}>
                            <Link href="/login">
                                <div className="app__text_btn">Login to account</div>
                            </Link>
                        </div>

                        <div style={{
                            width: '100%',
                            marginTop: '2rem',
                        }}>
                            <input
                                type="submit"
                                value="send otp"
                                disabled={auth.status === 'sending'}
                                className="app__filled_btn app__form_control"
                            />
                        </div>

                        <div className="app__form_control">
                            <span>
                                Already have an OTP?
                            </span>
                            <Link href="/password/reset">
                                <div className="app__text_btn">Reset Password</div>
                            </Link>
                        </div>
                    </form>
            }

        </>
    )
}

export default AppWrap(ForgotPassword, 'forgotPassword');