import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {},
        isLoggedIn: false,
        JWTToken: undefined
    },
    reducers: {
        getUserState: (state, action) => {
            if(action.payload?.result?.userCount){
                state.user = action.payload?.result?.userData;
                state.JWTToken =  action.payload?.result?.token;
                state.isLoggedIn = true;
            }
        },
        removeUserState:async (state, action) => {
            state.user = {};
            state.isLoggedIn = false;
            state.JWTToken = undefined;
        }
    }
})

export const { getUserState, removeUserState } = userSlice.actions;
export default userSlice.reducer;