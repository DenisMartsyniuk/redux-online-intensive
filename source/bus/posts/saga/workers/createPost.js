import { put, apply } from "redux-saga/effects";

import { api } from "../../../../REST";
import { postsActions } from "../../actions";

export function* createPost({ payload: comment }) {
  try {
    const responce = yield apply(api, api.posts.create, [comment]);
    const { data: post, message } = yield apply(responce, responce.json);

    if (responce !== 200) {
      throw new Error(message);
    }

    yield put(postsActions.fillNewPost(post));
  } catch (error) {
    console.log(error);
  }
}
