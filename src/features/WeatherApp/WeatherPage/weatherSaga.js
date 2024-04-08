import { call, put, takeLatest} from "redux-saga/effects";
import { getApi } from "../../../getApi";
import { fetchData, setData, setStatus } from "./weatherSlice";

function* fetchWeatherHandler() {
    try {
        yield put(setStatus("loading"));
        const data = yield call(getApi);
        yield put(setData(data));
        yield put(setStatus("success"));
    } catch (error) {
        yield put(setStatus("error"));
    }
}

export function* watchFetchWeather() {
    yield takeLatest(fetchData.type, fetchWeatherHandler);
}
