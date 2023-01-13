import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import getCatsReducer from "./reducers/cats";
import { watcherSaga } from "./sagas/rootSaga";

const reducer = combineReducers({
    cats: getCatsReducer
});
const sagaMiddleWare = createSagaMiddleware();

const store = createStore(reducer, {}, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(watcherSaga);

export default store;