import { socket } from "../../init/socket";
import { uiActions } from "../ui/actions";
import { postsActions } from "../posts/actions";

export const socketActions = {
    listenConnection: () => (dispatch) => {
        socket.on("connect", () => {
            dispatch(uiActions.setOnlineState());
        });
        socket.on("disconnect", () => {
            dispatch(uiActions.setOfflineState());
        });
    },
    listenPosts: () => (dispatch, getState) => {
        socket.on("create", (source) => {
            const { data: post } = JSON.parse(source);

            dispatch(postsActions.fillNewPost(post));
        });

        socket.on("remove", (source) => {
            const { data } = JSON.parse(source);

            dispatch(postsActions.removePost({ postId: data }));
        });

        socket.on("like", (source) => {
            const { data, meta } = JSON.parse(source);

            if (meta.action === "like") {
                const liker = getState()
                    .users.find((user) => user.get("id") === data.userId)
                    .delete("avatar");

                dispatch(
                    postsActions.likePost({
                        postId: data.postId,
                        liker,
                    })
                );
            } else {
                dispatch(postsActions.unlikePost(data));
            }
        });
    },
};
