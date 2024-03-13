import { all } from "redux-saga/effects";
import { watchFetchWeather } from "./Search/searchSaga";

export default function* rootSaga() {
    yield all([
        watchFetchWeather()
    ]);
};