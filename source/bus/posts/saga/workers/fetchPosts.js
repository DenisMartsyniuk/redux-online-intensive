import { put, apply } from "redux-saga/effects";

import { api } from "../../../../REST";
import { postsActions } from "../../actions";
import { uiActions } from "../../../ui/actions";

export function* fetchPosts () {
    try {
        yield put(uiActions.startFetching());

        const responce = yield apply(api, api.posts.fetch);
        const { data: posts, message } = yield apply(responce, responce.json);

        if (responce.status !== 200) {
            throw new Error(message);
        }

        yield put(postsActions.fillPosts(posts));
    } catch (error) {
        yield put(uiActions.emitError(error, "fetchPost worker"));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
