import authSlice from "./slices/authSlice";
import profileDetailsSlice from "./slices/profileDetailsSlice";

const rootReducer = {
    [authSlice.name]: authSlice.reducer,
    [profileDetailsSlice.name]: profileDetailsSlice.reducer,
};

export default rootReducer;