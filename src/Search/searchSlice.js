import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        data: null,
        status: "null",
        inputValue: ""
    },
    reducers: {
        fetchWeather: () => { },

        setStatus: (state, { payload: status }) => {
            state.status = status
        },

        setData: (state, { payload: data }) => {
            state.data = data
        },
        setInputValue: (state, { payload: query }) => {
            state.status = "loading"
            state.inputValue = query;
        },
    },
});

export const selectData = state => state.data;
export const selectStatus = state => state.status;
export const selectInputValue = (state) => state.inputValue;
export const { fetchWeather, setStatus, setData, setInputValue } = weatherSlice.actions;

export default weatherSlice.reducer;