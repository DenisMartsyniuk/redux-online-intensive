import { combineReducers } from "redux";

import { authReducer as auth } from "../bus/auth/reducer";
import { postReducer as posts } from "../bus/posts/reducer";
import { uiReducer as ui } from "../bus/ui/reducer";
import { profileReducer as profile } from "../bus/profile/reducer";
import { usersReducer as users } from "../bus/users/reducer";

export const rootReducer = combineReducers({
    auth,
    posts,
    ui,
    profile,
    users,
});
