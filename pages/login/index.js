import Head from "next/head";
import AppWrap from "../../components/app-wrap";
import { useSelector, useDispatch } from "react-redux";
import { client } from "../../api/client";
import Link from "next/link";
import { useState, useEffect } from 'react';
import {
    authenticating, authenticated,
    loadUser, loadingUser, unauthenticated,
    setError
} from '../../redux/slices/authSlice';
import { useRouter } from "next/router";

const Login = () => {

    const auth = useSelector((state) => state.auth);
    const router = useRouter();
    const dispatch = useDispatch();

    const [emailUsername, setEmailUsername] = useState("");
    const [password, setPassword] = useState("");

    const onClickLoginEvent = (e) => async (dispatch) => {
        e.preventDefault();
        const body = {
            "emailUname": emailUsername.trimEnd(),
            "password": password,
        };

        dispatch(authenticating());
        try {
            const response = await client.post('/login', body);
            if (response.status === 200) {
                const payload = {
                    token: response.token,
                    expiresAt: response.expiresAt,
                }
                dispatch(authenticated(payload));
                if (auth.token) {
                    dispatch(loadingUser());
                    const headers = { 'Authorization': `Bearer ${auth.token}` };
                    try {
                        const response = await client.get('/me', { headers });
                        if (response.status === 200) {
                            dispatch(loadUser(response.user));
                            const returnUrl = router.query.returnUrl || '/';
                            router.replace(returnUrl);
                        }
                        else {
                            console.log(response.message);
                            dispatch(setError(response.message));
                        }
                    } catch (error) {
                        dispatch(setError(error));
                    }
                }
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
                <title>Login - NixLab Technologies</title>
            </Head>

            {
                auth.status === 'error' &&
                <div className="app__error_box">
                    <p>{auth.error}</p>
                </div>
            }

            {
                (auth.status === "authenticating" || auth.status === "loadingUser") ?
                    <div className="app__box__form_container">
                        <div className="app__loading_text">
                            Please wait...
                        </div>
                    </div>
                    :
                    <form className="app__box__form_container"
                        onSubmit={(e) => dispatch(onClickLoginEvent(e))}>

                        <p className="title">Login to account</p>

                        <div className="app__form_control">
                            <input
                                type="text"
                                placeholder="Email or Username"
                                name="emailUsername"
                                required
                                disabled={auth.status === 'pending'}
                                value={emailUsername}
                                onChange={(e) => setEmailUsername(e.target.value)}
                            />
                        </div>

                        <div className="app__form_control">
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                required
                                disabled={auth.status === 'pending'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div style={{
                            width: '100%',
                            margin: '1rem 0',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start'
                        }}>
                            <Link href="/password/forgot">
                                <div className="app__text_btn">Forgot Password?</div>
                            </Link>
                        </div>

                        <input
                            type="submit"
                            value="Login"
                            disabled={auth.status === 'pending'}
                            className="app__filled_btn app__form_control"
                        />

                        <div className="app__form_control">
                            <span>
                                Don&apos;t have an account?
                            </span>
                            <Link href="/register">
                                <div className="app__text_btn">Register here</div>
                            </Link>
                        </div>
                    </form>
            }

        </>
    )
}

export default AppWrap(Login, 'login');