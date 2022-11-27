import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import APP_CONSTANTS from "../../utils/constants/App.constants.js";
import { rtkFetchBaseQuery } from "../utils/rtk.utils.js";

export const joinerApi = createApi({
	reducerPath: "joinerApi",
	baseQuery: rtkFetchBaseQuery(),
	tagTypes: ["Post"],
	endpoints: (builder) => ({
		addNewJoiner: builder.mutation({
			query: (payload) => ({
				url: "Joiner/AddNewJoiner",
				method: "POST",
				body: payload
			}),
			invalidatesTags: ["Post"],
		}),
	}),
});

export const { useAddNewJoinerMutation } = joinerApi;
