import { put, apply, select } from "redux-saga/effects";

import { api } from "../../../../REST";
import { postsActions } from "../../actions";
import { uiActions } from "../../../ui/actions";

export function* unlikePost ({ payload: postId }) {
    try {
        yield put(uiActions.startFetching());

        const responce = yield apply(api, api.posts.like, [postId]);

        if (responce.status !== 204) {
            const { message } = yield apply(responce, responce.json);

            throw new Error(message);
        }

        const unliker = yield select((state) =>
            state.profile.removeAll(["avatar", "token"])
        );

        yield put(postsActions.unlikePost({ unliker, postId }));
    } catch (error) {
        yield put(uiActions.emitError(error, "unlikePost worker"));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
