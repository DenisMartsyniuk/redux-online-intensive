import { put, apply } from "redux-saga/effects";

import { api } from "../../../../REST";
import { postsActions } from "../../actions";
import { uiActions } from "../../../ui/actions";

export function* removePost ({ payload: postId }) {
    try {
        yield put(uiActions.startFetching());

        const responce = yield apply(api, api.posts.remove, [postId]);

        if (responce.status !== 204) {
            const { message } = yield apply(responce, responce.json);

            throw new Error(message);
        }

        yield put(postsActions.removePost({ postId }));
    } catch (error) {
        yield put(uiActions.emitError(error, "removePost worker"));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
