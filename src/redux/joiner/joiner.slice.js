import { createSlice } from '@reduxjs/toolkit';

const joinerSlice = createSlice({
    name: "joiner",
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

export const { increment } = joinerSlice.actions;
export default joinerSlice.reducer;