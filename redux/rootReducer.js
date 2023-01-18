import authSlice from "./slices/authSlice";
import profileDetailsSlice from "./slices/profileDetailsSlice";
import otpSlice from "./slices/otpSlice";
import registerSlice from "./slices/registerSlice";
import projectsSlice from "./slices/projectSlice";
import projectDetailsSlice from "./slices/projectDetailsSlice";

const rootReducer = {
    [authSlice.name]: authSlice.reducer,
    [profileDetailsSlice.name]: profileDetailsSlice.reducer,
    [otpSlice.name]: otpSlice.reducer,
    [registerSlice.name]: registerSlice.reducer,
    [projectsSlice.name]: projectsSlice.reducer,
    [projectDetailsSlice.name]: projectDetailsSlice.reducer,
};

export default rootReducer;