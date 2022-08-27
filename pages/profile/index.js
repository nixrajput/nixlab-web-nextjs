import React from 'react';
import AppWrap from '../../components/wrapper';
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { removeUser, authenticating } from "../../redux/slices/authSlice";

const Profile = () => {

    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const router = useRouter();

    const logoutUser = () => {
        dispatch(authenticating());

        dispatch(removeUser());
        const returnUrl = '/';
        router.replace(returnUrl);
    }

    return (
        <div>
            <button className="app__text_btn"
                onClick={logoutUser}>
                Logout
            </button>
        </div>
    )
}

export default AppWrap(Profile, 'profile');