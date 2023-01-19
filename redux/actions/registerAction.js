import apiClient from '../../api/apiClient';
import {
    sendingOtp, sendingOtpFailed, sentOtp,
    verifyingOtp, verifyingOtpFailed,
    verifiedOtp, setError, clearError,
    registering, registrationFailed, registered,
} from '../slices/registerSlice';
import ApiUrls from "../../constants/urls";

export const sendOtpToEmailAction = async (dispatch, email) => {
    if (!dispatch) {
        console.log("dispatch is null");
        return;
    }

    if (!email) {
        dispatch(setError("Email is required"));
        return;
    }

    const body = {
        "email": email
    };

    dispatch(sendingOtp());

    try {
        const response = await apiClient.post(
            ApiUrls.sendVerifyEmailOtpEndpoint, body
        );
        if (response.status === 200) {
            dispatch(sentOtp(email));
        }
        else {
            dispatch(sendingOtpFailed());
            dispatch(setError(response.message));
        }
    }
    catch (error) {
        dispatch(sendingOtpFailed());
        dispatch(setError(error));
    }
}

export const verifyOtpFromEmailAction = async (dispatch, otp, email) => {
    if (!dispatch) {
        console.log("dispatch is null");
        return;
    }

    if (!otp) {
        dispatch(setError("OTP is required"));
        return;
    }

    if (!email) {
        dispatch(setError("Email is required"));
        return;
    }

    const body = {
        "otp": otp,
        "email": email
    };

    dispatch(verifyingOtp());

    try {
        const response = await apiClient.post(ApiUrls.verifyOtpFromEmailEndpoint, body);
        if (response.status === 200) {
            dispatch(verifiedOtp());
        }
        else {
            dispatch(verifyingOtpFailed());
            dispatch(setError(response.message));
        }
    }
    catch (error) {
        dispatch(verifyingOtpFailed());
        dispatch(setError(error));
    }
}

export const registerUserAction = async (dispatch, details) => {
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
            dispatch(registrationFailed());
            dispatch(setError(response.message));
        }
    }
    catch (error) {
        dispatch(registrationFailed());
        dispatch(setError(error));
    }
}

export const clearregisterErrorAction = async (dispatch) => {
    if (!dispatch) {
        console.log("dispatch is null");
        return;
    }

    dispatch(clearError());
}