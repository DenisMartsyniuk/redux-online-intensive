import { createStore, combineReducers } from "redux";

import { store } from "../store";

import { authReducer as auth } from "../../bus/auth/reducer";
import { postReducer as posts } from "../../bus/posts/reducer";
import { uiReducer as ui } from "../../bus/ui/reducer";
import { profileReducer as profile } from "../../bus/profile/reducer";
import { usersReducer as users } from "../../bus/users/reducer";
import { formsReducer as forms } from "../../bus/forms/reducer";

const referenceRootReducer = combineReducers({
    auth,
    posts,
    ui,
    profile,
    users,
    forms,
});

const referenceStore = createStore(referenceRootReducer);

describe("store", () => {
    test("should have valid state shape", () => {
        expect(store.getState()).toEqual(referenceStore.getState());
    });
});
