import { Troubleshoot } from "@mui/icons-material";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import APP_CONSTANTS from "../../utils/constants/App.constants";

export const rtkFetchBaseQuery = (isPublic = true) => {
    return fetchBaseQuery({
        baseUrl: APP_CONSTANTS.URL,
        prepareHeaders: (headers, { getState }) => {
            console.log({head: getState()})
            // const token = getState().componentSlice.token;
            // if (token) {
            // 	headers.set("authorization", `Bearer ${token}`);
            // }
            console.log({headers})
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