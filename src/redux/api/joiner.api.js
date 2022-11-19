import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import APP_CONSTANTS from "../../utils/constants/App.constants.js";

export const joinerApi = createApi({
	reducerPath: "joinerApi",
	baseQuery: fetchBaseQuery({
		baseUrl: APP_CONSTANTS.URL,
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
