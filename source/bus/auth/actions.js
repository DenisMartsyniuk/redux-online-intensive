import { types } from "./types";

export const authActions = {
    authenticate: () => ({
        type: types.AUTHENTICATE,
    }),

    signupAsync: (userData) => ({
        type:    types.SIGNUP_ASYNC,
        payload: userData,
    }),

    loginAsync: (userData) => ({
        type:    types.LOGIN_ASYNC,
        payload: userData,
    }),
};
