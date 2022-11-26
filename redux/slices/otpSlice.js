import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: 'idle',
    email: null,
    error: null,
};

const otpSlice = createSlice({
    name: "otp",
    initialState,
    reducers: {
        sendingOtp: (state, action) => {
            state.status = 'sendingOtp';
        },

        sentOtp: (state, action) => {
            state.email = action.payload;
            state.status = 'sentOtp';
        },

        verifyingOtp: (state, action) => {
            state.status = 'verifyingOtp';
        },

        verifiedOtp: (state, action) => {
            state.email = null;
            state.status = 'verifiedOtp';
        },

        setError: (state, action) => {
            state.error = action.payload;
            state.status = 'error';
        },

        clearError: (state, action) => {
            state.error = null;
        },
    }
});

export const {
    sendingOtp,
    sentOtp,
    verifyingOtp,
    verifiedOtp,
    setError,
    clearError,
} = otpSlice.actions;

export default otpSlice;