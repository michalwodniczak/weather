import { call, put, takeLatest, select } from "redux-saga/effects";
import { getSearch } from "../getSearch";
import { selectInputValue, setInputValue, setSearchFailure, setSearchSuccess } from "./searchSlice";

function* fetchWeatherHandler() {
    try {
        const query = yield select(selectInputValue);
        if (query !== '') {
            const result = yield call(getSearch, query);
            yield put(setSearchSuccess(result));
        }
    } catch (error) {
        yield put(setSearchFailure(error.message));
    };
};

export function* watchSearchWeather() {
    yield takeLatest(setInputValue.type, fetchWeatherHandler);
};