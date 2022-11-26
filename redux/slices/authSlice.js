import { createSlice } from "@reduxjs/toolkit";
import storage from '../../utils/storage';

const initialState = {
    status: 'idle',
    token: null,
    expiresAt: null,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        authenticating: (state, action) => {
            state.status = 'authenticating';
        },

        authenticated: (state, action) => {
            state.token = action.payload.token;
            state.expiresAt = action.payload.expiresAt;
            storage.set('auth', action.payload);
            state.status = 'authenticated';
        },

        unauthenticated: (state, action) => {
            state.token = null;
            state.expiresAt = null;
            state.error = null;
            storage.remove('auth');
            state.status = 'unauthenticated';
        },

        setError: (state, action) => {
            state.error = action.payload;
            state.status = 'error';
        },

        logout: (state, action) => {
            state.token = null;
            state.expiresAt = null;
            state.error = null;
            storage.remove('auth');
            storage.remove('user');
            state.status = 'idle';
        },

        registering: (state, action) => {
            state.status = 'registering';
        },

        registered: (state, action) => {
            state.status = 'registered';
        },

        sendingOtp: (state, action) => {
            state.status = 'sendingOtp';
        },

        sentOtp: (state, action) => {
            state.status = 'sentOtp';
        },

        resettingPassword: (state, action) => {
            state.status = 'resettingPassword';
        },

        resetPassword: (state, action) => {
            state.status = 'resetPassword';
        },

        clearError: (state, action) => {
            state.error = null;
        },
    }
});

export const {
    authenticating,
    authenticated,
    unauthenticated,
    logout,
    setError,
    registering,
    registered,
    sendingOtp,
    sentOtp,
    resettingPassword,
    resetPassword,
    clearError,
} = authSlice.actions;

export default authSlice;