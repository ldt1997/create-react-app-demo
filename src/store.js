import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import home from "./pages/home/model/reducer";
import homeSaga from "./pages/home/model/sagas";
import myOrder from "./pages/myorder/model/reducer";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({ home, myOrder }),
  applyMiddleware(sagaMiddleware)
);

// then run the saga
sagaMiddleware.run(homeSaga);

export default store;
