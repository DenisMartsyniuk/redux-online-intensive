import { Map } from "immutable";

import { types } from "./types";

const initialState = Map({
    id:        "",
    firstName: "",
    lastName:  "",
    avatar:    "",
    token:     "",
});

export const profileReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.FILL_PROFILE:
            return state.merge(payload);

        case types.CLEAR_PROFILE:
            return state.clear();

        default:
            return state;
    }
};
