import { combineReducers } from "redux";

import { postReducer as posts } from "../bus/posts/reducer";

export const rootReducer = combineReducers({
  posts
});
