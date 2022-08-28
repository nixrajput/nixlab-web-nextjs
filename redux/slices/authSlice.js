import { createSlice } from "@reduxjs/toolkit";
import storage from '../../utils/storage';

const initialState = {
    token: '',
    expiresAt: '',
    status: 'idle',
    user: {},
};


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        authenticating(state, action) {
            if (state.status === 'idle') {
                state.status = 'pending';
            }
        },
        authenticated: (state, action) => {
            const data = action.payload;
            storage.set('auth', data);
            state.token = action.payload.token;
            state.expiresAt = action.payload.expiresAt;
            state.status = 'authenticated';
        },
        unauthenticated: (state, action) => {
            state.status = 'unauthenticated';
        },
        setUser: (state, action) => {
            state.status = 'userLoading';
            const user = action.payload;
            storage.set('user', user);
            state.user = user;
            state.status = 'userLoaded';
        },
        removeUser: (state, action) => {
            state.token = '';
            state.expiresAt = '';
            state.user = {};
            storage.remove('auth');
            storage.remove('user');
            state.status = 'idle';
        }
    }
});

export const {
    authenticating,
    authenticated,
    unauthenticated,
    setUser,
    removeUser
} = authSlice.actions;

export default authSlice;