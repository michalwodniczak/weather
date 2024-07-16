import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        data: null,
        status: "idle",
        inputValue: "",
        error: null,
    },
    reducers: {
        setSearchSuccess: (state, { payload: data }) => {
            state.status = "success";
            state.data = data;
        },

        setSearchFailure: (state, { payload: message }) => {
            state.data = null;
            state.status = "error";
            state.error = message;
        },

        setInputValue: (state, { payload: query }) => {
            state.status = "loading"
            state.inputValue = query;
        },

        setStatus: (state, { payload: status }) => {
            state.status = status;
        },
    },
});

const selectState = state => state.search;

export const selectData = state => selectState(state).data;
export const selectStatus = state => selectState(state).status;
export const selectInputValue = (state) => selectState(state).inputValue;

export const { setSearchSuccess, setInputValue, setSearchFailure, setStatus } = searchSlice.actions;

export default searchSlice.reducer;