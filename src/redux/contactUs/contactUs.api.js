import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import APP_CONSTANTS from "../../utils/constants/App.constants.js";

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
			async onQueryStarted(id, { dispatch, queryFulfilled }) {
				try {
				} catch (err) {
					console.log(err)
				}
			},
		}),
	}),
});

export const { useAddNewMessageMutation } = messageApi;
