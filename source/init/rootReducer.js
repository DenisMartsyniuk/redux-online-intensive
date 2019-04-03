import { combineReducers } from "redux";

import { postReducer as post } from "../bus/posts/reducer";

export const rootReducer = combineReducers({
  post
});
