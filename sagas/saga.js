import { all, call, delay, put, take, takeLatest } from "redux-saga/effects";
import { failure, loadDataSuccess, tickClock } from "../redux/actions";
import * as types from "../redux/types";
import apiTravelook from "../api/apiTravelook";

function* runClockSaga() {
  yield take(types.START_CLOCK);
  while (true) {
    yield put(tickClock(false));
    yield delay(1000);
  }
}

function* loadDataSaga() {
  try {
    const res = yield call(apiTravelook.callTravelookAPI, 'GET', '/Demo');
    const data = yield res;
    yield put(loadDataSuccess(data));
  } catch (err) {
    yield put(failure(err));
  }
}

function* rootSaga() {
  yield all([call(runClockSaga), takeLatest(types.LOAD_DATA, loadDataSaga)]);
}

export default rootSaga;
