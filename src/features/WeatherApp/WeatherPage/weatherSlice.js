import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        data: null,
        status: "null",
    },
    reducers: {
        fetchData: () => { },

        setData: (state, { payload: data }) => {
            state.data = data;
        },

        setStatus: (state, { payload: status }) => {
            state.status = status
        },

    },
});

export const { fetchData, setData, setStatus } = weatherSlice.actions;

const selectState = state => state.weather;

export const selectData = state => selectState(state).data;
export const selectStatus = state => selectState(state).status;
export default weatherSlice.reducer;