import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: 'idle',
    isValidated: false,
    error: null,
};

const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        registering: (state, action) => {
            state.status = 'registering';
        },

        registrationFailed: (state, action) => {
            state.status = 'registrationFailed';
        },

        registered: (state, action) => {
            state.status = 'registered';
        },

        sendingOtp: (state, action) => {
            state.status = 'sendingOtp';
        },

        sendingOtpFailed: (state, action) => {
            state.status = 'sendingOtpFailed';
        },

        sentOtp: (state, action) => {
            state.status = 'sentOtp';
        },

        verifyingOtp: (state, action) => {
            state.status = 'verifyingOtp';
        },

        verifyingOtpFailed: (state, action) => {
            state.status = 'verifyingOtpFailed';
        },

        verifiedOtp: (state, action) => {
            state.isValidated = true;
            state.status = 'verifiedOtp';
        },

        setError: (state, action) => {
            state.error = action.payload;
        },

        clearError: (state, action) => {
            state.error = null;
        },
    }
});

export const {
    registering,
    registrationFailed,
    registered,
    sendingOtp,
    sendingOtpFailed,
    sentOtp,
    verifyingOtp,
    verifyingOtpFailed,
    verifiedOtp,
    setError,
    clearError,
} = registerSlice.actions;

export default registerSlice;