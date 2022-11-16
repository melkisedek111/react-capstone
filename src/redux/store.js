import { configureStore } from '@reduxjs/toolkit'
import {createLogger} from "redux-logger";
import { apartmentApi } from './apartment/apartment.api.js';
import { messageApi } from './contactUs/contactUs.api.js';
import { joinerApi } from './joiner/joiner.api.js';
import RootReducer from "./rootReducer.js";

const logger  = createLogger();

export const store = configureStore({
    reducer: RootReducer, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger, joinerApi.middleware, messageApi.middleware, apartmentApi.middleware]),
});

// export const persistor = persistStore(store);



