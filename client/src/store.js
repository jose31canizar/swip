import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import messages from "./reducers/messages";
import nav from "./reducers/nav";
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";
import { appNavigatorMiddleware } from "./routes";

const reducers = combineReducers({
  messages,
  nav
});

const store = createStore(
  reducers,
  applyMiddleware(thunk, appNavigatorMiddleware)
);
export default store;
