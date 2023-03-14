import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    global_Loading: false,
}

export const sliceTodo = createSlice({
    name: 'todoState',
    initialState,
    reducers: {
        setGlobalLoading: (state, action) => {
            state.global_Loading = action.payload;
        },
    },
})

export const { setGlobalLoading } = sliceTodo.actions;