import { takeEvery, all, call } from "redux-saga/effects";

import { types } from "../types";

import { createPost } from "./workers";

// export function* watchFetchPosts() {
//   yield takeEvery(types.FETCH_POSTS_ASYNC, fetchPosts);
// }

export function* watchCreatePost () {
    yield takeEvery(types.CREATE_POST_ASYNC, createPost);
}

export function* watchPost () {
    yield all([call(watchCreatePost)]);
}
