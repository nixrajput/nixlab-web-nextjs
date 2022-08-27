import Head from "next/head";
import AppWrap from "../../components/app-wrap";
import { useSelector, useDispatch } from "react-redux";
import { client } from "../../api/client";
import Link from "next/link";
import { useState, useEffect } from 'react';
import { authenticating, authenticated, setUser } from '../../redux/slices/authSlice';
import { useRouter } from "next/router";

const Login = () => {

    const auth = useSelector((state) => state.auth);
    const router = useRouter();
    const dispatch = useDispatch();

    const [emailUsername, setEmailUsername] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = (e) => async (dispatch) => {
        e.preventDefault();
        const body = {
            "emailUname": emailUsername.trimEnd(),
            "password": password,
        };

        dispatch(authenticating());
        let response = await client.post('/login', body);
        const payload = {
            token: response.token,
            expiresAt: response.expiresAt,
        }
        dispatch(authenticated(payload));
        const headers = { 'Authorization': `Bearer ${auth.token}` };
        response = await client.get('/me', { headers });
        console.log(response);
        dispatch(setUser(response.user));
        const returnUrl = router.query.returnUrl || '/';
        router.replace(returnUrl);
    }

    useEffect(() => {

        const returnUrl = router.query.returnUrl || '/';

        if (auth.token) {
            router.replace(returnUrl);
        }

        return () => { }

    }, [auth.token])


    return (
        <>
            <Head>
                <title>Login - NixLab Technologies</title>
            </Head>

            <form className="app__box__form_container"
                onSubmit={(e) => dispatch(loginUser(e))}>

                <p className="title">Login to account</p>

                <div className="app__form_control">
                    <input
                        type="text"
                        placeholder="Email or Username"
                        name="emailUsername"
                        required
                        //disabled={loading}
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
                        // disabled={loading}
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
                    // disabled={loading}
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
        </>
    )
}

export default AppWrap(Login, 'login');