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
		getApartment: builder.mutation({
			query: (payload) => ({
				url: "Apartment/GetApartment",
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
		getApartmentByType: builder.mutation({
			query: () => ({
				url: "Apartment/GetApartmentsGroupByType",
				method: "POST",
				body: {},
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
		getApartmentById: builder.mutation({
			query: (payload) => ({
				url: "Apartment/GetApartmentById",
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
		getHomePageApartments: builder.mutation({
			query: (payload) => ({
				url: "Apartment/GetHomePageApartments",
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

export const { useAddNewApartmentMutation, useGetApartmentsQuery, useGetPostApartmentsMutation, useGetApartmentsByFieldsMutation, useGetApartmentMutation, useGetApartmentByTypeMutation, useGetApartmentByIdMutation, useGetHomePageApartmentsMutation } = apartmentApi;
