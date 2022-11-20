import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getUserState } from "../user/user.reducer.js";
import { getToken, rtkFetchBaseQuery } from "../utils/rtk.utils.js";

export const userApi = createApi({
	reducerPath: "userApi",
	baseQuery: fetchBaseQuery({
		baseUrl: APP_CONSTANTS.URL,
	}),
	tagTypes: ["Post"],
	endpoints: (builder) => ({
		registerNewUser: builder.mutation({
			query: (payload) => ({
				url: "User/RegisterNewUser",
				method: "POST",
				body: payload,
				headers: {
					"Content-type": "application/json",
				},
			}),
			invalidatesTags: ["Post"],
		}),
        getUsers: builder.query({
			query: () => ({
				url: "User/GetUsers",
                method: "POST",
				body: {},
				headers: {
					"Content-type": "application/json",
				},
			}),
			invalidatesTags: ["Post"],
		}),
        getPostUsers: builder.mutation({
			query: () => ({
				url: "User/GetUsers",
				method: "POST",
				body: {},
				headers: {
					"Content-type": "application/json",
				},
			}),
			invalidatesTags: ["Post"]
		}),
		loginUser: builder.mutation({
			query: (payload) => ({
				url: "Login/LoginUser",
				method: "POST",
				body: payload,
				headers: {
					"Content-type": "application/json",
				},
			}),
			invalidatesTags: ["Post"],
			async onQueryStarted(id, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled;
					if(data?.result?.userCount > 0){
						setTimeout(() => dispatch(getUserState(data)), 2500);
					}
				} catch (err) {
					console.log({err})
				}
			},
		}),
		checkUserLogin: builder.mutation({
			query: (payload) => ({
				url: "Login/CheckUserLogin",
				method: "POST",
				body: payload,
				headers: {
					"Content-type": "application/json",
					"Authorization": `Bearer ${getToken()}`
				},
			}),
			invalidatesTags: ["Post"],
			async onQueryStarted(id, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled;
					if(data?.result?.userCount > 0){
						dispatch(getUserState(data));
					}
					else {
						localStorage.removeItem("CAPSTONE_JWT_TOKEN");
					}
				} catch (err) {
					console.log(err)
				}
			},
		})
	}),
});

export const { useRegisterNewUserMutation, useGetUsersQuery, useGetPostUsersMutation, useLoginUserMutation, useCheckUserLoginMutation } = userApi;
