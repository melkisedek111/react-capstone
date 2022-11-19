import { createSlice } from '@reduxjs/toolkit'


const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {},
        isLoggedIn: false,
    },
    reducers: {
        getUserState: (state, action) => {
            if(action.payload?.result?.userCount){
                state.user = action.payload?.result?.userData;
                localStorage.setItem("CAPSTONE_JWT_TOKEN", action.payload?.result?.token);
                state.isLoggedIn = true;
            }
        },
        removeUserState:(state, action) => {
            state.user = {};
            state.isLoggedIn = false;
        }
    }
})

export const { getUserState, removeUserState } = userSlice.actions;
export default userSlice.reducer;