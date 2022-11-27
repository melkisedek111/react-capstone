import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import APP_CONSTANTS from "../../utils/constants/App.constants.js";
import { jwtHeader, rtkFetchBaseQuery } from "../utils/rtk.utils.js";

export const inquireApi = createApi({
	reducerPath: "inquireApi",
	baseQuery: rtkFetchBaseQuery(),
	tagTypes: ["Post"],
	endpoints: (builder) => ({
		addNewInquiry: builder.mutation({
			query: (payload) => ({
				url: "Inquiry/AddNewInquiry",
				method: "POST",
				body: payload,
			}),
			invalidatesTags: ["Post"],
		}),
		getInquiries: builder.query({
			query: (payload) => ({
				url: "Inquiry/GetInquiries",
				method: "POST",
				body: payload,
			}),
			invalidatesTags: ["Post"],
		}),
	}),
});

export const { useAddNewInquiryMutation, useGetInquiriesQuery } = inquireApi;
