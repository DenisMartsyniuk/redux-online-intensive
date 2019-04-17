import { types } from "./types";

export const authActions = {
    authenticate: () => ({
        type: types.AUTHENTICATE,
    }),

    signupAsync: (userData) => ({
        type:    types.SIGNUP_ASYNC,
        payload: userData,
    }),

    loginAsync: (credentials) => ({
        type:    types.LOGIN_ASYNC,
        payload: credentials,
    }),
};
