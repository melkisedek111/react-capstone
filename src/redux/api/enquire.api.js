import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import APP_CONSTANTS from "../../utils/constants/App.constants.js";

export const enquireApi = createApi({
	reducerPath: "enquireApi",
	baseQuery: fetchBaseQuery({
		baseUrl: APP_CONSTANTS.URL,
	}),
	tagTypes: ["Post"],
	endpoints: (builder) => ({
		addNewEnquiry: builder.mutation({
			query: (payload) => ({
				url: "Enquiry/AddNewEnquiry",
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

export const { useAddNewEnquiryMutation } = enquireApi;
