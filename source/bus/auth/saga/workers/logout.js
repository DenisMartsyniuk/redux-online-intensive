import { put, apply } from "redux-saga/effects";
import { actions } from "react-redux-form";

import { api } from "../../../../REST";
import { authActions } from "../../actions";
import { uiActions } from "../../../ui/actions";
import { profileActions } from "../../../profile/actions";
import { postsActions } from "../../../posts/actions";
import { usersActions } from "../../../users/actions";

export function* logout () {
    try {
        yield put(uiActions.startFetching());

        const responce = yield apply(api, api.auth.logout);

        if (responce.status !== 204) {
            const { message } = yield apply(responce, responce.json);

            throw new Error(message);
        }
    } catch (error) {
        yield put(uiActions.emitError(error, "logout worker"));
    } finally {
        yield apply(localStorage, localStorage.removeItem, ["token"]);
        yield apply(localStorage, localStorage.removeItem, ["remember"]);
        yield put(profileActions.clearProfile());
        yield put(postsActions.clearPost());
        yield put(usersActions.clearUsers());
        yield put(uiActions.stopFetching());
        yield put(actions.reset("forms.user"));
        yield put(authActions.logout());
    }
}
