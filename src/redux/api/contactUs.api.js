import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import APP_CONSTANTS from "../../utils/constants/App.constants.js";
import { jwtHeader } from "../utils/rtk.utils.js";

export const messageApi = createApi({
	reducerPath: "messageApi",
	baseQuery: fetchBaseQuery({
		baseUrl: APP_CONSTANTS.URL,
	}),
	tagTypes: ["Post"],
	endpoints: (builder) => ({
		addNewMessage: builder.mutation({
			query: (payload) => ({
				url: "Message/AddNewMessage",
				method: "POST",
				body: payload,
				headers: {
					"Content-type": "application/json",
				},
			}),
			invalidatesTags: ["Post"],
		}),
		getMessages: builder.query({
			query: (payload) => ({
				url: "Message/GetMessages",
				method: "POST",
				body: payload,
				headers: {
					"Content-type": "application/json",
					...jwtHeader
				},
			}),
			invalidatesTags: ["Post"],
		}),
	}),
});

export const { useAddNewMessageMutation, useGetMessagesQuery } = messageApi;
