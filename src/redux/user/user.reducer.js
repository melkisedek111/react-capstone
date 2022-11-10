import { createSlice } from '@reduxjs/toolkit'


const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {
            is_user: false,
            increment: 0
        }
    },
    reducers: {
        increment: (state, action) => {
            console.log(action)
            state.increment++;
        }
    }
})

export const { increment } = userSlice.actions;
export default userSlice.reducer;