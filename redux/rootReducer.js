import authSlice from "./slices/authSlice";
import profileDetailsSlice from "./slices/profileDetailsSlice";
import otpSlice from "./slices/otpSlice";
import registerSlice from "./slices/registerSlice";

const rootReducer = {
    [authSlice.name]: authSlice.reducer,
    [profileDetailsSlice.name]: profileDetailsSlice.reducer,
    [otpSlice.name]: otpSlice.reducer,
    [registerSlice.name]: registerSlice.reducer,
};

export default rootReducer;