import { combineReducers } from "redux";
import userReducer from "./user/user.reducer.js";
import { joinerApi  } from "./joiner/joiner.api.js";
import { messageApi } from "./contactUs/contactUs.api.js";
import { apartmentApi } from "./apartment/apartment.api.js";
import { enquireApi } from "./api/enquire.api.js";
import { userApi } from "./api/user.api.js";

export default combineReducers({
    [joinerApi.reducerPath]: joinerApi.reducer,
    [messageApi.reducerPath]: messageApi.reducer,
    [apartmentApi.reducerPath]: apartmentApi.reducer,
    [enquireApi.reducerPath]: enquireApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    user: userReducer
});