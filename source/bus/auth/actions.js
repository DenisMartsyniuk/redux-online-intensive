import { types } from "./types";

export const authActions = {
    authenticate: () => ({
        type: types.AUTHENTICATE,
    }),

    initialize: () => ({
        type: types.INITIALIZE,
    }),

    signupAsync: (userData) => ({
        type:    types.SIGNUP_ASYNC,
        payload: userData,
    }),

    loginAsync: (userData) => ({
        type:    types.LOGIN_ASYNC,
        payload: userData,
    }),

    authenticateAsync: () => ({
        type: types.AUTHENTICATE_ASYNC,
    }),

    initializeAsync: () => ({
        type: types.INITIALIZE_ASYNC,
    }),
};
