import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import authSlice from "./slices/authSlice";

const makeStore = () => {
    return configureStore({
        reducer: {
            [authSlice.name]: authSlice.reducer,
        },
        devTools: process.env.NODE_ENV !== "production",
    });
}

export const wrapper = createWrapper(makeStore, { debug: true });