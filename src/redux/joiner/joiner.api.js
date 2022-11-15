import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const joinerApi = createApi({
	reducerPath: "joinerApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://localhost:7131/api/",
	}),
	tagTypes: ["Post"],
	endpoints: (builder) => ({
		addNewJoiner: builder.mutation({
			query: (payload) => ({
				url: "Joiner/AddNewJoiner",
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

export const { useAddNewJoinerMutation } = joinerApi;
