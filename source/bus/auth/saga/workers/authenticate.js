import { put, apply } from "redux-saga/effects";

import { api } from "../../../../REST";
import { authActions } from "../../actions";
import { uiActions } from "../../../ui/actions";
import { profileActions } from "../../../profile/actions";

export function* authenticate () {
    try {
        yield put(uiActions.startFetching());

        const responce = yield apply(api, api.auth.authenticate);
        const { data: profile, message } = yield apply(responce, responce.json);

        if (responce.status !== 200) {
            throw new Error(message);
        }

        yield apply(localStorage, localStorage.setItem, [
            "token",
            profile.token
        ]);

        yield put(profileActions.fillProfile(profile));
        yield put(authActions.authenticate());
    } catch (error) {
        yield put(uiActions.emitError(error, "authenticate worker"));
    } finally {
        yield put(uiActions.stopFetching());
        yield put(authActions.initialize());
    }
}
