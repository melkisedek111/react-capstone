import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import APP_CONSTANTS from "../../utils/constants/App.constants.js";

export const userApi = createApi({
	reducerPath: "userApi",
	baseQuery: fetchBaseQuery({
		baseUrl: APP_CONSTANTS.URL,
	}),
	tagTypes: ["Post"],
	endpoints: (builder) => ({
		registerNewUser: builder.mutation({
			query: (payload) => ({
				url: "User/RegisterNewUser",
				method: "POST",
				body: payload,
				headers: {
					"Content-type": "application/json",
				},
			}),
			invalidatesTags: ["Post"],
		}),
        getUsers: builder.query({
			query: () => ({
				url: "User/GetUsers",
                method: "POST",
				body: {},
				headers: {
					"Content-type": "application/json",
				},
			}),
			invalidatesTags: ["Post"]
		}),
        getPostUsers: builder.mutation({
			query: () => ({
				url: "User/GetUsers",
				method: "POST",
				body: {},
				headers: {
					"Content-type": "application/json",
				},
			}),
			invalidatesTags: ["Post"]
		}),
	}),
});

export const { useRegisterNewUserMutation, useGetUsersQuery, useGetPostUsersMutation } = userApi;
