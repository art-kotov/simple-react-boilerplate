//Core
import { put, apply } from "redux-saga/effects";

// Instruments
import { api } from "services/api";
import { usersActions } from "../../actions";

export function* fetchUsers() {
  try {
    const response = yield apply(api, api.users.fetch);
    const data = yield apply(response, response.json);

    if (response.status !== 200) {
      throw new Error("user fetch failed");
    }
    yield put(usersActions.fillUsers(data));
  } catch (error) {
    console.log(error);
  } finally {
    console.log("final fetch");
  }
}
