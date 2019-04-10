import { combineReducers } from "redux";

import { authReducer as auth } from "../bus/auth/reducer";
import { postReducer as posts } from "../bus/posts/reducer";
import { uiReducer as ui } from "../bus/ui/reducer";

export const rootReducer = combineReducers({
    auth,
    posts,
    ui,
});
