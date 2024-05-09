import { all } from "redux-saga/effects";
import { watchFetchWeather} from "./features/WeatherApp/WeatherPage/weatherSaga";
import { watchSearchWeather } from "./Search/searchSaga";

export default function* rootSaga() {
    yield all([
        watchFetchWeather(),
        watchSearchWeather(),
    ]);
};