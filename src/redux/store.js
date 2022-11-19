import { configureStore } from '@reduxjs/toolkit'
import {createLogger} from "redux-logger";
import { apartmentApi } from './api/apartment.api.js';
import { inquireApi } from './api/inquire.api.js';
import { userApi } from './api/user.api.js';
import { messageApi } from './api/contactUs.api.js';
import { joinerApi } from './api/joiner.api.js';
import RootReducer from "./rootReducer.js";

const logger  = createLogger();

export const store = configureStore({
    reducer: RootReducer, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger, joinerApi.middleware, messageApi.middleware, apartmentApi.middleware, inquireApi.middleware, userApi.middleware]),
});

// export const persistor = persistStore(store);



