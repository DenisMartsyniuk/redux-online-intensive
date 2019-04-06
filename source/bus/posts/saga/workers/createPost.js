import { put, apply } from "redux-saga";

import { api } from "../../../../REST";
import { createPost as createPostAC } from "../../actions";

export function* createPost({ payload: comment }) {
  const responce = yield apply(api, api.posts.create, [comment]);
  const result = yield apply(responce, responce.json);

  yield put(createPostAC(result.data));
}
