import { types } from "./types";

const initialState = {};

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.TYPE:
            return state;

        default:
            return state;
    }
};
