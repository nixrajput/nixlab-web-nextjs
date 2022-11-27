import apiClient from '../../api/apiClient';
import {
    authenticating, authenticated, unauthenticated,
    sendingOtp, sentOtp, resettingPassword,
    resetPassword, registering, registered,
    setError, clearError, clearAuth,
} from '../slices/authSlice';
import { clearProfileDetails } from '../slices/profileDetailsSlice';
import ApiUrls from "../../constants/urls";
import storage from "../../utils/storage";

export const registerAction = async (dispatch, details) => {
    if (!dispatch) {
        console.log("dispatch is null");
        return;
    }

    if (!details) {
        dispatch(setError("details is null"));
        return;
    }

    const { fname, lname, uname, email, password, confirmPassword, isValidated } = details;

    if (!fname) {
        dispatch(setError("First name is required"));
        return;
    }

    if (!lname) {
        dispatch(setError("Last name is required"));
        return;
    }

    if (!uname) {
        dispatch(setError("Username is required"));
        return;
    }

    if (!email) {
        dispatch(setError("Email is required"));
        return;
    }

    if (!password) {
        dispatch(setError("Password is required"));
        return;
    }

    if (!confirmPassword) {
        dispatch(setError("Confirm Password is required"));
        return;
    }

    if (password !== confirmPassword) {
        dispatch(setError("Passwords do not match"));
        return;
    }

    const body = {
        "fname": fname,
        "lname": lname,
        "email": email,
        "uname": uname,
        "password": password,
        "confirmPassword": confirmPassword,
        "isValidated": `${isValidated}`,
    };

    dispatch(registering());

    try {
        const response = await apiClient.post(ApiUrls.registerEndpoint, body);
        if (response.status === 201) {
            dispatch(registered());
        }
        else {
            dispatch(setError(response.message));
        }
    }
    catch (error) {
        dispatch(setError(error));
    }
}

export const loginAction = async (dispatch, emailUname, password) => {
    if (!dispatch) {
        console.log("dispatch is null");
        return;
    }

    if (!emailUname) {
        dispatch(setError("Email or Username is required"));
        return;
    }

    if (!password) {
        dispatch(setError("Password is required"));
        return;
    }

    const body = {
        "emailUname": emailUname,
        "password": password,
    };

    dispatch(authenticating());

    try {
        const response = await apiClient.post(ApiUrls.loginEndpoint, body);
        if (response.status === 200) {
            const payload = {
                token: response.token,
                expiresAt: response.expiresAt,
            }
            dispatch(authenticated(payload));
        }
        else {
            dispatch(setError(response.message));
        }
    }
    catch (error) {
        dispatch(setError(error));
    }
}

export const forgotPasswordAction = async (dispatch, email) => {
    if (!dispatch) {
        console.log("dispatch is null");
        return;
    }

    if (!email) {
        dispatch(setError("Email is required"));
        return;
    }

    const body = {
        "email": email,
    };

    dispatch(sendingOtp());

    try {
        const response = await apiClient.post(ApiUrls.forgotPasswordEndpoint, body);
        if (response.status === 200) {
            dispatch(sentOtp());
        }
        else {
            dispatch(setError(response.message));
        }
    }
    catch (error) {
        dispatch(setError(error));
    }
}

export const resetPasswordAction = async (dispatch, otp, password, confirmPassword) => {
    if (!dispatch) {
        console.log("dispatch is null");
        return;
    }

    if (!otp) {
        dispatch(setError("OTP is required"));
        return;
    }

    if (!password) {
        dispatch(setError("Password is required"));
        return;
    }

    if (!confirmPassword) {
        dispatch(setError("Confirm Password is required"));
        return;
    }

    if (password !== confirmPassword) {
        dispatch(setError("Passwords do not match"));
        return;
    }

    const body = {
        "otp": otp,
        "newPassword": password,
        "confirmPassword": confirmPassword,
    };

    dispatch(resettingPassword());

    try {
        const response = await apiClient.post(ApiUrls.resetPasswordEndpoint, body);
        if (response.status === 200) {
            dispatch(resetPassword());
        }
        else {
            dispatch(setError(response.message));
        }
    }
    catch (error) {
        dispatch(setError(error));
    }
}

export const loadAuthDetailsAction = async (dispatch) => {
    if (!dispatch) {
        console.log("dispatch is null");
        return;
    }

    dispatch(authenticating());
    const data = storage.get('auth');
    if (!data || !data.token) {
        dispatch(unauthenticated('No token found'));
    }
    else {
        dispatch(authenticated(data));
    }
}

export const logoutAction = async (dispatch) => {
    if (!dispatch) {
        console.log("dispatch is null");
        return;
    }

    dispatch(clearProfileDetails());
    dispatch(clearAuth());
}

export const clearAuthErrorAction = async (dispatch) => {
    if (!dispatch) {
        console.log("dispatch is null");
        return;
    }

    dispatch(clearError());
}