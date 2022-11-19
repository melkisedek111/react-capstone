import { createSlice } from '@reduxjs/toolkit';

const errorSlice = createSlice({
    name: "error",
    initialState: {
        error: {}
    },
    reducers: {
        setGlobalError: (state, action) => {
            state.error = { status: action.payload.error.status };
        },
        removeGlobalError: (state, action) => {
            state.error = { };
        }
    }
})

export const { setGlobalError, removeGlobalError } = errorSlice.actions;
export default errorSlice.reducer;