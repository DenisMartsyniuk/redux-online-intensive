import { takeEvery, all, call } from "redux-saga/effects";

import { types } from "../types";

import { signup, login } from "./workers";

export function* watchLogin () {
    yield takeEvery(types.LOGIN_ASYNC, login);
}

export function* watchSignup () {
    yield takeEvery(types.SIGNUP_ASYNC, signup);
}

export function* watchAuth () {
    yield all([call(watchSignup), call(watchLogin)]);
}
