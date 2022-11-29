import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./rootReducer";
import logger from "../middlewares/logger";
import reducerEnhancer from "../middlewares/reducerEnhancer";

const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
        devTools: process.env.NODE_ENV !== "production",
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
        enhancers: [reducerEnhancer],
    });
}

export const wrapper = createWrapper(makeStore, { debug: true });