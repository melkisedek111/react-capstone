import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import APP_CONSTANTS from "../../utils/constants/App.constants.js";

export const apartmentApi = createApi({
	reducerPath: "apartmentApi",
	baseQuery: fetchBaseQuery({
		baseUrl: APP_CONSTANTS.URL,
	}),
	tagTypes: ["Post"],
	endpoints: (builder) => ({
		addNewApartment: builder.mutation({
			query: (payload) => ({
				url: "Apartment/AddNewApartment",
				method: "POST",
				body: payload,
				headers: {
					"Content-type": "application/json",
				},
			}),
			invalidatesTags: ["Post"],
		}),
        getApartments: builder.query({
			query: () => ({
				url: "Apartment/GetApartments",
				method: "GET"
			}),
			invalidatesTags: ["Post"],
			async onQueryStarted(id, { dispatch, queryFulfilled }) {
				try {
				} catch (err) {
					console.log(err)
				}
			},
		}),
        getPostApartments: builder.mutation({
			query: () => ({
				url: "Apartment/GetApartments",
				method: "GET"
			}),
			invalidatesTags: ["Post"],
			async onQueryStarted(id, { dispatch, queryFulfilled }) {
				try {
				} catch (err) {
					console.log(err)
				}
			},
		}),
		getApartmentsByFields: builder.mutation({
			query: (payload) => ({
				url: "Apartment/GetApartmentsByFields",
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

export const { useAddNewApartmentMutation, useGetApartmentsQuery, useGetPostApartmentsMutation, useGetApartmentsByFieldsMutation } = apartmentApi;