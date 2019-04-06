import { put, apply } from "redux-saga/effects";

import { api } from "../../../../REST";
import { postsActions } from "../../actions";

export function* fetchPosts() {
  const responce = yield apply(api, api.posts.fetch);
  const result = yield apply(responce, responce.json);

  yield put(postsActions.fillPosts(result.data));
}
