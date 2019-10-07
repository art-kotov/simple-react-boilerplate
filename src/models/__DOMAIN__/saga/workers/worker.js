//Core
import { put } from "redux-saga/effects";

// Instruments
import { actions } from "../../actions";

export function* worker() {
  yield put(actions.action());
}
