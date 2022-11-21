import { Troubleshoot } from "@mui/icons-material";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import APP_CONSTANTS from "../../utils/constants/App.constants";

export const rtkFetchBaseQuery = (isPublic = true) => {
    return fetchBaseQuery({
        baseUrl: APP_CONSTANTS.URL,
        prepareHeaders: (headers, { getState }) => {
            return headers;
        },
    })
};

export const getToken = () => {
    if(localStorage.getItem("CAPSTONE_JWT_TOKEN")){
        return localStorage.getItem("CAPSTONE_JWT_TOKEN");
    }
    return undefined;
}

export const jwtHeader = {
    "Authorization": `Bearer ${getToken()}`
}