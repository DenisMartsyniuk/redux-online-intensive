import { put, apply } from "redux-saga/effects";

import { api } from "../../../../REST";
import { postsActions } from "../../actions";
import { uiActions } from "../../../ui/actions";

export function* createPost({ payload: comment }) {
  try {
    yield put(uiActions.startFetching());

    const responce = yield apply(api, api.posts.create, [comment]);
    const { data: post, message } = yield apply(responce, responce.json);

    if (responce.status !== 200) {
      throw new Error(message);
    }

    yield put(postsActions.fillNewPost(post));
  } catch (error) {
    yield put(uiActions.emitError(error, "createPost worker"));
  } finally {
    yield put(uiActions.stopFetching());
  }
}
