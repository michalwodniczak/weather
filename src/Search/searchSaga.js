import { call, put, takeLatest, delay } from "redux-saga/effects";
import { getApi } from "../getApi";
import { fetchWeather, setData, setStatus } from "./searchSlice";


function* fetchWeatherHandler() {
    try {
        yield delay(2000);
        yield put(setStatus("loading"));
        const data = yield call(getApi);
        yield put(setData(data));
        // console.log(data);
        yield put(setStatus("success"));
    } catch (error) {
        yield put(setStatus("error"));
    };
};

export function* watchFetchWeather() {
    yield takeLatest(fetchWeather.type, fetchWeatherHandler);
};