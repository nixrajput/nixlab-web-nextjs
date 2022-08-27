import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    user: {},
    token: '',
    status: 'idle',
};


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userLoading(state, action) {
            if (state.status === 'idle') {
                state.status = 'pending';
            }
        },
        userLoaded: (state, action) => {
            if (state.status === 'pending') {
                state.status = 'loaded';
                state.user = action.payload;
            }
        },
        userAuthenticated: (state, action) => {
            if (state.status === 'pending') {
                state.status = 'idle';
                state.isAuthenticated = true;
                state.token = action.payload;
            }
        }
    }
});

export const { userLoading, userLoaded, userAuthenticated } = authSlice.actions;
export default authSlice;