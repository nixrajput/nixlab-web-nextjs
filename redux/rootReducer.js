import authSlice from "./slices/authSlice";
import profileDetailsSlice from "./slices/profileDetailsSlice";
import otpSlice from "./slices/otpSlice";

const rootReducer = {
    [authSlice.name]: authSlice.reducer,
    [profileDetailsSlice.name]: profileDetailsSlice.reducer,
    [otpSlice.name]: otpSlice.reducer,
};

export default rootReducer;