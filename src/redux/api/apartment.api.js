import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import APP_CONSTANTS from "../../utils/constants/App.constants.js";
import { jwtHeader, rtkFetchBaseQuery } from "../utils/rtk.utils.js";

export const apartmentApi = createApi({
	reducerPath: "apartmentApi",
	baseQuery: rtkFetchBaseQuery(),
	tagTypes: ["Post"],
	endpoints: (builder) => ({
		addNewApartment: builder.mutation({
			query: (payload) => ({
				url: "Apartment/AddNewApartment",
				method: "POST",
				body: payload
			}),
			invalidatesTags: ["Post"],
		}),
        getApartments: builder.query({
			query: () => ({
				url: "Apartment/GetApartments",
				method: "GET"
			}),
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
			async onQueryStarted(id, { dispatch, queryFulfilled }) {
				try {
				} catch (err) {
					console.log(err)
				}
			},
		}),
		getApartmentByType: builder.mutation({
			query: (payload = {page: 0}) => ({
				url: "Apartment/GetApartmentsGroupByType",
				method: "POST",
				body: payload,
				headers: {
					"Content-type": "application/json",
				},
			}),
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
			async onQueryStarted(id, { dispatch, queryFulfilled }) {
				try {
				} catch (err) {
					console.log(err)
				}
			},
		}),
		getFilteredApartments: builder.mutation({
			query: (payload) => ({
				url: "Apartment/GetFilteredApartments",
				method: "POST",
				body: payload,
				headers: {
					"Content-type": "application/json",
				},
			}),
			async onQueryStarted(id, { dispatch, queryFulfilled }) {
				try {
				} catch (err) {
					console.log(err)
				}
			},
		}),
		getDashboardChartData: builder.mutation({
			query: (payload) => ({
				url: "Apartment/GetDashboardChartData",
				method: "POST",
				body: payload,
				headers: {
					"Content-type": "application/json",
				},
			}),
			async onQueryStarted(id, { dispatch, queryFulfilled }) {
				try {
				} catch (err) {
					console.log(err)
				}
			},
		}),
	}),
});

export const {  useGetDashboardChartDataMutation, useAddNewApartmentMutation, useGetApartmentsQuery, useGetPostApartmentsMutation, useGetApartmentsByFieldsMutation, useGetApartmentMutation, useGetApartmentByTypeMutation, useGetApartmentByIdMutation, useGetHomePageApartmentsMutation, useGetFilteredApartmentsMutation } = apartmentApi;
