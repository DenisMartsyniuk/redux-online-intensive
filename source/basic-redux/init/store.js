import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";

import { rootReducer } from "./rootReducer";

const logger = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: () => "#139BFE",
    prevState: () => "#1c5faf",
    action: () => "#149945",
    nextState: () => "#A47104",
    error: () => "#ff0005"
  }
});

const preloadedState = JSON.parse(localStorage.getItem("gallery"));
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnchancers = devtools ? devtools : compose;

export const store = preloadedState
  ? createStore(
      rootReducer,
      preloadedState,
      composeEnchancers(applyMiddleware(logger))
    )
  : createStore(
      rootReducer,

      composeEnchancers(applyMiddleware(logger))
    );

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("gallery", JSON.stringify(state));
});
