import Head from "next/head";
import AppWrap from "../../components/app-wrap";
import { useSelector, useDispatch } from "react-redux";
import { client } from "../../api/client";
import Link from "next/link";
import { useState, useEffect } from 'react';
import {
    registering, registered, setError
} from '../../redux/slices/authSlice';
import { useRouter } from "next/router";

const Register = () => {

    const auth = useSelector((state) => state.auth);
    const router = useRouter();
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [uname, setUname] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

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

        dispatch(registering());
        try {
            const response = await client.post('/register', body);
            if (response.status === 201) {
                dispatch(registered());
                const returnUrl = router.query.returnUrl || '/login';
                router.replace(returnUrl);
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
                <title>Sign Up - NixLab Technologies</title>
            </Head>

            {
                auth.status === 'error' &&
                <div className="app__error_box">
                    <p>{auth.error}</p>
                </div>
            }

            {
                auth.status === "registering" ?
                    <div className="app__box__form_container">
                        <div className="app__loading_text">
                            Please wait...
                        </div>
                    </div>
                    :
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
                                type="password"
                                placeholder="Password"
                                name="password"
                                required
                                disabled={auth.status === 'registering'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="app__form_control">
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                name="confirmPassword"
                                required
                                disabled={auth.status === 'registering'}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
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
            }

        </>
    )
}

export default AppWrap(Register, 'register');