import apiClient from '../../api/apiClient';
import {
    sendingOtp, sentOtp, verifyingOtp,
    verifiedOtp, setError, clearError,
} from '../slices/otpSlice';
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
        const response = await apiClient.post(ApiUrls.sendOtpToEmailEndpoint, body);
        if (response.status === 200) {
            dispatch(sentOtp(email));
        }
        else {
            dispatch(setError(response.message));
        }
    }
    catch (error) {
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
            dispatch(setError(response.message));
        }
    }
    catch (error) {
        dispatch(setError(error));
    }
}

export const clearOtpErrorAction = async (dispatch) => {
    if (!dispatch) {
        console.log("dispatch is null");
        return;
    }

    dispatch(clearError());
}