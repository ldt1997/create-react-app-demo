import { call, put, takeEvery } from "redux-saga/effects";
import { fetchList, fetchTab } from "../service/home";

function* getList(payload) {
  const {
    data: { data, errCode }
  } = yield call(fetchList, payload);
  if (errCode === 0) {
    yield put({ type: "FETCH_LIST_SUCCESS", payload: data });
  }
}

function* getTab() {
  const {
    data: { data, errCode }
  } = yield call(fetchTab);
  if (errCode === 0) {
    yield put({ type: "FETCH_TAB_SUCCESS", payload: data });
  }
}

function* homeSaga() {
  yield takeEvery("FETCH_LIST", getList);
  yield takeEvery("FETCH_TAB", getTab);
}

export default homeSaga;
