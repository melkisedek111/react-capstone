import { combineReducers } from "redux";
import userReducer from "./user/user.reducer.js";
import { joinerApi  } from "./joiner/joiner.api.js";
import { messageApi } from "./contactUs/contactUs.api.js";

export default combineReducers({
    [joinerApi.reducerPath]: joinerApi.reducer,
    [messageApi.reducerPath]: messageApi.reducer,
    user: userReducer
});