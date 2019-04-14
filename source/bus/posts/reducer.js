import { fromJS, List } from "immutable";

import { types } from "./types";

const initialState = List();

export const postReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.FILL_POSTS:
            return fromJS(payload);

        case types.FILL_NEW_POST:
            return state.unshift(fromJS(payload));

        case types.CLEAR_POSTS:
            return state.clear();

        default:
            return state;
    }
};
