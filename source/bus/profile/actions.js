import { types } from "./types";

export const profileActions = {
    fillProfile: (profile) => ({
        type:    types.FILL_PROFILE,
        payload: profile,
    }),
    clearProfile: () => ({
        type: types.CLEAR_PROFILE,
    }),
};
