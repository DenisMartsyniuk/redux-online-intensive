import { types } from "./types";

const initialState = {};

export const reducer = (state = initialState, { action, payload }) => {
  switch (action) {
    case types.TYPE:
      return state;

    default:
      return state;
  }
};
