import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import weatherReducer from "./Search/searchSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        weather: weatherReducer,
    },
    middleware: () => [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;