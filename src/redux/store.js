import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk";

// import storage from 'redux-persist/lib/storage';
// import { persistReducer, persistStore } from 'redux-persist';
import {createLogger} from "redux-logger";
import RootReducer from "./rootReducer.js";

const logger  = createLogger();
// const persistConfig = {
//     key: 'root',
//     storage,
// }
// const persistedReducer = persistReducer(persistConfig, RootReducer);

export const store = configureStore({
    reducer: RootReducer, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger, thunk]),
});

// export const persistor = persistStore(store);



