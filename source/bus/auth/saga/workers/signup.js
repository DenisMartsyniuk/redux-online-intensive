import { put, apply } from "redux-saga/effects";

import { api } from "../../../../REST";
import { authActions } from "../../actions";
import { uiActions } from "../../../ui/actions";
import { profileActions } from "../../../profile/actions";

export function* signup ({ payload: userInfo }) {
    try {
        yield put(uiActions.startFetching());

        const responce = yield apply(api, api.auth.signup, [userInfo]);
        const { data: profile, message } = yield apply(responce, responce.json);

        if (responce.status !== 200) {
            throw new Error(message);
        }

        yield put(profileActions.fillProfile(profile));
        yield put(authActions.authenticate());
    } catch (error) {
        yield put(uiActions.emitError(error, "signup worker"));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
