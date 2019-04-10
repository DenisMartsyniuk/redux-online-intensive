import { Map } from "immutable";

import { types } from "./types";

const initialState = Map({
    isAuthenticated: true,
});

export const authReducer = (state = initialState, { action, payload }) => {
    switch (action) {
        case types.AUTHENTICATE:
            return state.set("isAuthenticated", true);

        default:
            return state;
    }
};
