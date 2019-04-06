import { put, apply } from "redux-saga/effects";

import { api } from "../../../../REST";
import { postsActions } from "../../actions";

export function* createPost({ payload: comment }) {
  const responce = yield apply(api, api.posts.create, [comment]);
  const result = yield apply(responce, responce.json);

  yield put(postsActions.fillNewPost(result.data));
}
