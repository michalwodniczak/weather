import { call, put, takeLatest, delay } from "redux-saga/effects";
import { getApi } from "../getApi";
import { fetchWeatcher, setData, setStatus } from "./searchSlice";


function* fetchWeatcherHandler() {
    try {
        delay(2000)
        yield put(setStatus("loading"))
        const data = yield call(getApi);
        yield put(setData(data));
        console.log(data);
        yield put(setStatus("succes"));
    } catch {
        yield put(setStatus("error"));
    }
}

export function* watchFetchWetcher() {
    yield takeLatest(fetchWeatcher.type, fetchWeatcherHandler);
    console.log("saga robi bzium")
}