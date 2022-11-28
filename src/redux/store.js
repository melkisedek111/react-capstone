import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import { apartmentApi } from "./api/apartment.api.js";
import { inquireApi } from "./api/inquire.api.js";
import { userApi } from "./api/user.api.js";
import { messageApi } from "./api/contactUs.api.js";
import { joinerApi } from "./api/joiner.api.js";
import RootReducer from "./rootReducer.js";
import {
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";

const logger = createLogger();

const middlewares = [
	logger,
	joinerApi.middleware,
	messageApi.middleware,
	apartmentApi.middleware,
	inquireApi.middleware,
	userApi.middleware,
];

// if (process.env.NODE_ENV === "development") {
//     middlewares.push(logger);
// }

export const store = configureStore({
	reducer: RootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(middlewares),
});

export const persistor = persistStore(store);
