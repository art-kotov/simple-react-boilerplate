// Core
import { all, call } from "redux-saga/effects";

// Watchers
import { watchUsers } from "models/list/saga/watchers";

export function* rootSaga() {
  yield all([call(watchUsers)]);
}
