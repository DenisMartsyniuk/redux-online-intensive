import { types } from "./types";

export const authActions = {
    authenticate: () => ({
        type: types.AUTHENTICATE,
    }),

    initialize: () => ({
        type: types.INITIALIZE,
    }),

    logout: () => ({
        type: types.LOGOUT,
    }),

    signupAsync: (userData) => ({
        type:    types.SIGNUP_ASYNC,
        payload: userData,
    }),

    loginAsync: (credentials) => ({
        type:    types.LOGIN_ASYNC,
        payload: credentials,
    }),

    authenticateAsync: () => ({
        type: types.AUTHENTICATE_ASYNC,
    }),

    initializeAsync: () => ({
        type: types.INITIALIZE_ASYNC,
    }),

    logoutAsync: () => ({
        type: types.LOGOUT_ASYNC,
    }),
};
