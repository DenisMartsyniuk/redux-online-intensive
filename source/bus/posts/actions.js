import { types } from "./types";

export const postsActions = {
    fetchPostsAsync: () => ({
        type: types.FETCH_POSTS_ASYNC,
    }),

    fillPosts: (posts) => ({
        type:    types.FILL_POSTS,
        payload: posts,
    }),

    createPostAsync: (comment) => ({
        type:    types.CREATE_POST_ASYNC,
        payload: comment,
    }),

    fillNewPost: (post) => ({
        type:    types.FILL_NEW_POST,
        payload: post,
    }),
};
