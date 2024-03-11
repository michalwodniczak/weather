import { createSlice } from "@reduxjs/toolkit";

const weatcherSlice = createSlice({
    name: "weatcher",
    initialState: {
        data: null,
        status: "null",
    },
    reducers: {
        fetchWeatcher: () => { },

        setStatus: (state, { payload: status }) => {
            state.status = status
        },

        setData: (state, { payload: data }) => {
            state.data = data
        },

    },
});

export const selectData = state => state.data
export const { fetchWeatcher, setStatus, setData } = weatcherSlice.actions;

export default weatcherSlice.reducer;