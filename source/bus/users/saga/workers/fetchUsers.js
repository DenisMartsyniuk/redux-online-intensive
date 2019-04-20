import { put, apply } from "redux-saga/effects";

import { api } from "../../../../REST";

import { uiActions } from "../../../ui/actions";
import { usersActions } from "../../../users/actions";

export function* fetchUsers () {
    try {
        yield put(uiActions.startFetching());

        const responce = yield apply(api, api.users.fetch);
        const { data: users, message } = yield apply(responce, responce.json);

        if (responce.status !== 200) {
            throw new Error(message);
        }

        yield put(usersActions.fillUsers(users));
    } catch (error) {
        yield put(uiActions.emitError(error, "fetchUsers worker"));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
