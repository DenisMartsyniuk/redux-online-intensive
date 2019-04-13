import { put, apply } from "redux-saga/effects";

import { api } from "../../../../REST";
import { authActions } from "../../actions";
import { uiActions } from "../../../ui/actions";
import { profileActions } from "../../../profile/actions";

export function* login ({ payload: credentials }) {
    try {
        yield put(uiActions.startFetching());

        const responce = yield apply(api, api.auth.login, [credentials]);
        const { data: profile, message } = yield apply(responce, responce.json);

        if (responce.status !== 200) {
            throw new Error(message);
        }

        if (credentials.remember) {
            yield apply(localStorage, localStorage.setItem, ["remember", true]);
        }

        yield apply(localStorage, localStorage.setItem, [
            "token",
            profile.token
        ]);
        yield put(profileActions.fillProfile(profile));
        yield put(authActions.authenticate());
    } catch (error) {
        yield put(uiActions.emitError(error, "signup worker"));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
