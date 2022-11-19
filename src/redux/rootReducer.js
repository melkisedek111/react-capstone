import { combineReducers } from "redux";
import userReducer from "./user/user.reducer.js";
import { joinerApi  } from "./api/joiner.api.js";
import { messageApi } from "./api/contactUs.api.js";
import { apartmentApi } from "./api/apartment.api.js";
import { inquireApi } from "./api/inquire.api.js";
import { userApi } from "./api/user.api.js";
import errorSlice from "./global/error.slice.js";

export default combineReducers({
    [joinerApi.reducerPath]: joinerApi.reducer,
    [messageApi.reducerPath]: messageApi.reducer,
    [apartmentApi.reducerPath]: apartmentApi.reducer,
    [inquireApi.reducerPath]: inquireApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    error: errorSlice,
    user: userReducer
});