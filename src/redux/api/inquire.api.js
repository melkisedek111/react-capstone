import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import APP_CONSTANTS from "../../utils/constants/App.constants.js";
import { jwtHeader } from "../utils/rtk.utils.js";

export const inquireApi = createApi({
	reducerPath: "inquireApi",
	baseQuery: fetchBaseQuery({
		baseUrl: APP_CONSTANTS.URL,
	}),
	tagTypes: ["Post"],
	endpoints: (builder) => ({
		addNewInquiry: builder.mutation({
			query: (payload) => ({
				url: "Inquiry/AddNewInquiry",
				method: "POST",
				body: payload,
				headers: {
					"Content-type": "application/json",
					...jwtHeader
				},
			}),
			invalidatesTags: ["Post"],
		}),
		getInquiries: builder.query({
			query: (payload) => ({
				url: "Inquiry/GetInquiries",
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

export const { useAddNewInquiryMutation, useGetInquiriesQuery } = inquireApi;
