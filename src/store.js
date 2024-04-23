import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import searchReducer from "./Search/searchSlice";
import weatherReducer from "./features/WeatherApp/WeatherPage/weatherSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        weather: weatherReducer,
        search: searchReducer,
    },
    middleware: () => [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;