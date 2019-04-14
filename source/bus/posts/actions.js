import { types } from "./types";

export const postsActions = {
    fillPosts: (posts) => ({
        type:    types.FILL_POSTS,
        payload: posts,
    }),

    fillNewPost: (post) => ({
        type:    types.FILL_NEW_POST,
        payload: post,
    }),

    clearPost: () => ({
        type: types.REMOVE_POST,
    }),

    removePost: (postId) => ({
        type:    types.REMOVE_POST,
        payload: postId,
    }),

    fetchPostsAsync: () => ({
        type: types.FETCH_POSTS_ASYNC,
    }),

    createPostAsync: (comment) => ({
        type:    types.CREATE_POST_ASYNC,
        payload: comment,
    }),

    removePostAsync: (postId) => ({
        type:    types.REMOVE_POST_ASYNC,
        payload: postId,
    }),
};
