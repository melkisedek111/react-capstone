import { Troubleshoot } from "@mui/icons-material";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import APP_CONSTANTS from "../../utils/constants/App.constants";

export const rtkFetchBaseQuery = (isPublic = true) => {
	return fetchBaseQuery({
		baseUrl: APP_CONSTANTS.URL,
		prepareHeaders: (headers, { getState }) => {
			const token = getState().user.JWTToken;
			if (token) {
				headers.set("Authorization", `Bearer ${token}`);
			}
			return headers;
		},
	});
};

export const getToken = () => {
	if (global.localStorage?.getItem("CAPSTONE_JWT_TOKEN")) {
		return global.localStorage?.getItem("CAPSTONE_JWT_TOKEN");
	}
	return undefined;
};

export const jwtHeader = {
	Authorization: `Bearer ${getToken()}`,
};
