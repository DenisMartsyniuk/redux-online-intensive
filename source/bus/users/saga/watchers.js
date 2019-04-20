import { takeEvery, all, call } from "redux-saga/effects";

import { types } from "../types";

import { fetchUsers } from "./workers";

export function* watchWorker () {
    yield takeEvery(types.FETCH_USERS_ASYNC, fetchUsers);
}

export function* watchUsers () {
    yield all([call(watchWorker)]);
}
