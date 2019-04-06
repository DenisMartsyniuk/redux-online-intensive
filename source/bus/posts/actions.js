import { types } from "./types";
import { api } from "../../REST";

export const fetchPostsAsync = () => async dispatch => {
  dispatch({
    type: types.FETCH_POSTS_ASYNC
  });

  const responce = await api.posts.fetch();
  const result = await responce.json();

  dispatch(fillPosts(result.data));
};

export const fillPosts = posts => {
  return {
    type: types.FILL_POSTS,
    payload: posts
  };
};

export const createPostAsync = () => ({
  type: types.CREATE_POST_ASYNC,
  payload: comment
});

export const fillNewPost = post => {
  return {
    type: types.FILL_NEW_POST,
    payload: post
  };
};
