import { createStore, combineReducers } from "redux";
import home from "./pages/home/model/reducer";
import myOrder from "./pages/myorder/model/reducer";

const store = createStore(combineReducers({ home, myOrder }));

export default store;
