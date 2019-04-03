import { FETCH_POSTS_ASYNC, FILL_POSTS } from "./types";

export const fetchPosts = () => {
  return {
    type: FETCH_POSTS_ASYNC
  };
};

export const fillPosts = posts => {
  return {
    type: FILL_POSTS,
    payload: posts
  };
};
