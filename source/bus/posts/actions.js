import { FETCH_POSTS_ASYNC, FILL_POSTS } from "./types";
import { api } from "../../REST";

export const fetchPostsAsync = () => async (dispatch, getState) => {
  dispatch({
    type: FETCH_POSTS_ASYNC
  });

  const responce = await api.posts.fetch();
  const result = await responce.json();

  dispatch(fillPosts(result.data));
};

export const fillPosts = posts => {
  return {
    type: FILL_POSTS,
    payload: posts
  };
};
