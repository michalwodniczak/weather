import { all } from "redux-saga/effects";
import { watchFetchWetcher } from "./Search/searchSaga";

export default function* rootSaga() {
    yield all([
        watchFetchWetcher()
    ]);
};