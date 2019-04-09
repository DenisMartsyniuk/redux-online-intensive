import { MAIN_URL, groupId } from "./config";

export const api = {
    posts: {
        fetch () {
            return fetch(`${MAIN_URL}/feed`, {
                method:  "GET",
                headers: {
                    "X-No-Auth": groupId,
                },
            });
        },
        create (comment) {
            return fetch(`${MAIN_URL}/feed`, {
                method:  "POST",
                headers: {
                    "X-No-Auth":    groupId,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ comment }),
            });
        },
    },
};
