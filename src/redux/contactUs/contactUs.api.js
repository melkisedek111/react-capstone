import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const messageApi = createApi({
	reducerPath: "messageApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://localhost:7131/api/",
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
	}),
});

export const { useAddNewMessageMutation } = messageApi;
